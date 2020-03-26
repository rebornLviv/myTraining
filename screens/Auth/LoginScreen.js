import React from 'react'
import {View,Text,StyleSheet, ImageBackground, Button, Image, KeyboardAvoidingView, KeyboardAvoidingViewComponent}  from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import LoginButton from '../../components/LoginButton'
import FacebookButton from '../../components/FacebookButton'

const LoginScreen = props => {

    return (
<KeyboardAvoidingView behavior="height"   style={{flex:1}}>
        <ImageBackground source={require('../../assets/main.png')} style={styles.screen} resizeMode='cover'>
           
                <View style={styles.header}>
                    <Image    style={styles.image} source={require('../../assets/man.png')} />
                    <Text style={styles.moto}>Start, and don't stop</Text>
                    <Text style={styles.main}>My training</Text>
                </View>
                <View style={styles.inputContainer}>
                    
                   <View style={styles.castInpt}>
                       <Image style={styles.imgE} source={require('../../assets/Email-mini.png')} />
                <TextInput   style={styles.input} placeholder="Email Address " ></TextInput>
                </View>
                
                <View style={styles.castInpt}>
                <Image style={styles.imgP} source={require('../../assets/Password-mini.png')} />
                <TextInput   style={styles.input} placeholder="Password "  ></TextInput>
                </View>
                
                </View>
                <View style={styles.btnContainer}> 
                <LoginButton onLogin={()=>{}} />
                <FacebookButton onFbLogin={()=>{}}/>
                </View>

               
        </ImageBackground>
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

},
inputContainer:{
width: 294,
height:74,
alignItems:'center',
marginBottom:20
},
input:{


color:'white',



},
btnContainer:{
width:292,
height:110,
alignItems:'center',

marginBottom:24,


},
btn:{
    width:292,
    height:88

},header:{
    width:291,
    height:185,
    alignItems:'center',
 
    marginBottom:180
    

},
image:{
    width:76,
    height:98,
    marginBottom:7
},
moto:{
   fontSize:18,
   color: "#ffffff",
   fontFamily:'lato-light',
   opacity:0.7,

},
main:{
    fontSize:50,
    color: "#ffffff",
    fontFamily:'lato-black'
},
castInpt:{
    borderBottomWidth:1,
    width:291,
    borderBottomColor:'#fff',
    marginBottom:10,
    flexDirection:'row',
    alignItems:'center'
},
imgE:{
width:16,
height:11,
marginRight:5

},
imgP:{
    width:12,
    height:17,
    marginRight:9
    
    }

})

export default LoginScreen;



