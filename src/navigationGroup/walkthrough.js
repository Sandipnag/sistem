import { createStackNavigator } from 'react-navigation-stack';

import Walkthrough from '../pages/walkthrough';

const walkthroughStack = createStackNavigator({
    Walkthrough: Walkthrough
},{
    headerMode:'none'
});

export default walkthroughStack;