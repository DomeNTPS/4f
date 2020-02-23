import React from 'react'
 import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'

 
import Boilerleftbottom from '../../Image/Boiler New/Boilerleftbottom.svg'
import ContainerTop from '../Layout/containtop'
export default class Partboilerleftbottom extends React.Component {
  render() {
    const kks1 = this.props.navigation.getParam('KKS1', 'dont have value')
    const kks2 = this.props.navigation.getParam('KKS2', 'dont have value')
    const kks3 = this.props.navigation.getParam('KKS3', 'dont have value')
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
            <Boilerleftbottom height={400} width={400} alignSelf="center" />
            <View style={styles.containerbottom4}>
              <TouchableOpacity
                style={{ height: 35, width: 40 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA004` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE1}>
              <TouchableOpacity
                style={{ height: 20, width: 56 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA004` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE2}>
              <TouchableOpacity
                style={{ height: 20, width: 56 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CT004TT004` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE3}>
              <TouchableOpacity
                style={{ height: 20, width: 56 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CT001TT001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE4}>
              <TouchableOpacity
                style={{ height: 20, width: 56 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CP003PI003` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE5}>
              <TouchableOpacity
                style={{ height: 20, width: 56 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CT002TT002` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE6}>
              <TouchableOpacity
                style={{ height: 20, width: 56 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CP002PT002` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE7}>
              <TouchableOpacity
                style={{ height: 20, width: 56 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA001PCV001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE8}>
              <TouchableOpacity
                style={{ height: 20, width: 56 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CP001PT001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV1}>
              <TouchableOpacity
                style={{ height: 10, width: 20 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA010` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV2}>
              <TouchableOpacity
                style={{ height: 10, width: 20 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA009` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV3}>
              <TouchableOpacity
                style={{ height: 10, width: 20 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA008` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV4}>
              <TouchableOpacity
                style={{ height: 10, width: 20 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA007` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV5}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV6}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA006` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV7}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA005` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV8}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA002` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV9}>
              <TouchableOpacity
                style={{ height: 15, width: 25 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA003` })}
              ></TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const win = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerbottomall: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  containerbottom4: {
    //  backgroundColor: "#ff0",
    height: 35,
    width: 40,
    position: 'absolute',
    marginTop: 233,
    marginLeft: 118
  },
  containerbottomE1: {
    // backgroundColor: "#f00",
    height: 20,
    width: 55,
    position: 'absolute',
    marginTop: 57,
    marginLeft: 30
  },
  containerbottomE2: {
    height: 20,
    width: 56,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 57,
    marginLeft: 85
  },
  containerbottomE3: {
    // backgroundColor: "#f00",
    height: 20,
    width: 56,
    position: 'absolute',
    marginTop: 53,
    marginLeft: 275
  },
  containerbottomE4: {
    height: 20,
    width: 56,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 83,
    marginLeft: 78
  },
  containerbottomE5: {
    // backgroundColor: "#f00",
    height: 20,
    width: 56,
    position: 'absolute',
    marginTop: 73,
    marginLeft: 275
  },
  containerbottomE6: {
    height: 20,
    width: 56,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 118,
    marginLeft: 78
  },
  containerbottomE7: {
    // backgroundColor: "#f00",
    height: 25,
    width: 56,
    position: 'absolute',
    marginTop: 153,
    marginLeft: 85
  },
  containerbottomE8: {
    height: 20,
    width: 56,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 338,
    marginLeft: 77
  },
  containerbottomV1: {
    height: 10,
    width: 20,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 87.5,
    marginLeft: 135
  },
  containerbottomV2: {
    height: 10,
    width: 20,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 87.5,
    marginLeft: 163
  },
  containerbottomV3: {
    height: 10,
    width: 20,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 124,
    marginLeft: 135
  },
  containerbottomV4: {
    height: 10,
    width: 20,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 124,
    marginLeft: 163
  },
  containerbottomV5: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 200,
    marginLeft: 100
  },
  containerbottomV6: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 200,
    marginLeft: 128
  },
  containerbottomV7: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 200,
    marginLeft: 158
  },
  containerbottomV8: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 340,
    marginLeft: 135
  },
  containerbottomV9: {
    height: 15,
    width: 25,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 340,
    marginLeft: 160
  },
  bla: {
    flex: 0.03,
    alignItems: 'center'
  }
})
