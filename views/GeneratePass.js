import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, Button, StyleSheet, ScrollView } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export default function GeneratePassword() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validChars = '';
    if (includeLowercase) validChars += lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecialChars) validChars += specialChars;

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars.charAt(randomIndex);
    }

    setGeneratedPassword(newPassword);
  };

  const copyPassword = () => {
    Clipboard.setString(generatedPassword);
    alert('Password copied to clipboard');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Generate Password</Text>
      <View style={styles.inputContainer}>
        <Text>Password Length:</Text>
        <TextInput
          style={styles.input}
          value={passwordLength.toString()}
          onChangeText={(text) => setPasswordLength(parseInt(text) || 0)}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.requirementsText}>Requirements:</Text>
      <View style={styles.requirementsColumn}>
        <View style={styles.requirementsRow}>
          <CheckBox
            value={includeLowercase}
            onValueChange={() => setIncludeLowercase(!includeLowercase)}
          />
          <Text style={styles.requirementLabel}>Include lowercase letters</Text>
        </View>
        <View style={styles.requirementsRow}>
          <CheckBox
            value={includeUppercase}
            onValueChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <Text style={styles.requirementLabel}>Include uppercase letters</Text>
        </View>
        <View style={styles.requirementsRow}>
          <CheckBox
            value={includeNumbers}
            onValueChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <Text style={styles.requirementLabel}>Include numbers</Text>
        </View>
        <View style={styles.requirementsRow}>
          <CheckBox
            value={includeSpecialChars}
            onValueChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          <Text style={styles.requirementLabel}>Include special symbols</Text>
        </View>
      </View>
      <Button title="Generate Password" onPress={generatePassword} />
      <Button title="Copy Password" onPress={copyPassword} />
      <Text style={styles.generatedPasswordText}>Generated Password: {generatedPassword}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
  },
  requirementsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  requirementsColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  requirementsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  requirementLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  generatedPasswordText: {
    marginTop: 20,
    fontSize: 18,
  },
});
