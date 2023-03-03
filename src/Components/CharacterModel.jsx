import React from "react";
import { View, Image} from "react-native";
import {styles} from '../styles/stylesMain';
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

const CharacterToShow = ({character}) => (
    <View 
        key={character.id}
        style={styles.characterList}
    >
        <Image
        style={styles.tinyLogo}
        source={{
          uri: character.image,
        }}
        />
        <StyledText  fontWeight="bold" fontSize="subheading" >{character.name}</StyledText>
        <CharactersDetails {...character} />
    </View>
)

export default CharacterToShow