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
        height: 60,
        alignSelf: 'center',
        color: '#fff',
        fontSize: 32,
        letterSpacing: 1,
        position: 'absolute',
        marginTop: "80%",
        fontFamily: "Hiragino Sans",
        fontWeight: "bold",
        color: "#fff",
    },
    headlineText: {
        marginTop: 15,
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18,
        letterSpacing: 1,
        fontFamily: "Hiragino Sans",
        fontWeight: "bold",
        color: "#A8B0BD",
    },
    container: {
        flex: 1,
    },
    bold: {
        fontWeight: "bold",
    },
    bigger: {
        fontSize: 16,
    },
    left: {
        padding: 1,
        margin: 5,
        textAlign: 'left',
        fontFamily: 'Hiragino Sans',

    },
    green: {
        color: 'green'
    },
    red: {
        color: 'red'
    },
    info: {
        lineHeight: 50,
        letterSpacing: 1,
        marginTop: 10,
        color: '#000',
        fontSize: 20,
        fontFamily: 'Hiragino Sans',
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
        fontFamily: 'Hiragino Sans',
        fontWeight: 'normal',
    },
    header2: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'Hiragino Sans',
        height: 30,
    },
    textInputStyle: {
        height: 40,
        paddingLeft: 20,
        margin: 5,
        backgroundColor: '#ededed',
        borderRadius: 10,
        color: "#000",
    },
    itemStyle: {
        padding: 5,
    },
    img: {
        flex: 1,
        width: "100%",
        height: 480,
        resizeMode: 'cover',
    },
    appButtonContainer: {
        height: 5,
        elevation: 8,
        backgroundColor: "#EBEDF0",
        borderRadius: 10,
        paddingVertical: 5,
        margin: 20,
        position: 'absolute',
        marginTop: "100%",
        width: "75%",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.26,
        shadowRadius: 3.68,
    },
});
