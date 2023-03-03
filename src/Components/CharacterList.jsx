import React from "react";
import {View, Text, FlatList} from "react-native";
import fakeBack from "../../data/fakeBack.js";
import CharacterToShow from "./CharacterModel.jsx";


const CharacterList = () =>{
    return(
        <FlatList 
        data={fakeBack}
        ItemSeparatorComponent = {()=> <Text></Text>}
        renderItem={({item:character})=> (
            <CharacterToShow character={character} />
        )}
        />
    )
}

export default CharacterList