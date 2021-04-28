import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import watering from '../assets/watering.png';
import fonts from '../styles/fonts';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie{'\n'} suas plantas de{'\n'} forma fácil
        </Text>

        <Image source={watering} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 38,
    lineHeight: 38,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingHorizontal: 18,
    color: colors.heading,
    fontFamily: fonts.text,
    marginVertical: 20
  },
  button: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginVertical: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
    marginTop: 10
  }
});
