import React from 'react'
 import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'

 
import Boilermid from '../../Image/Boiler New/Boilermid.svg'
import ContainerTop from '../Layout/containtop'

export default class Partboilermid extends React.Component {
  render() {
    const kks1 = this.props.navigation.getParam('KKS1', 'dont have value')
    return (
      <View style={styles.container}>
        <ContainerTop navigation={this.props.navigation}></ContainerTop>
        <View style={styles.containerbottom}>
          <ScrollView
            maximumZoomScale={3}
            scrollEnabled={true}
            minimumZoomScale={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Boilermid height={400} width={win.width} alignSelf="center" />

            <View style={styles.containerbottom0}>
              <TouchableOpacity
                style={{ height: '100%', width: '100%' }}
                onPress={() =>
                  this.props.navigation.navigate('Partboilermiddletopleft', { KKS1: kks1, KKS2: 'HAH', KKS3: '20' })
                }
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom1}>
              <TouchableOpacity
                style={{ height: '100%', width: '100%' }}
                onPress={() =>
                  this.props.navigation.navigate('Partboilermiddletopright', { KKS1: kks1, KKS2: 'HAH', KKS3: '10' })
                }
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom2}>
              <TouchableOpacity
                style={{ height: '100%', width: '100%' }}
                onPress={() =>
                  this.props.navigation.navigate('Partboilermiddlebottomleft', { KKS1: kks1, KKS2: 'LAB', KKS3: '40' })
                }
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom3}>
              <TouchableOpacity
                style={{ height: '100%', width: '100%' }}
                onPress={() =>
                  this.props.navigation.navigate('Partboilermiddlebottomright', { KKS1: kks1, KKS2: 'LAB', KKS3: '30' })
                }
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
  containerbottom: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  containerbottom0: {
    borderColor: 'orange',
    borderWidth: 2,
    height: 235,
    width: 205,
    position: 'absolute',
    marginTop: 10,
    marginLeft: 30
  },
  containerbottom1: {
    borderColor: 'black',
    borderWidth: 2,
    height: 235,
    width: 170,
    position: 'absolute',
    marginTop: 10,
    marginLeft: 235
  },
  containerbottom2: {
    height: 140,
    width: 100,
    position: 'absolute',
    borderColor: '#AB6',
    borderWidth: 2,
    marginTop: 245,
    marginLeft: 45
  },
  containerbottom3: {
    width: 100,
    height: 120,
    position: 'absolute',
    borderColor: 'blue',
    borderWidth: 2,
    marginTop: 245,
    marginLeft: 190
  }
})
