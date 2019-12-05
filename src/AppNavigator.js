import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./containers/Home";
import Part from "./containers/Part";
import Login from "./containers/Login";
import ScanScreen from "./containers/ScanScreen";
import Data from "./containers/Data";
import Partboilerleft from "./containers/Partboilerleft";
import Partboilermiddle from "./containers/Partboilermiddle";
import Partboilerright from "./containers/Partboilerright";
import Partboilerbottom from "./containers/Partboilerbottom";
import Partboilerbottomleft from "./containers/Partboilerbottomleft";
import Partboilerbottomcenter from "./containers/Partboilerbottomcenter";
import Partboilerbottomright from "./containers/Partboilerbottomright";
import test from "./containers/test";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Part: { screen: Part },
  ScanScreen: { screen: ScanScreen },
  Data: { screen: Data },
  Partboilerleft: { screen: Partboilerleft },
  Partboilermiddle: { screen: Partboilermiddle },
  Partboilerright: { screen: Partboilerright },
  Partboilerbottom: { screen: Partboilerbottom },
  Partboilerbottomleft: { screen: Partboilerbottomleft },
  Partboilerbottomcenter: { screen: Partboilerbottomcenter },
  Partboilerbottomright: { screen: Partboilerbottomright },
  test:{screen:test},
});

const App = createAppContainer(AppNavigator);

export default App;
