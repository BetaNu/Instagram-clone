import { Formik, yupToFormErrors } from 'formik'
import React, { useState } from 'react'
import { View, Text, TextInput, Image, Button } from 'react-native'
import * as Yup from 'yup'
import {formik} from 'formik'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import validUrl from 'valid-url'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A url is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const PLACEHOLDER_IMG = 'https://img.icons8.com/pastel-glyph/64/ffffff/upload--v1.png'

const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    return (
        <Formik
        initialValues={{caption: '', imageUrl: ''}}
        onSubmit={(values) => {
            console.log(values)
            console.log('Your post was submitted successfully')
            navigation.goBack()
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
        >

            {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
                <>
                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image source={{uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG}} 
                            style={{width: 100, height: 100}}

                        />
                        <View style={{ flex: 1, marginLeft: 12 }} >
                            <TextInput 
                                style={{ color: 'white', fontSize: 20 }}
                                placeholder='Write a caption...'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput 
                        style={{ color: 'white', fontSize: 18 }}
                        placeholder='Enter Image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red'}}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </>
            )}

        </Formik>
    )
}

export default FormikPostUploader
