import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LogoutScreen({ navigation }) {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
    navigation.navigate('Login');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logging out...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});