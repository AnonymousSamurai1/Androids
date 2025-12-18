import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoaderPage from './components/Loader';
import IntroPage from './components/IntroPage';
import SignUp from './components/SignUp'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loader" screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="Loader" 
          component={LoaderPage} 
          options={{ title: 'Loader' }}
        />
        <Stack.Screen 
          name="Intro" 
          component={IntroPage} 
          options={{ title: 'Intro Page' }}
        />
        <Stack.Screen 
          name="Sign" 
          component={SignUp} 
          options={{ title: 'Sign up' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
