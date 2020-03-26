import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'


const LoginButton = props => {

    return(
        <TouchableOpacity onPress={props.onLogin}>
        <View style={styles.btn}>
            
            <Text style={styles.btnText} >LOGIN</Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    btn:{
        width:292,
        height:44,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#a92d2d',
        marginBottom:20
    },
    btnText:{
        color:'#fff',
        fontSize:15,
        fontFamily:'lato-regular'
    }
})

export default LoginButton