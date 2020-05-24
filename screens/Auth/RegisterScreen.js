import React from 'react'
import {View,Text,StyleSheet, ImageBackground, Button, Image, KeyboardAvoidingView, KeyboardAvoidingViewComponent}  from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import LoginButton from '../../components/LoginButton'
import FacebookButton from '../../components/FacebookButton'
import { Formik } from 'formik'
import { Input} from 'galio-framework'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { login, register } from '../../store/actions/user'
const RegisterScreen = props => {
    const dispatch = useDispatch()
    const loginValidation = yup.object({
        username: yup.string().required(),
        password: yup.string().required() ,
        email:yup.string().required().email()
    })
    return (
<KeyboardAvoidingView behavior="height"   style={{flex:1}}>
        <ImageBackground source={require('../../assets/main.png')} style={styles.screen} resizeMode='cover'>
           
                <View style={styles.header}>
                    <Image    style={styles.image} source={require('../../assets/man.png')} />
                    <Text style={styles.moto}>Start, and don't stop</Text>
                    <Text style={styles.main}>My training</Text>
                </View>
                <Formik
                isInitialValid={false}
                initialValues={
                    {
                        username:'',
                        password:'',
                        email:''
                    }
                }
                onSubmit={
                  async   (values)=>{
                   await    dispatch(register(values.email,values.username,values.password))
                   .then()
                   .catch(
                       error => {
                           console.log('errpr',error.response)
                       }
                   )
                    }
                }
                validationSchema={loginValidation}
                
                >

                    {
                        ({handleChange, handleSubmit, handleBlur, values, isValid, errors, touched}) => (
                            <View>
                    <View style={styles.inputContainer}>
                    
                    <View style={styles.castInpt}>
                    <Input  
                  style={styles.input}
                   placeholder="Email " 
                   onChangeText={handleChange('email')}
                   onBlur={handleBlur('email')}
                   />
                   
                   {errors.email && touched.email? <Text style={styles.errorText} >{errors.email}</Text> : null }
                 <Input  
                  style={styles.input} 
                  placeholder="Username " 
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  />
                  {errors.username && touched.username? <Text style={styles.errorText} >{errors.username}</Text> : null }
                 </View>
                 
                 <View style={styles.castInpt}>

                 <Input  
                  style={styles.input}
                   placeholder="Password " 
                   password
                   viewPass 
                   onChangeText={handleChange('password')}
                   onBlur={handleBlur('password')}
                   />
                   
                   {errors.password && touched.password? <Text style={styles.errorText} >{errors.password}</Text> : null }
                  
                 </View>
                 
                 </View>
                 <View style={styles.btnContainer}> 
                 <LoginButton disabled={!isValid} onLogin={handleSubmit} />
                 <FacebookButton onFbLogin={()=>{}}/>
                 </View>
                 </View>

                        )





                    }



                </Formik>
                

               
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
height:180,
alignItems:'center',
marginBottom:20,
marginBottom:40
},
input:{

backgroundColor: 'transparent',
color:'white',
borderBottomWidth:1,
borderTopWidth:0,
borderLeftWidth:0,
borderRightWidth:0,
borderRadius:0,


},
errorText: {
    fontSize: 12,
    color: '#F5365C',
    lineHeight: 12
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
    height:200,
    alignItems:'center',
    marginTop:20,
    marginBottom:50
    

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

    borderBottomColor:'#fff',
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

export default RegisterScreen;



