import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
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
  input: {
    marginBottom: 16,
    width: width > 600 ? '50%' : '100%', // Adjust width based on screen size
    alignSelf: 'center',
  },
  button: {
    marginTop: 16,
    width: width > 600 ? '50%' : '100%', // Adjust width based on screen size
    alignSelf: 'center',
  },
  link: {
    marginTop: 16,
    alignSelf: 'center',
  },
});