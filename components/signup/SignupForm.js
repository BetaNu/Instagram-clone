import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Formik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import db from '../../firebase'
import { collection, doc, setDoc } from 'firebase/firestore'

const SignupForm = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(8, 'Your password has to have at least 8 characters')
    })

    const onSignup = async(email, password, username) => {
        try {
            const authUser = await createUserWithEmailAndPassword(getAuth(), email, password)
            console.log('Firebase user created successfully', email, password)
            
            const userRef = collection(db, "users");

            await setDoc(doc(userRef, authUser.user.email), {
                owner_uid: authUser.user.uid,
                username: username,
                email: authUser.user.email,
                profile_picture: await getRandomProfilePicture(),
            })
        } catch(error){
            Alert.alert(error.message);
        }
    }

    const getRandomProfilePicture = async() => {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        return data.results[0].picture.large
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email: '', username: '', password: ''}}
                onSubmit={values => onSignup(values.email, values.password, values.username)}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                        <View style={[styles.inputField, 
                        {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'}
                        ]}>
                            <TextInput
                                placeholderTextColor= '#444'
                                placeholder='Email'
                                autoCapitalize= 'none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus= {true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField, 
                        {borderColor: values.username.length < 1 || values.username.length >= 2 ? '#ccc' : 'red'}
                        ]}>
                            <TextInput
                                placeholderTextColor= '#444'
                                placeholder='Username'
                                autoCapitalize= 'none'
                                textContentType='username'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>
                        <View style={[styles.inputField, 
                        {borderColor: values.password.length < 1 || values.password.length >= 8 ? '#ccc' : 'red'}
                        ]}>
                            <TextInput 
                                placeholderTextColor= '#444'
                                placeholder='Password'
                                autoCapitalize= 'none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <Pressable titleSize={20} style={styles.button(isValid)} onPress={handleSubmit} disabled={!isValid} >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>

                        <View style={styles.signupContainer}>
                            <Text>Already have an account ? </Text>
                            <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                                <Text style={{color: '#6BB0F5'}}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    }),
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%', 
        justifyContent: 'center',
        marginTop: 50
    }
})

export default SignupForm
