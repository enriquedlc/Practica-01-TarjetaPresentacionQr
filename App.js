import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>photo and name</Text>
      </View>
      <View style={styles.description}>
        <Text>description</Text>
      </View>
      <View style={styles.qrCode}>
        <Text>qrCode</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    borderColor: 'pink',
    borderWidth: 2,
    width: '100%'
  },

  description: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'yellow',
    borderWidth: 2,
    width: '100%'
  },

  qrCode: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    width: '100%'
  },

  headerText: {
    marginTop: 60
  }
});
