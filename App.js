import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/TrainingNavigator';
import * as Font from 'expo-font';
import { AppLoading }  from 'expo';
const fetchFonts = () => {
  return  Font.loadAsync( {
     'lato-black': require('./assets/fonts/Lato/Lato-Bla.ttf'),
     'lato-black-italic': require('./assets/fonts/Lato/Lato-BlaIta.ttf'),
     'lato-bold': require('./assets/fonts/Lato/Lato-Bol.ttf'),
     'lato-bold-italic': require('./assets/fonts/Lato/Lato-BolIta.ttf'),
     'lato-light': require('./assets/fonts/Lato/Lato-Lig.ttf'),
     'lato-light-italic': require('./assets/fonts/Lato/Lato-LigIta.ttf'),
     'lato-regular': require('./assets/fonts/Lato/Lato-Reg.ttf'),
     'lato-regular-italic': require('./assets/fonts/Lato/Lato-RegIta.ttf'),
     
   })
 }
export default function App() {
  const [fontLoaded,setFontLoaded ] = useState(false);

  if(!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={()=>{setFontLoaded(true)}} />
  }
  return (
   <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
