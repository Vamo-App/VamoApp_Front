import React , {useState, useEffect} from 'react';
import { Text, View} from 'react-native';
import MainApp from './Screens/MainApp';
import {useFonts} from 'expo-font';



export default function App() {

  const [fontsLoaded] = useFonts({
    ComfortaaBold : require('./assets/fonts/Comfortaa-Bold.ttf'),
    ComfortaaLight : require('./assets/fonts/Comfortaa-Light.ttf'),
    QuickSandBold : require('./assets/fonts/Quicksand-Bold.ttf'),

    
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <MainApp/>
    
  );
}