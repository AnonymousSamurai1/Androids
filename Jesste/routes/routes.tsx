import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IntroPage from '../screens/Intro'
import Home from '../screens/Home'
import Construction from "../screens/Construction";


const screens = {
    IntroPage: {
        screen: IntroPage,
        navigationOptions: ({navigation}) =>({
            headerShown: null,
          }),
    },
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) =>({
            headerShown: null,
          }),
    },
    construction: {
        screen: Construction,
        navigationOptions: ({navigation}) =>({
            headerShown: null,
          }),
    }
}

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack)