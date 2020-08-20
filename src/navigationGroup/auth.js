import { createStackNavigator } from 'react-navigation-stack';
import Login from '../pages/login';
import WhoYouAre from '../pages/registration/whoyouare';
import ParentOrStudent from '../pages/registration/parentorstudent';
import ParentInformation from '../pages/registration/parentinformation';

const ResgistrationStack = createStackNavigator({
    WhoYouAre: WhoYouAre,
    ParentOrStudent:ParentOrStudent,
    ParentInformation:ParentInformation
}, {
    headerMode: 'none',
    initialRouteName:'ParentInformation'
});

const AuthStack = createStackNavigator({
    Login: Login,
    Resgistration:ResgistrationStack
}, {
    headerMode: 'none'
});

export default AuthStack;