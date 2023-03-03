import React from "react";
import {ViewProperties, View, StyleSheet} from "react-native"
import StyledText from "./StyledText";
import theme from "../theme";
import Constants from 'expo-constants'


const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop:Constants.statusBarHeight + 10,
        paddingBottom:10,
        paddingLeft:10,

    },
    text: {
        color: theme.appBar.primaryText
    }
})

const AppBar = () =>{
    return(
        <View style={styles.container}>
            <StyledText fontWeight='bold' style={styles.text}>
                Character List
            </StyledText>
        </View>
    )
}

export default AppBar