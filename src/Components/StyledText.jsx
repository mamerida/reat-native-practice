import React from "react";
import { Text,StyleSheet } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
    text:{
        fontSize:theme.fontSizes.body,
        color:theme.colors.textPrimary,
        fontFamily:theme.fonts.main,
        fontWeight:theme.fontWeights.normal
    },
    bold:{
        fontWeight: theme.fontWeights.bold
    },
    colorPrimary:{
        color:theme.colors.textPrimary
    },
    colorSecondary:{
        fontSize: theme.colors.textSecondary
    },
    subHeading : {
        fontSize: theme.fontSizes.subheading
    }
})


export default function StyledText ({children, color, fontSize, fontWeight, style, ...restProps}) {
    const textStyles = [
        styles.text,
        color == "primary" && styles.colorPrimary,
        color == "secondary" && styles.colorSecondary,
        fontSize == "subheading" && styles.subHeading,
        fontWeight == "bold" && styles.bold
    ]
    return(
        <Text style={textStyles} {...restProps}>
            {children}
        </Text>
    )
}