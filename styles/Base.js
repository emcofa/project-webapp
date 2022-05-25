import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    //Base
    container: {
        flex: 1,
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
    //Typography
    bold: {
        fontWeight: "bold",
    },
    bigger: {
        fontSize: 16,
        marginTop: 16,
    },
    left: {
        padding: 1,
        margin: 2,
        textAlign: 'left',
        fontFamily: 'Hiragino Sans',
    },
    right: {
        textAlign: 'center',
        fontFamily: 'Hiragino Sans',
        marginBottom: 20,
        fontSize: 14,
    },
    center: {
        padding: 1,
        marginTop: 20,
        marginBottom: 5,
        textAlign: 'center',
        fontFamily: 'Hiragino Sans',
        fontSize: 18,
    },
    green: {
        color: 'green'
    },
    red: {
        color: 'red'
    },
    yellow: {
        backgroundColor: "#FFD700",
    },
    typoTableBody: {
        fontFamily: 'Hiragino Sans',
        color: "black",
        fontSize: 14,
    },
    buttonText: {
        alignItems: 'center',
        fontSize: 20,
        textAlign: 'center',
    },

    //headlines and headers
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
        fontSize: 18,
        letterSpacing: 1,
        fontFamily: "Hiragino Sans",
        fontWeight: "bold",
        color: "#252525",
    },
    typoTableHeader: {
        fontFamily: 'Hiragino Sans',
        color: "#222",
        fontSize: 14,
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

    //Image
    img: {
        flex: 1,
        width: "100%",
        height: 480,
        resizeMode: 'cover',
    },

    // div containers
    appButtonContainer: {
        height: 1,
        elevation: 8,
        backgroundColor: "#FFF",
        borderRadius: 40,
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
});
