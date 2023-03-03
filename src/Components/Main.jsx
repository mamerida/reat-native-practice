import React from 'react';
import { Text,View } from 'react-native';
import {styles} from '../styles/stylesMain';
import CharacterList from './CharacterList';

const Main = () => {
    return(
        <View
            style={styles.container}
        >
            <CharacterList/>
        </View>
    )
}

export default Main