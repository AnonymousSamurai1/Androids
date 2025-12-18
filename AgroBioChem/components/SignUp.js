import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from '../assets/icon.png';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
 return (
     <View style={styles.credentials}>
       <View style={styles.logoContainer}>
         <Image source={Icon} style={styles.logo} resizeMode="contain" />
       </View>
 
       <Text style={styles.signTitle}>Register</Text>
 
       <View style={styles.signMain}>
         <View style={styles.sign}>
           <View style={styles.input}>
             <TextInput
               placeholder="Email"
               style={styles.user}
               keyboardType="email-address"
               autoCapitalize="none"
               autoCorrect={false}
             />
           </View>
           <View style={styles.inputButton}>
             <TouchableOpacity
               style={styles.submit}
             >
               <Text style={styles.submitText}>Sign In</Text>
             </TouchableOpacity>
           </View>
           <View style={styles.createButton}>
             <TouchableOpacity style={styles.submit}>
               <Text style={styles.createText}>Sign In</Text>
             </TouchableOpacity>
           </View>
         </View>
       </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   credentials: {
     backgroundColor: 'white',
     flex: 1,
   },
 
   logoContainer: {
     alignItems: 'left',
     paddingTop: 20,
     paddingLeft: 20,
   },
 
   logo: {
     width: 50,
     height: 50,
   },
 
   signTitle: {
     textAlign: 'center',
     color: '#66B913',
     fontSize: 50,
     fontWeight: 'bold',
     paddingTop: 40,
   },
 
   signMain: {
     paddingTop: 30,
   },
 
   sign: {
     backgroundColor: '#66B913',
     height: 655,
     borderTopLeftRadius: 50,
     borderTopRightRadius: 50,
     paddingTop: 200,
   },
   input: {
     paddingHorizontal: 30,
     paddingVertical: 20,
   },
   user: {
     backgroundColor: 'white',
     padding: 20,
     height: 60,
     borderRadius: 20,
   },
   inputButton: {
     paddingHorizontal: 80,
     paddingVertical: 20,
   },
   submit: {
     backgroundColor: 'white',
     width: 250,
     height: 55,
     borderRadius: 20,
   },
   submitText: {
     textAlign: 'center',
     paddingVertical: 13,
     color: '#66B913',
     fontSize: 20,
     fontWeight: 700,
   },
   createButton: {
     paddingHorizontal: 80,
     paddingVertical: 150,
   },
   createText: {
     textAlign: 'center',
     paddingVertical: 13,
     color: 'gray',
     fontSize: 20,
     fontWeight: 700,
   },
 });
export default SignUp;
