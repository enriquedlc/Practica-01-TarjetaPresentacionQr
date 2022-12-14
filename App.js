import { StyleSheet, Text, View, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

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
        <Text style={styles.descriptionText}>
          Hola! mi nombre es Enrique y soy estudiante de 2º de DAM.
          Últimamente disfruto mucho de las cosas que hacemos en clase.
          Me gusta entrenar y pasar tiempo con personas cercanas.
          Mi objetivo este año es aprender lo máximo posible para salir preparado al mundo laboral.
        </Text>
      </View>
      <View style={styles.qrCode}>
        <QRCode style={styles.qrCodePosition} value="https://github.com/enriquedlc">
        </QRCode>
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
    width: '100%',
    backgroundColor: 'gray'
  },

  description: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  qrCode: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  descriptionText: {
    marginHorizontal: 10
  }
});
