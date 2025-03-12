import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

import { styles } from '../../utils/styles';
import socket from '../../utils/socket';
import { theme } from '../../theme/fonts';

type props = {
    setVisible: (x: boolean) => void;
};

const ModalChat = ({ setVisible }: props) => {
    const [groupName, setGroupName] = useState(''); // Estado para armazenar o nome do grupo

    // Função para fechar o modal
    const closeModal = () => setVisible(false);

    const handleCreateRoom = () => {
        if (!groupName.trim()) {
            console.error("O nome do grupo não pode estar vazio!");
            return;
        }
    
        console.log("Emitindo evento createRoom com o nome:", groupName);
    
        socket.emit("createRoom", groupName, (ack) => {
            console.log("Confirmação do servidor recebida:", ack);
        });
    
        closeModal();
    };
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.modalsubheading}>Enter your Group name</Text>
            <TextInput
                style={styles.modalinput}
                placeholder="Group name"
                placeholderTextColor={theme.colors.white}
                value={groupName} // Exibir o estado atual no campo de texto
                onChangeText={(value) => {
                    console.log('Nome do grupo alterado para:', value);
                    setGroupName(value); // Atualizar o estado com o valor digitado
                }}
            />

            <View style={styles.modalbuttonContainer}>
                <Pressable style={styles.modalbutton} onPress={handleCreateRoom}>
                    <Text style={styles.modaltext}>CREATE</Text>
                </Pressable>
                <Pressable
                    style={[styles.modalbutton, { backgroundColor: '#E14D2A' }]}
                    onPress={closeModal}
                >
                    <Text style={styles.modaltext}>CANCEL</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default ModalChat;
