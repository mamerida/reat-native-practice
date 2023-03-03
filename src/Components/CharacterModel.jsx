import React from "react";
import { View, Image, TouchableNativeFeedback, Alert} from "react-native";
import {styles} from '../styles/stylesMain';
import StyledText from "./StyledText";
import CharactersDetails from "./CharacterDetails";

const HeaderCharacter = ({character}) =>(
    <View style={styles.headerStyle}>
        <Image
                style={styles.tinyLogo}
                source={{
                uri: character.image,
                }}
            />
        <View style={styles.headerNameStyle} >
            <StyledText  fontWeight="bold" fontSize="subheading" >{character.name}</StyledText>
            <StyledText style={styles.create}>{character.created}</StyledText>
        </View>
    </View>
)


const CharacterToShow = ({character}) => (
    <View 
        key={character.id}
        style={styles.characterList}
    >
        <HeaderCharacter character={character}/>
        <CharactersDetails {...character} />
        
    </View>
)

export default CharacterToShow