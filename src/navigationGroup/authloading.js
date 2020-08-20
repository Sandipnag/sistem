import { createStackNavigator } from 'react-navigation-stack';
import Authloading from '../pages/authloading';

const AuthLoadingStack = createStackNavigator({
    Authloading: Authloading
},{
    headerMode:'none'
});

export default AuthLoadingStack;