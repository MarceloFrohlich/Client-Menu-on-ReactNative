import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create ({
    logo: {
        height: 125,
        width: 125,
        marginTop: 50,
        alignSelf: 'center',
    },
    container: {
        paddingHorizontal: 20,
        backgroundColor: '#8d4925',
        flex: 1
    },
    input: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingLeft: 20,
        marginTop: 20
    },
    sugestoes: {
        fontSize: 26,
        color: 'gold',
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
})

export default estilo;