import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([
    { text: 'Olá, como posso ajudar você?', sender: 'Atendente' },
  ]);

  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;  // verificação para menssagens vazias

    setMessages([...messages, { text: inputText, sender: 'Usuário' }]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <ScrollView contentContainerStyle={styles.chatContent}>
          {messages.map((message, index) => (
            <View key={index} style={message.sender === 'Atendente' ? styles.atendenteMessage : styles.userMessage}>
              <Text style={styles.senderName}>{message.sender}</Text>
              <Text>{message.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInputText}
          value={inputText}
          placeholder="Digite sua mensagem..."
        />
        <Button title="Enviar" onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#A9A9A9', 
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 16,
  },
  chatContent: {
    padding: 16, 
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'flex-end',
    maxWidth: '70%',
  },
  atendenteMessage: {
    backgroundColor: '#EDEDED',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    maxWidth: '70%',
  },
  senderName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#ffffff', 
    marginRight: 8,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});
