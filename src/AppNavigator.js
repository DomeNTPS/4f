import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Friends from './Friends';
import Login from './Login';

const AppNavigator = createStackNavigator({
    
    Login: {screen: Login},
    Home: {screen: Home},
    Friends: {screen: Friends},
    
});

const App = createAppContainer(AppNavigator);

export default App;