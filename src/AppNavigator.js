import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./containers/Home";
import Partboiler from "./containers/Partboiler";
import Login from "./containers/Login";
import ScanScreen from "./containers/ScanScreen";
import Data from "./containers/Data";
import Partboilerleft from "./containers/Partboilerleft";
import Partboilerlefttop from "./containers/Partboilerlefttop";
import Partboilerleftbottom from "./containers/Partboilerleftbottom";
import Partboilermiddle from "./containers/Partboilermiddle";
import Partboilermiddletopleft from "./containers/Partboilermiddletopleft";
import Partboilermiddletopright from "./containers/Partboilermiddletopright";
import Partboilermiddlebottomleft from "./containers/Partboilermiddlebottomleft";
import Partboilermiddlebottomright from "./containers/Partboilermiddlebottomright";
import Partboilerright from "./containers/Partboilerright";
import Partboilerrighttop from "./containers/Partboilerrighttop";
import Partboilerrightmid from "./containers/Partboilerrightmid";
import Partboilerrightbottom from "./containers/Partboilerrightbottom";
import Partboilerbottom from "./containers/Partboilerbottom";
import Partboilerbottomleft from "./containers/Partboilerbottomleft";
import Partboilerbottomcenter from "./containers/Partboilerbottomcenter";
import Partboilerbottomright from "./containers/Partboilerbottomright";
import PartV from "./containers/PartV";
import PartEllipse from "./containers/PartEllipse";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Partboiler: { screen: Partboiler },
  ScanScreen: { screen: ScanScreen },
  Data: { screen: Data },
  Partboilerleft: { screen: Partboilerleft },
  Partboilerlefttop: { screen: Partboilerlefttop },
  Partboilerleftbottom: { screen: Partboilerleftbottom },
  Partboilermiddle: { screen: Partboilermiddle },
  Partboilermiddletopleft: { screen: Partboilermiddletopleft },
  Partboilermiddletopright: { screen: Partboilermiddletopright },
  Partboilermiddlebottomleft: { screen: Partboilermiddlebottomleft },
  Partboilermiddlebottomright: { screen: Partboilermiddlebottomright },
  Partboilerright: { screen: Partboilerright },
  Partboilerrighttop: { screen: Partboilerrighttop },
  Partboilerrightmid: { screen: Partboilerrightmid },
  Partboilerrightbottom: { screen: Partboilerrightbottom },
  Partboilerbottom: { screen: Partboilerbottom },
  Partboilerbottomleft: { screen: Partboilerbottomleft },
  Partboilerbottomcenter: { screen: Partboilerbottomcenter },
  Partboilerbottomright: { screen: Partboilerbottomright },
  PartV:{screen:PartV},
  PartEllipse:{screen:PartEllipse},
});

const App = createAppContainer(AppNavigator);

export default App;
