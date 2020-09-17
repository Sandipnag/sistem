import 'react-native-gesture-handler';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';


import AuthLoadingStack from './src/navigationGroup/authloading';
import walkthroughStack from './src/navigationGroup/walkthrough';
import AuthStack from './src/navigationGroup/auth';


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoad:AuthLoadingStack,
      Walkthrough: walkthroughStack,
      Auth:AuthStack
    },
    {
      initialRouteName: 'AuthLoad',
    }
  )
);
