import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LoginForm from '../components/login/LoginForm'

const INSTAGRAM_LOGO = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'

const LoginScreen = () => (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={{uri: INSTAGRAM_LOGO, height: 100, width: 100}} />
        </View>
    <LoginForm />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logo: {
        alignItems: 'center',
        marginTop: 60
    }
})

export default LoginScreen
