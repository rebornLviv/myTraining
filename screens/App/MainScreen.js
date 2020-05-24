import React from 'react';
import { View,Text,StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/user';


const MainScreen = () => {
    const dispatch = useDispatch()
    return (
        <View style={styles.screen}>
            <Text>Main screeen</Text>
            <Button title="logout" onPress={
                () => {
                    dispatch(logout())
                }
            } />
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }    
})


export default MainScreen;