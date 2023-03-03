import React from "react";
import {View, Text, FlatList} from "react-native";
import fakeBack from "../../data/fakeBack.js";


const CharacterList = () =>{
    return(
        <FlatList 
        data={fakeBack}
        ItemSeparatorComponent = {()=> <Text></Text>}
        renderItem={({item:character})=>(
            <View key={character.id}>
                    <Text>{character.name}</Text>
                    <Text>{character.gender}</Text>
                    <Text>{character.status}</Text>
                    <Text>{character.episode}</Text>
                </View>
        )}
        />
    )
}

export default CharacterList