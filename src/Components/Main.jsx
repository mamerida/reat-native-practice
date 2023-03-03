import React from 'react';
import { Text,View } from 'react-native';
import {styles} from '../styles/stylesMain';

const Main = () => {
    return(
        <View
            style={styles.container}
        >
            <Text> Hi! Im the main </Text>
        </View>
    )
}

export default Main