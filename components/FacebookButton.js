import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity, Image} from 'react-native'


const FacebookButton = props => {

    return(
        <TouchableOpacity onPress={props.onFbLogin} activeOpacity={0.9}>
        <View style={styles.btn}>
        <View style={styles.fIcon}><Image  source={require('../assets/fb-mini.png')} style={styles.img} /></View>
        <View style={styles.txtCont}>
            <Text style={styles.btnText} >Connect With Facebook</Text>
            </View> 
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    btn:{
        width:292,
        height:44,
        alignItems:'center',
        backgroundColor:'#45629e',
        flexDirection:'row',
        
        
    },
    btnText:{
        color:'#fff',
        fontSize:15,
        
    },
    fIcon:{
        width:45,
        height:44,
        backgroundColor:'#3b5590',
        justifyContent:'center',
        alignItems:'center'
    },
    txtCont:{
        height:44,
        width:247,
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'lato-regular'
    },
    img:{
width:10,
height:17
    }
})

export default FacebookButton