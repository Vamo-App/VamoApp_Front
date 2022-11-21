import React , {useState, useEffect} from 'react';
import { Text, View} from 'react-native';
import MainApp from './Screens/MainApp';
import * as Font from 'expo-font';



export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
      if (!fontsLoaded){
        loadFonts();
      }
    }
  )

  const loadFonts = async () => {
    await Font.loadAsync({
      'Comfortaa-Bold': require('main-app/assets/fonts/Comfortaa-Bold.ttf'),
      'Comfortaa-Light': require('main-app/assets/fonts/Comfortaa-Light.ttf'), 
      'Quicksand-Bold': require('main-app/assets/fonts/Quicksand-Bold.ttf'),
      }) 

      setFontsLoaded(true);
  }

  if(!fontsLoaded){
    return(<View/>);
  }

  return (
    <View style = {{flex: 1}}>
        <MainApp/>
    </View>
  );
}