import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import colors from '../styles/colors';

import watering from '../assets/watering.png';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'} suas plantas de{'\n'} forma fácil
      </Text>

      <Image source={watering} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text>seta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingHorizontal: 18,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.heading,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
    paddingHorizontal: 10
  },
  image: {
    width: 292.13,
    height: 284.3
  }
});
