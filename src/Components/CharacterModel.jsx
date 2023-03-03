import React from "react";
import { View, Text, Image} from "react-native";
import {styles} from '../styles/stylesMain';
import StyledText from "./StyledText";

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
        <StyledText bold >{character.name}</StyledText>
        <StyledText blue>{character.gender}</StyledText>
        <StyledText small>{character.status}</StyledText>
        <StyledText big>{character.id}</StyledText>
    </View>
)

export default CharacterToShow