import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Farmer from '../assets/farmer.png';
import Tractor from '../assets/tractor.png';
import Scientist from '../assets/scientist.png';

function Loader() {
  const navigation = useNavigation();

  const slideImage = [
    {
      image: Farmer,
      header: 'Empowering Farmers',
      description:
        'Enhancing yields through innovation and agro-biochemical expertise',
    },
    {
      image: Tractor,
      header: 'Driving Sustainable Change',
      description:
        'Solutions designed for a healthier, greener agricultural future',
    },
    {
      image: Scientist,
      header: 'Science in Every Seed',
      description:
        'Powering innovation where biotechnology meets real-world farming',
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper autoplay loop={true} activeDotColor="#66B302">
        {slideImage.map((each, index) => (
          <View style={styles.slide} key={index}>
            <Image source={each.image} style={styles.image} />
            <Text style={styles.header}>{each.header}</Text>
            <Text style={styles.text}>{each.description}</Text>
          </View>
        ))}
      </Swiper>

      <View style={styles.mainButton}>
        <TouchableOpacity
          style={styles.buttonSubA}
          onPress={() => navigation.navigate('Intro')}
        >
          <Text style={styles.buttonTextA}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
    color: 'grey',
  },
  mainButton: {
    paddingBottom: 50,
    alignItems: 'center',
  },
  buttonSubA: {
    backgroundColor: '#66B302',
    borderRadius: 5,
    width: 300,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 20,
  },
  buttonTextA: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Loader;
