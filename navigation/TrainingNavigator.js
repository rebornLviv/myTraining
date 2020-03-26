import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/Auth/LoginScreen';


const AuthNavigator = createStackNavigator({

    Login:{
        screen:LoginScreen,
        navigationOptions:{
            headerShown:false
        }
    }
})


export default createAppContainer(AuthNavigator);

