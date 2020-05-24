import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import * as Font from 'expo-font';
import { AppLoading }  from 'expo';
import { AuthScreens, MainScreens } from './navigation/TrainingNavigator';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/root-reducer';
import thunk from 'redux-thunk';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { autoLogin } from './store/actions/user';
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
 function App() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    console.log('user',user)
  const [fontLoaded,setFontLoaded ] = useState(false);
  const [loading,setLoading] = useState(true)
    useEffect(
      ()=>{
        const tryLogin = async () => {
          setLoading(true)
          const userData = await AsyncStorage.getItem('userData')
          if(!userData){
            console.log('no user data')
            setLoading(false)
            return;
          }
          const transformedData = JSON.parse(userData)
          console.log(transformedData)
          dispatch(autoLogin(transformedData.token))
          setLoading(false)
        }
        tryLogin()

      },[dispatch,setLoading]
    )
 
  if(loading || !fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={()=>{
      console.log('finished')
      setFontLoaded(true)}} />
  }
  return (
    <NavigationContainer>
    { !user ? <AuthScreens/> : <MainScreens/>}
   </NavigationContainer>
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

const AppWithStore = () => {
const store = createStore(rootReducer,applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )



}
export default AppWithStore;
