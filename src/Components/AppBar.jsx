import React from "react";
import {TouchableWithoutFeedback, View, StyleSheet} from "react-native"
import StyledText from "./StyledText";
import theme from "../theme";
import Constants from 'expo-constants'
import { Link } from "react-router-native";


const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop:Constants.statusBarHeight + 10,
        paddingBottom:10,
        paddingLeft:10,
        flexDirection:'row'

    },
    text: {
        color: theme.appBar.primaryText,
        paddingHorizontal: 10
    }
})

const AppBarTab = ({active,children, to})=>{

    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>
        </Link>
    )

}
const AppBar = () =>{
    return(
        <View style={styles.container}>
            <AppBarTab active to="/"> Character List</AppBarTab>
            <AppBarTab active to="/singin"> Sing In</AppBarTab>
        </View>
    )
}

export default AppBar