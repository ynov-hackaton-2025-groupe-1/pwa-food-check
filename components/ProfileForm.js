import { View } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import UseProfile from '../hooks/UseProfile';
import { commonStyles } from '../styles/CommonStyles';

export default function ProfileForm() {
  const { user, setUser, editProfile } = UseProfile();

  const handleChange = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value,
    }));
  };

  return (
    <View style={commonStyles.container}>
      <Title style={commonStyles.title}>Profile</Title>
      {user ? (
        <>
          <TextInput
            label="ID"
            value={user.id.toString()}
            style={commonStyles.input}
            editable={false}
          />
          <TextInput
            label="Email"
            value={user.email}
            onChangeText={text => handleChange('email', text)}
            style={commonStyles.input}
          />
          <TextInput
            label="Fullname"
            value={user.fullname}
            onChangeText={text => handleChange('fullname', text)}
            style={commonStyles.input}
          />
        </>
      ) : (
        <TextInput
          label="Loading..."
          value="Loading..."
          style={commonStyles.input}
          editable={false}
        />
      )}
      <Button mode="contained" onPress={editProfile} style={commonStyles.button}>
        Edit Profile
      </Button>
    </View>
  );
}