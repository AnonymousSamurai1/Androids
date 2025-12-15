import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity,} from 'react-native'

const categories = [
  {
    source: require('../assets/Construction.png'),
    title: 'Construction',
    link: 'construction',
  },
  {
    source: require('../assets/Architecture.png'),
    title: 'Architecture',
    link: 'construction',
  },
  {
    source: require('../assets/Survey.png'),
    title: 'Survey',
    link: 'construction',
  },
  {
    source: require('../assets/Civil.png'),
    title: 'Civil Eng.',
    link: 'construction',
  },
  {
    source: require('../assets/LandSale.png'),
    title: 'Land Sale',
    link: 'construction',
  },
]


export default function Home({navigation}) {
  
const pressHandler = ()=>{
    navigation.navigate('construction')
  }
  return (
    <View>
        <Image source={require('../assets/MobileIntro.png')} style = {styles.intro}/>
        <View style = {styles.description}>
        <Image source={require('../assets/loader.png')} style ={styles.logo}/>
            <ScrollView style = {styles.services}>
                <View style={styles.mainCategory}>
                {
                  categories.map((category,index)=>(
                    <TouchableOpacity key={index} style={styles.category} onPress={pressHandler}>
                        <Image source={category.source} style = {styles.images}/>
                        <Text>{category.title}</Text>
                    </TouchableOpacity>
                  ))
                }
                </View>
                
            </ScrollView>
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
      backgroundColor: '#rgba(7, 7, 7, 0.1)',
      height: '100%',
    },
    logo: {
        width: 70,
        height: 70,
        borderRadius: 50,
        margin: 10,
    },
    services: {
      backgroundColor: 'rgba(180, 179, 179, 0.88)',
      marginTop: 10,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
    },
    mainCategory: {
      flex: 1,
      
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      padding: 30,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,

    },
    category: {
      backgroundColor: 'white',
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 24,
      marginTop: 20,
      borderRadius: 20,
      width: 150,
    },
    images: {
      width: 100,
      height: 80,
      
    }
  })