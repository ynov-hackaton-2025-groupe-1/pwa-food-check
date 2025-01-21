import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import HistoryScreen from './screens/HistoryScreen';
import { AuthContext } from './context/AuthContext';
import NavBar from './components/NavBar';

enableScreens();

const Stack = createStackNavigator();

function AppNavigator() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Login"}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={NavBar} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="History" component={HistoryScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;