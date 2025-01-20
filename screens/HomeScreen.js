import { Button } from 'react-native-paper';
import { Text, View } from "react-native"

export default function HomeScreen ({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Profile')}>Profile</Button>
    </View>
  )
};