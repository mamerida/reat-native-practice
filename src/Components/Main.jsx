import React from 'react';
import { Text,View } from 'react-native';
import {styles} from '../styles/stylesMain';
import AppBar from './AppBar';
import CharacterList from './CharacterList';
import { Routes, Route } from 'react-router-native';

//en caso de yo querer tener componentes especificos por dispositivo
// mejor usado cuando los ficheros son remotos 
/*
const AppBar = Platform.select({
    ios: () => require('./IOSAppBar.jsx'),default,
    default: () => require('./AppBar.jsx'),default,
})() 
*/

//para ficheros locales 
// en el import 
/*
import AppBar from './AppBar'; importo de esta manera 
el archivo deberia ser 

AppBar.ios.jsx
*/

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