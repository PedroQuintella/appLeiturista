import { View, Text, TextInput, TouchableOpacity, Keyboard, Alert, Modal } from "react-native";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import CameraAccess from "../Camera";
import styles from "../../Style";

export default function Form() {

    const [matricula, setMatricula] = useState(null)
    const [codigo, setCodigo] = useState(null)
    const [situacao, setSituacao] = useState("selecione")
    const [isVisible, setIsVisible] = useState(false)

    function validar() {
        if (matricula != null && matricula != "" && codigo != null && codigo != "" && situacao != "selecione") {
            setIsVisible(true)
        }
        else {
            Alert.alert('Todos os campos são obrigatórios.')
        }
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.text}>Matrícula:</Text>
                <TextInput style={styles.textInput} keyboardType="numeric" onChangeText={setMatricula} value={matricula}/>
                <Text style={styles.text}>Código:</Text>
                <TextInput style={styles.textInput} keyboardType="numeric" onChangeText={setCodigo} value={codigo}/>
                <Text style={styles.text}>Situação:</Text>
                <Picker style={styles.picker} situacao={situacao} onValueChange={(itemValue, itemIndex) => setSituacao(itemValue)}>
                    <Picker.Item label="Selecione" value={"selecione"}/>
                    <Picker.Item label="Leitura Implausível" value={"Leitura Implausível"}/>
                    <Picker.Item label="Releitura" value={"Releitura"}/>
                    <Picker.Item label="Situação de Risco" value={"Situação de Risco"}/>
                    <Picker.Item label="Suspeita de Fraude" value={"Suspeita de Fraude"}/>
                    <Picker.Item label="Impedimento de leitura" value={"Impedimento de leitura"}/>
                </Picker>
                <TouchableOpacity style={styles.button} onPress={() => validar()}>
                    <Text style={styles.buttonText}>Fotografar</Text>
                </TouchableOpacity>
            </View>
            <Modal transparent={true} visible={isVisible}>
                <CameraAccess
                    matricula={matricula}
                    codigo={codigo}
                    situacao={situacao}
                />
            </Modal>
        </View>
    )
}