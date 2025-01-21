import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import ProfileForm from '../components/ProfileForm';

export default function ProfileScreen({ navigation }) {

  return (
    <View style={styles.container}>
    
      <ProfileForm />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
  },
});