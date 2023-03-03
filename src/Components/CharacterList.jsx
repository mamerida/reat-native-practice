import React from "react";
import {View, Text, FlatList} from "react-native";
import fakeBack from "../../data/fakeBack.js";
import {styles} from '../styles/stylesMain';


const CharacterList = () =>{
    return(
        <FlatList 
        data={fakeBack}
        ItemSeparatorComponent = {()=> <Text></Text>}
        renderItem={({item:character})=>(
            <View 
                key={character.id}
                style={styles.characterList}
            >
                    <Text style={styles.characterName} >{character.name}</Text>
                    <Text>{character.gender}</Text>
                    <Text>{character.status}</Text>
                    <Text>{character.episode}</Text>
                </View>
        )}
        />
    )
}

export default CharacterList