import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        marginHorizontal: 40,
        backgroundColor: "#000",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    },
    textInput: {
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextFieldHead: {
        fontSize: 20,
        marginBottom: 0,
        marginLeft: 30,
        fontWeight: "900"
    },
    customFonts: {
        fontFamily: 'ProtestGuerrilla-Regular',
        fontSize: 50
    },
    viewTextInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: "#EAEAEA",
        marginHorizontal: 15,
        borderRadius: 15,
        marginTop: 10
    },
    viewTextInputInvalid: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: "#EAEAEA",
        marginHorizontal: 15,
        borderRadius: 15,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "red"
    },
    iconStyle: {
        width: 25,
        height: 25,
        marginRight: 15
    }
});

export default styles;