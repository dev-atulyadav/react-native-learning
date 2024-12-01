import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Healthy-Channel</Text>
      <Link href="/home" style={styles.button}>
        Get Started
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24acf0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize:30,
  },
  button: {
    marginTop: 20,
    padding: 10,
    border: '1px solid #fff',
    borderRadius: 10,
    fontSize: 20,
    color: '#fff',
  },
});
