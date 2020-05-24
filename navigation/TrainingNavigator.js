
import LoginScreen from '../screens/Auth/LoginScreen';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../screens/App/MainScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
export const MainScreens = () => (

    <MainStack.Navigator>
        <MainStack.Screen component={MainScreen} name="Main" />
    </MainStack.Navigator>




)
export const AuthScreens = () => (
<AuthStack.Navigator
screenOptions={{
    headerShown: false
}}
>
    <AuthStack.Screen component={LoginScreen} name="Login" />
    <AuthStack.Screen  component={RegisterScreen} name="Register"/>
</AuthStack.Navigator>



)



