import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import fonts from '../styles/fonts';
import colors from '../styles/colors';
import Button from '../components/Button';

export default function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>😄</Text>
              <Text style={styles.title}>Como podemos{'\n'} chamar você?</Text>
            </View>
            <TextInput
              style={[styles.input, isFocused && { borderColor: colors.green }]}
              placeholder="Digite o seu nome"
              onBlur={() => setIsFocused(false)}
              onFocus={() => setIsFocused(true)}
            />
            <View style={styles.footer}>
              <Button />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54
  },
  header: {
    alignItems: 'center'
  },
  emoji: {
    fontSize: 44
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    fontFamily: fonts.heading,
    color: colors.heading
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20
  }
});
