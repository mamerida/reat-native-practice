import { StyleSheet } from "react-native"
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
    container : {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1
    },
    characterList : {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    characterName :{
        fontWeight: "bold",
        marginBottom: 5
    },
    tinyLogo: {
        width: 80,
        height: 80,
    },
})