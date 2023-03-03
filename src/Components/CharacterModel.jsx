import React from "react";
import { View, Image} from "react-native";
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
        <StyledText  fontWeight="bold" fontSize="subheading" >{character.name}</StyledText>
        <StyledText>{character.gender}</StyledText>
        <StyledText >{character.status}</StyledText>
        <StyledText fontWeight="bold" >{character.id}</StyledText>
    </View>
)

export default CharacterToShow