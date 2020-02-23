import React from 'react'
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import ImageZoom from 'react-native-image-pan-zoom'
import Boilermiddletopleft from '../../Image/Boiler New/Boilermidtopleft.svg'
import ContainerTop from '../Layout/containtop'
export default class Partboilermiddletopleft extends React.Component {
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
            <Boilermiddletopleft height={500} width={win.width} alignSelf="center" />
            <View style={styles.containerbottom3}>
              <TouchableOpacity
                style={{ height: 25, width: 80 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CT001TT001` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom4}>
              <TouchableOpacity
                style={{ height: 25, width: 80 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CT002TT002` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom5}>
              <TouchableOpacity
                style={{ height: 25, width: 80 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CT003TT003` })}
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom6}>
              <TouchableOpacity
                style={{ height: 25, width: 80 }}
                onPress={() => this.props.navigation.navigate('PartV', { KKS: `${kks1}${kks2}${kks3}CT004TT004` })}
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
  containerbottom3: {
    // backgroundColor: "#fA0",
    height: 25,
    width: 80,
    position: 'absolute',
    marginTop: 28,
    marginLeft: 305
  },
  containerbottom4: {
    height: 25,
    width: 80,
    position: 'absolute',
    // backgroundColor: '#AF6',
    marginTop: 54,
    marginLeft: 305
  },
  containerbottom5: {
    height: 25,
    width: 80,
    position: 'absolute',
    // backgroundColor: '#AB6',
    marginTop: 409.5,
    marginLeft: 118
  },
  containerbottom6: {
    height: 25,
    width: 80,
    position: 'absolute',
    // backgroundColor: '#f00',
    marginTop: 435,
    marginLeft: 118
  },
  bla: {
    flex: 0.03,
    alignItems: 'center'
  }
})
