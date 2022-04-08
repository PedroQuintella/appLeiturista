import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 5,
    },
    titleText:{
        fontSize: 24,
        color: "#802f30",
        fontWeight: "bold",
    },
    result: {
        alignItems: "center",
        backgroundColor: "#3BB6F6",
    },
    resultText: {
        fontSize: 24,
        color: "#000",
        fontWeight: "bold",
    },
    formContext: {
        width: '70%',
        height: 'auto',
        bottom: 0,
        backgroundColor: '#9fa19e',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 50,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 20,
        padding: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold", 
        padding: 5,
        color: "#802f30",
    },
    textInput: {
        fontSize: 18,
        backgroundColor: "#feffff",
        color: "#000",
        borderRadius: 6,
        margin: 5,
        padding: 5,
    },
    button: {
        margin: 10,
        backgroundColor: "#802f30",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 24,
        color: "#feffff",
    },
    icon: {
        width: "80%",
        height: "80%"
      },
      container: {
        flex: 1,
        justifyContent: 'center',
      },
      camera: {
        width: "100%",
        height: "100%",
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row"
      },
      buttonFlip: {
        position: "absolute",
        bottom: 50,
        left: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#802f30",
        margin: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
      },
      buttonTake: {
        position: "absolute",
        bottom: 50,
        right: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#802f30",
        margin: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
      },
      contentPhoto: {
        flex: 1,
        margin: 10,
      },
      contentPhotoButton: {
        flex: 1,
        flexDirection: "row"
      },
      img: {
        width: "100%",
        height: "80%"
      },
      buttonClose: {
        position: "absolute",
        bottom: 50,
        right: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#802f30",
        margin: 20,
        width: 90,
        height: 50,
        borderRadius: 20,
      },
      buttonConfirm: {
        position: "absolute",
        bottom: 50,
        left: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#802f30",
        margin: 20,
        width: 90,
        height: 50,
        borderRadius: 20,
      }
});

export default styles;