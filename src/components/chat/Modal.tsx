import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../../utils/styles";
// import { StyleSheet } from 'react-native';
import socket from "../../utils/socket";
import { theme } from "../../theme/fonts";
type props = {
    setVisible: (x: boolean) => void;
}

const ModalChat = ({ setVisible }: props) => {

    const closeModal = () => setVisible(false);
    const [groupName, setGroupName] = useState("");

    const handleCreateRoom = () => {
        socket.emit("createRoom", groupName);
        closeModal();
    };

    return (
        <View style={styles.modalContainer}>
            <Text style={styles.modalsubheading}>Enter your Group name</Text>
            <TextInput
                style={styles.modalinput}
                placeholder='Group name'
                placeholderTextColor={theme.colors.white}
                onChangeText={(value) => setGroupName(value)}
            />

            <View style={styles.modalbuttonContainer}>
                <Pressable style={styles.modalbutton} onPress={handleCreateRoom}>
                    <Text style={styles.modaltext}>CREATE</Text>
                </Pressable>
                <Pressable
                    style={[styles.modalbutton, { backgroundColor: "#E14D2A" }]}
                    onPress={closeModal}
                >
                    <Text style={styles.modaltext}>CANCEL</Text>
                </Pressable>
            </View>
        </View>
    );
};


// export const styles = StyleSheet.create({
//   container: {}
// });

export default ModalChat;