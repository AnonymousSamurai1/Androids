import React from 'react'
import {ScrollView, View, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native'

export default function IntroPage({navigation}) {

  const pressHandler = ()=>{
    navigation.navigate('Home')
  }

  return (
    <View>
      <Image source={require('../assets/MobileIntro.png')} style = {styles.intro}/>
      <View style = {styles.description}>
        <Text style = {styles.header}>
          Jesste {"\n"} Engineering
        </Text>
        <Text style = {styles.paragraph}>
        In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non. 
        Suspendisse sodales nulla sit amet sem condimentum, ac euismod nibh elementum. 
        Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in 
        posuere
        </Text>
        <TouchableOpacity style = {styles.button} onPress={pressHandler}>
          <Text style={styles.buttonText} onPress={pressHandler}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  intro: {
    width: '100%',
  },
  description: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#rgba(7, 7, 7, 0.2)',
    height: '100%',
  },
  header: {
    color: 'white',
    fontSize: 59,
    paddingTop: 180,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  paragraph: {
    padding: 30,
    color: 'white',
    lineHeight: 25,
  },
  button: {
    width: 180,
    height: 50,
    backgroundColor: '#rgba(217, 217, 217, 0.68);',
    marginLeft: 100,
    paddingTop: 10,
    paddingLeft: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})