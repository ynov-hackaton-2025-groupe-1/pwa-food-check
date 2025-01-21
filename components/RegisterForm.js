import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import UseRegister from '../hooks/UseRegister';
import { commonStyles } from '../styles/CommonStyles';

export default function RegisterForm() {
  const { email, setEmail, fullname, setFullname, password, setPassword, confirmPassword, setConfirmPassword, isButtonDisabled, handleRegister } = UseRegister();
  const navigation = useNavigation();

  return (
    <View style={commonStyles.container}>
      <Title style={commonStyles.title}>Register</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={commonStyles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Fullname"
        value={fullname}
        onChangeText={text => setFullname(text)}
        style={commonStyles.input}
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={commonStyles.input}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        style={commonStyles.input}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleRegister} style={commonStyles.button} disabled={isButtonDisabled}>
        Register
      </Button>
      <Button mode="text" onPress={() => navigation.navigate('Login')} style={commonStyles.link}>
        Already have an account? Login
      </Button>
    </View>
  );
}