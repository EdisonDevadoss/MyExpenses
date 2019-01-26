import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screen/Home';
import SigninScreen from '../screen/Signin';
import SignupScreen from '../screen/Signup';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Signin: SigninScreen,
    Signup: SignupScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);
export default createAppContainer(AppNavigator);
