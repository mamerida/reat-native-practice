import { StyleSheet } from "react-native"
import theme from "../theme"
import { Platform } from "react-native"

export const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    characterList : {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    characterName :{
        fontWeight: "bold",
        marginBottom: 5
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    create:{
        padding:4,
        color:theme.colors.white,
       // backgroundColor: Platform.OS === 'ios' ? 'red' : theme.colors.primary, forma 1 incomoda
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios:'orange',
            default:'purple'

        }), 
        marginBottom:5,
        marginTop:5,
        alignSelf:'flex-start',
        borderRadius:4,
        overflow:"hidden", // para que aparezca el borderRadius
    },
    headerStyle:{
        flexDirection:'row',
        paddingBottom:20,
        alignItems:'flex-end'
    },
    headerNameStyle:{
        paddingLeft: 10,
        flex: 1, // ocupa todo el contenedor y hace salto de linea si es necesario
    }
})