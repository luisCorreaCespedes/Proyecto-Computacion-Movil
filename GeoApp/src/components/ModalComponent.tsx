import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {SelectList} from 'react-native-dropdown-select-list';
import { writeMarkerData } from '../firebase/database'

interface Props {
    visible: boolean,
}

const ModalApp = ({ visible }: Props) => {
    const [modalVisible, setModalVisible] = useState(visible);
    const [selected, setSelected] = useState("Incendio");
    console.log('SELECTED', selected)

    const data = [
        {key: '1', value:'Incendio'},
        {key: '2', value:'Basural'},
    ]

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <SelectList boxStyles={{width: '80%'}} setSelected={(val:any) => setSelected(val)}
                        data={data}
                        save="value"
                        />
                        <Pressable
                            style={[styles.button, styles.submitButton]}
                            onPress={() => {writeMarkerData(selected),
                                Alert.alert('Localización', 'Coordenadas guardadas', [{ text: 'Aceptar' }])
                            }}
                        >
                            <Text style={styles.textStyle}>Guardar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={styles.roundedButton}
                onPress={() => setModalVisible(true)}
            >
                <Text
                    style={styles.textButton}
                >
                    <Ionicons name="add-outline" size={40} />
                </Text>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        width: '70%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    roundedButton: {
        width: '15%',
        height: 50,
        backgroundColor: "#3BDB5F",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: 150,
    },
    textButton: {
        color: 'white'
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 4,
    },
    buttonOpen: {
        backgroundColor: "#A0DDAD",
    },
    buttonClose: {
        backgroundColor: "#FFF791",
        marginTop: 20,
        width: '80%',
    },
    submitButton: {
        backgroundColor: "#3BDB5F",
        marginTop: 20,
        width: '80%',
    },
    textStyle: {
        color: "#fffff",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    }
});

export default ModalApp;