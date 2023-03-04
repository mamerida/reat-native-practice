import React from 'react';
import { Text,View } from 'react-native';
import {styles} from '../styles/stylesMain';
import AppBar from './AppBar';
import CharacterList from './CharacterList';
import { Routes, Route } from 'react-router-native';

const Main = () => {
    return(
        <View
            style={styles.container}
        >
            <AppBar/>
            <Routes>
                <Route exact path="/" element={<CharacterList/>}/>
                <Route exact path="/singIn" element={<Text> In progress</Text>} />
            </Routes>
        </View>
    )
}

export default Main