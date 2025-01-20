import { Button } from "react-native-paper"
import { Text, View } from "react-native"

export default function ProfileScreen ({ navigation }) {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  )
};