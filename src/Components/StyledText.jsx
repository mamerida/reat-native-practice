import React from "react";
import { Text,StyleSheet } from "react-native";


const styles = StyleSheet.create({
    text:{
        fontSize:12,
        color:"grey"
    },
    bold:{
        fontWeight: 'bold'
    },
    blue:{
        color:"blue"
    },
    big:{
        fontSize: 20
    },
    small : {
        fontSize: 10
    }
})


export default function StyledText ({blue, bold, children, big, small}) {
    const textStyles = [
        styles.text,
        blue && styles.blue,
        bold && styles.bold,
        small && styles.small,
        big && styles.big, 
    ]
    return(
        <Text style={textStyles}>
            {children}
        </Text>
    )
}