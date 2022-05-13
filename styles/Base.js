import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        alignItems: 'center',
        fontSize: 20,
        textAlign: 'center'
    },
    headline: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 48,
        fontWeight: "bold",
        letterSpacing: 1,
        position: 'absolute',
        marginTop: "100%",
        fontFamily: "Helvetica",
    },
    container: {
        flex: 1,
    },
    bold: {
        fontWeight: "bold",
    },
    left: {
        padding: 1,
        fontSize: 14,
        marginTop: 10,
        lineHeight: 20,
        letterSpacing: 1,
        textAlign: 'left',
        fontFamily: 'Helvetica',
    },
    green: {
        color: 'green'
    },
    red: {
        color: 'red'
    },
    info: {
        alignSelf: 'center',
        lineHeight: 74,
        letterSpacing: 1,
        textAlign: 'center',
        marginTop: 10,
        color: '#000',
        fontSize: 28,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },
    base: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    items: {
        alignSelf: 'center',
        width: 360,
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        lineHeight: 20,
        letterSpacing: 1,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        fontWeight: 'normal',
    },
});
