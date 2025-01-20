import { View, StyleSheet } from 'react-native';
import RegisterForm from '../components/RegisterForm';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <RegisterForm />
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