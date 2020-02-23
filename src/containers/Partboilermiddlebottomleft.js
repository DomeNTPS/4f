import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import ImageZoom from 'react-native-image-pan-zoom'
import Boilermiddlebottomleft from '../../Image/Boiler New/Boilermidbottomleft.svg'
import ContainerTop from '../Layout/containtop'
export default class Partboilermiddlebottomleft extends React.Component {
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
            <Boilermiddlebottomleft height={400} width={win.width} alignSelf="center" />
            <View style={styles.containerbottom0}>
              <TouchableOpacity
                style={{ height: 53, width: 117 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CF001FT001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom1}>
              <TouchableOpacity
                style={{ height: 40, width: 35 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA004` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom2}>
              <TouchableOpacity
                style={{ height: 40, width: 35 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom3}>
              <TouchableOpacity
                style={{ height: 40, width: 35 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA003` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom4}>
              <TouchableOpacity
                style={{ height: 40, width: 35 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA002` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom5}>
              <TouchableOpacity
                style={{ height: 45, width: 35 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA006` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom6}>
              <TouchableOpacity
                style={{ height: 45, width: 35 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}AA005` })}
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
  containerbottom0: {
    // backgroundColor: "#ff0",
    height: 53,
    width: 117,
    position: 'absolute',
    marginTop: 285,
    marginLeft: 90
  },
  containerbottom1: {
    // backgroundColor: "#f00",
    height: 40,
    width: 35,
    position: 'absolute',
    marginTop: 77,
    marginLeft: 207
  },
  containerbottom2: {
    height: 40,
    width: 35,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 123,
    marginLeft: 207
  },
  containerbottom3: {
    // backgroundColor: "#f00",
    height: 40,
    width: 35,
    position: 'absolute',
    marginTop: 170,
    marginLeft: 207
  },
  containerbottom4: {
    height: 40,
    width: 35,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 220,
    marginLeft: 207
  },
  containerbottom5: {
    height: 45,
    width: 35,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 108,
    marginLeft: 270
  },
  containerbottom6: {
    height: 45,
    width: 35,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 190,
    marginLeft: 270
  },
  bla: {
    flex: 0.03,
    alignItems: 'center'
  }
})
