import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { AuthProvider } from './context/AuthContext';
import MyComponent from './components/BottomNav';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
        <MyComponent />
      </NavigationContainer>
    </AuthProvider>
  );
}