import React from 'react';
import { Text,View } from 'react-native';
import {styles} from '../styles/stylesMain';
import AppBar from './AppBar';
import CharacterList from './CharacterList';

const Main = () => {
    return(
        <View
            style={styles.container}
        >
            <AppBar/>
            <CharacterList/>
        </View>
    )
}

export default Main