import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import UseLogin from '../hooks/UseLogin';
import { commonStyles } from '../styles/CommonStyles';

export default function LoginForm() {
  const { email, setEmail, password, setPassword, handleLogin } = UseLogin();
  const navigation = useNavigation();

  return (
    <View style={commonStyles.container}>
      <Title style={commonStyles.title}>Login</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={commonStyles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={commonStyles.input}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin} style={commonStyles.button}>
        Login
      </Button>
      <Button mode="text" onPress={() => navigation.navigate('Register')} style={commonStyles.link}>
        Don't have an account? Register
      </Button>
    </View>
  );
}