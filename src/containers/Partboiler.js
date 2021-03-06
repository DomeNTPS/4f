import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, ScrollView, TouchableOpacity } from 'react-native'
import Boiler from '../../Image/Boiler New/Boiler.svg'
import ContainerTop from '../Layout/containtop'

export default class PartBoiler extends React.Component {
  render() {
    const kks1 = this.props.navigation.getParam('KKS1', 'dont have value')
    return (
      <View style={styles.container}>
        <ContainerTop navigation={this.props.navigation}></ContainerTop>
        <View style={styles.containerbottomall}>
          <ScrollView
            maximumZoomScale={3}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Boiler height={450} width={410} alignSelf="center" />
            <View style={styles.containerbottom3}>
              <TouchableOpacity
                style={{ height: 100, width: 330 }}
                onPress={() => this.props.navigation.navigate('Partboilerbottom', { KKS1: kks1 })}
                underlayColor="white"
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom0}>
              <TouchableOpacity
                style={{ height: 200, width: 149 }}
                onPress={() => this.props.navigation.navigate('Partboilerleft', { KKS1: kks1 })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom1}>
              <TouchableOpacity
                style={{ height: 157, width: 130 }}
                onPress={() => this.props.navigation.navigate('Partboilermiddle', { KKS1: kks1 })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom2}>
              <TouchableOpacity
                style={{ height: 153, width: 120 }}
                onPress={() => this.props.navigation.navigate('Partboilerright', { KKS1: kks1 })}
              ></TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerbottomall: {
    flex: 1,

    alignItems: 'center'
  },
  containerbottom0: {
    borderColor: '#000',
    borderWidth: 2,
    height: 170,
    width: 140,
    position: 'absolute',
    marginTop: 50,
    marginLeft: 5
  },
  containerbottom1: {
    borderColor: '#f00',
    borderWidth: 2,
    height: 160,
    width: 140,
    position: 'absolute',
    marginTop: 110,
    marginLeft: 147
  },
  containerbottom2: {
    borderColor: '#1919ff',
    borderWidth: 2,
    height: 175,
    width: 120,
    position: 'absolute',
    marginTop: 63,
    marginLeft: 290
  },
  containerbottom3: {
    borderColor: '#9400D3',
    borderWidth: 2,
    height: 125,
    width: 338,
    position: 'absolute',
    marginTop: 270,
    marginLeft: 60
  },
  bla: {
    flex: 0.03,
    alignItems: 'center'
  }
})
