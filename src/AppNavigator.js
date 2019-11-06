import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Part from './Part';
import Login from './Login';
import ScanScreen from './ScanScreen';
import Data from './Data';
import Partboilerleft from './Partboilerleft';
import Partboilermiddle from './Partboilermiddle';
import Partboilerright from './Partboilerright';
import Partboilerbottom from './Partboilerbottom';

const AppNavigator = createStackNavigator({
    
    Login: {screen: Login},
    Home: {screen: Home},
    Part: {screen: Part},
    ScanScreen: {screen: ScanScreen},
    Data: {screen: Data},
    Partboilerleft: {screen: Partboilerleft},
    Partboilermiddle: {screen: Partboilermiddle},
    Partboilerright: {screen: Partboilerright},
    Partboilerbottom: {screen: Partboilerbottom},
    
});

const App = createAppContainer(AppNavigator);

export default App;