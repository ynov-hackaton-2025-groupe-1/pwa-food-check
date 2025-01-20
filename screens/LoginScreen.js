import { View, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});