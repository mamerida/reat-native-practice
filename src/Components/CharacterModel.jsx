import React from "react";
import { View, Text, Image} from "react-native";
import {styles} from '../styles/stylesMain';

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
        <Text style={styles.characterName} >{character.name}</Text>
        <Text>{character.gender}</Text>
        <Text>{character.status}</Text>
        <Text>{character.id}</Text>
    </View>
)

export default CharacterToShow