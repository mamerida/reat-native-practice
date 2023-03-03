import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const CharactersDetails = character =>{
    return(
        <View style={{
            flexDirection:'row',
            justifyContent:'space-around'
        }}>
            <View style={{
                alignItems:'center'
            }}>
                <StyledText fontWeight="bold" >ID</StyledText>
                <StyledText>{character.id}</StyledText>
            </View>
            <View style={{
                alignItems:'center'
            }}>
                <StyledText  fontWeight="bold" >Gender</StyledText>
                <StyledText>{character.gender}</StyledText>
            </View>
            <View style={{
                alignItems:'center'
            }}>
                <StyledText fontWeight="bold" >Status</StyledText>
                <StyledText>{character.status}</StyledText>
            </View>
        </View>
    )
}

export default CharactersDetails