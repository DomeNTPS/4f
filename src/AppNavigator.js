import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Part from './Part';
import Login from './Login';
import ScanScreen from './ScanScreen';
import Data from './Data';

const AppNavigator = createStackNavigator({
    
    Login: {screen: Login},
    Home: {screen: Home},
    Part: {screen: Part},
    ScanScreen: {screen: ScanScreen},
    Data: {screen: Data},
    
});

const App = createAppContainer(AppNavigator);

export default App;