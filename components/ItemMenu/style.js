import {StyleSheet} from 'react-native'

export const estilo = StyleSheet.create({
    container:{
        display: 'flex',
        alignSelf:'center',
        width: '100%',
        height: 100,    
        marginTop: 15,
        marginBottom: 25,
        flexDirection: 'row',
        backgroundColor: 'grey',    
        borderRadius: 30,   
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        width: 96,
        height: 96,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 30,
    },
    texto: {
        borderRadius: 30,
        marginLeft: 5,
        backgroundColor: 'white',
        height: '90%',
    },
    titulo: {
        marginTop: 5,
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    descricao: {
        fontSize: 14,
        width: 270,
        paddingLeft: 10,
        paddingTop: 3,
        textAlign: 'center'
    }
})