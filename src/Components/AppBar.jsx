import React from "react";
import {TouchableWithoutFeedback, View, StyleSheet, ScrollView} from "react-native"
import StyledText from "./StyledText";
import theme from "../theme";
import Constants from 'expo-constants'
import { Link, useLocation } from "react-router-native";


const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop:Constants.statusBarHeight + 10,
        paddingLeft:10,
        flexDirection:'row'

    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    scroll:{
        paddingBottom: 15,

    },
    active:{
        color: theme.appBar.primaryText,
    }
})

const AppBarTab = ({children, to})=>{

    const {pathname} = useLocation()
    
    const textStyles = [
        styles.text,
        pathname == to  &&  styles.active
    ]

    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )

}

const AppBar = () =>{
    return(
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab  to="/"> Character List</AppBarTab>
                <AppBarTab  to="/singin"> Sing In</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar