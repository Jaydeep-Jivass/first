// src/components/WiFiForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const WiFiForm = ({ onSubmit }) => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  const handleSubmit = () => {
    onSubmit({ ssid, password, ipAddress });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>SSID:</Text>
      <TextInput
        style={styles.input}
        value={ssid}
        onChangeText={setSsid}
        placeholder="Enter SSID"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        secureTextEntry
      />
      <Text style={styles.label}>IP Address:</Text>
      <TextInput
        style={styles.input}
        value={ipAddress}
        onChangeText={setIpAddress}
        placeholder="Enter IP Address"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default WiFiForm;
