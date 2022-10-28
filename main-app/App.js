import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

/*Esto es un ejemplo de diseño, el diseño final se divide en diferentes componentes,
incluido el inicio de sesión aqui hecho*/

export default function App() {
  return (
    <View style={styles.container}>

      <Image style={styles.topImage} source={require('./assets/Logo_Vamo_SinFondo.png')} />
      <Text style={styles.subTitle}>¿Y qué esperas? </Text>
      <Image style={styles.mainImage} source={require('./assets/Logo1_Vamo_SinFondo.png')} />
      <TextInput style={styles.input} placeholder="Correo electronico" />
      <TextInput style={styles.input} placeholder="Contraseña" />

      <Text style={styles.logIn}>Inciar Sesión</Text>
      <Text style={styles.question}>¿Olvidaste tu contraseña? </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 15,
    borderRadius: 30,
    width: '80%',
    marginTop: '5%',
    paddingHorizontal: '10%',
    paddingVertical: '3%',
    backgroundColor: '#fff'
    
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#3C4048',
  },
  topImage:{
    height: '30%', 
    width: '30%',
    resizeMode: 'contain',
  },
  mainImage:{
    height: '15%', 
    width: '100%',
    resizeMode: 'contain',
  },
  logIn: {

    paddingVertical: '3%',
    paddingHorizontal: '5%',
    borderRadius: 30,
    marginTop: '10%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D5EEBB',
    backgroundColor: '#425F57',


  },

  subTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5F7A61',
  },
  question:{

    fontSize: 13,
    marginTop: '3%',
    color: '#B2B2B2',
  }
});
