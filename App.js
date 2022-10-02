import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
        style={styles.headerImage} 
        source={require('./assets/perfPhoto.jpeg')}>
        </Image>
        <Text style={styles.headerText}>José Enrique De La Concepción De Masi</Text>
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
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: 'pink',
    borderWidth: 2,
    width: '100%',
    backgroundColor: 'gray'
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
    marginTop: 30,
    marginRight: 110,
    marginLeft: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },

  headerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30,
    marginLeft: 110
  }
});
