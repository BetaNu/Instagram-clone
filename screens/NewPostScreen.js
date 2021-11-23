import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddNewPost from '../components/newPost/AddNewPost'
import FormikPostUploader from '../components/newPost/FormikPostUploader'

const NewPostScreen = ({navigation}) => {
    return (
    <SafeAreaView style={styles.container}>
        <AddNewPost navigation={navigation} />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    
})

export default NewPostScreen
