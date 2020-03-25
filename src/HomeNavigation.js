import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/Login';
import AccountCreation from './screens/AccountCreation';
import Details from './screens/Details';

const AppNavigator = createStackNavigator({
  Login: Login,
  AccounCreation: AccountCreation,
  Details: Details
},
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);