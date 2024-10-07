import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        
    },

    Pages:{
        flexDirection: 'row',
        marginTop: 10,
    },


    Sair:{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    PagesText:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#fff',
        alignSelf: "center",
        marginLeft: 10,
    },

    SairText:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#fff',
        alignSelf: "center",
        marginLeft: 20,
    },

    footer:{
        padding: 10,
    },

    logo:{
        width: 80,
        height: 50,
        alignSelf: "center",
        marginTop: 10,
    },

    texto: {
        color: '#fff',
        fontSize: 20
    },

    texto1: {
        color: '#fff',
        fontSize: 20
    },

    onda: {
        height: 50,
        top: 10
    }
})