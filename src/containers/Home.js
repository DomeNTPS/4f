import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Modal,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ContainerTop from '../Layout/containtop';
export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
         <ContainerTop navigation ={this.props.navigation}>
        </ContainerTop>
        <View style={styles.containerbottom}>
          <TouchableOpacity
              title="Scan"
              alignItems = "center"
              onPress={() => this.props.navigation.navigate("Partboiler")}
            >
              <Image
                style = {
                  {
                    width: 400,
                    height: 230
                  }
                }
                source={require("../../Image/boiler/Water-Treatment-Steam-Boiler-749x372.png")}>
              </Image>
              
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //justifyContent: 'center',
  },
  containerbottom: {
    flex: 1,
    alignItems: "center"
  },
});
