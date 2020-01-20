import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');

    async function handleLogin() {
        if (!username.length) return;
        await AsyncStorage.setItem('@GoTwitter:username', username);

        navigation.navigate('Timeline');
    }
    
    useEffect(() => {
        AsyncStorage.getItem('@GoTwitter:username').then(user =>{
            if(user) {
                navigation.navigate('Timeline');
            }
        })
    }, [])

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View style={styles.content}>
                <View>
                    <Icon name="twitter" size={64} color="#4BB0EE"/>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Nome de usuário"
                    value={username}
                    onChangeText={text => setUsername(text)}
                    returnKeyType="send"
                    onSubmitEditing={handleLogin}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
