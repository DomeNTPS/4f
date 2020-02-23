import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import ImageZoom from 'react-native-image-pan-zoom'
import Boilerlefttop from '../../Image/Boiler New/Boilerlefttop.svg'
import ContainerTop from '../Layout/containtop'
export default class Partboilerlefttop extends React.Component {
  render() {
    const kks1 = this.props.navigation.getParam('KKS1', 'dont have value')
    const kks2 = this.props.navigation.getParam('KKS2', 'dont have value')
    const kks3_2 = this.props.navigation.getParam('KKS3_2', 'dont have value')
    const kks3_1 = this.props.navigation.getParam('KKS3_1', 'dont have value')
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
            <Boilerlefttop height={150} width={win.width} alignSelf="center" />
            <View style={styles.containerbottomE1}>
              <TouchableOpacity
                style={{ height: 20, width: 45 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}CF001FT001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE2}>
              <TouchableOpacity
                style={{ height: 18, width: 40 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}CT001TT001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE3}>
              <TouchableOpacity
                style={{ height: 18, width: 40 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}CT002TT002` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE4}>
              <TouchableOpacity
                style={{ height: 18, width: 43 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}CP001PT001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE5}>
              <TouchableOpacity
                style={{ height: 20, width: 40 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_2}AA001PCV001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomE6}>
              <TouchableOpacity
                style={{ height: 22, width: 42 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}CP002PI002` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV1}>
              <TouchableOpacity
                style={{ height: 10, width: 17 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_2}AA002` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV2}>
              <TouchableOpacity
                style={{ height: 10, width: 17 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_2}AA003` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV3}>
              <TouchableOpacity
                style={{ height: 10, width: 17 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_2}AA001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV4}>
              <TouchableOpacity
                style={{ height: 10, width: 15 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}AA005` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV5}>
              <TouchableOpacity
                style={{ height: 10, width: 15 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}AA006` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV6}>
              <TouchableOpacity
                style={{ height: 10, width: 15 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}AA003` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV7}>
              <TouchableOpacity
                style={{ height: 10, width: 15 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}AA004` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV8}>
              <TouchableOpacity
                style={{ height: 20, width: 13 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}AA001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottomV9}>
              <TouchableOpacity
                style={{ height: 20, width: 13 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3_1}AA002` })}
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
  containerbottomE1: {
    // backgroundColor: "#f00",
    height: 20,
    width: 45,
    position: 'absolute',
    marginTop: 45,
    marginLeft: 135
  },
  containerbottomE2: {
    height: 18,
    width: 40,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 66,
    marginLeft: 108
  },
  containerbottomE3: {
    // backgroundColor: "#f00",
    height: 18,
    width: 40,
    position: 'absolute',
    marginTop: 66,
    marginLeft: 148
  },
  containerbottomE4: {
    height: 18,
    width: 43,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 85,
    marginLeft: 140
  },
  containerbottomE5: {
    // backgroundColor: "#f00",
    height: 20,
    width: 40,
    position: 'absolute',
    marginTop: 15,
    marginLeft: 275
  },
  containerbottomE6: {
    height: 22,
    width: 42,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 75,
    marginLeft: 263
  },

  containerbottomV1: {
    height: 10,
    width: 17,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 35,
    marginLeft: 228
  },
  containerbottomV2: {
    height: 10,
    width: 17,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 35,
    marginLeft: 246
  },
  containerbottomV3: {
    height: 10,
    width: 17,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 35,
    marginLeft: 265
  },
  containerbottomV4: {
    height: 10,
    width: 15,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 79,
    marginLeft: 228
  },
  containerbottomV5: {
    height: 10,
    width: 15,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 79,
    marginLeft: 248
  },
  containerbottomV6: {
    height: 10,
    width: 15,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 87,
    marginLeft: 190
  },
  containerbottomV7: {
    height: 10,
    width: 15,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 87,
    marginLeft: 208
  },
  containerbottomV8: {
    height: 20,
    width: 13,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 105,
    marginLeft: 220
  },
  containerbottomV9: {
    height: 20,
    width: 13,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 105,
    marginLeft: 240
  },
  bla: {
    flex: 0.03,
    alignItems: 'center'
  }
})
