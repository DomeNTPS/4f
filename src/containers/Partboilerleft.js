import React from 'react'
 import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'

 
import Boilerleft from '../../Image/Boiler New/Boilerleft.svg'
import ContainerTop from '../Layout/containtop'

export default class Partboilerleft extends React.Component {
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
            <Boilerleft height={400} width={win.width} alignSelf="center" />

            <View style={styles.containerbottom0}>
              <TouchableOpacity
                style={{ height: 144, width: 370 }}
                onPress={() =>
                  this.props.navigation.navigate('Partboilerlefttop', {
                    KKS1: kks1,
                    KKS2: 'LBA',
                    KKS3_1: '10',
                    KKS3_2: '20'
                  })
                }
              ></TouchableOpacity>
            </View>
            <View style={styles.containerbottom1}>
              <TouchableOpacity
                style={{ height: 248, width: 274 }}
                onPress={() =>
                  this.props.navigation.navigate('Partboilerleftbottom', { KKS1: kks1, KKS2: 'HAH', KKS3: '30' })
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
    borderColor: '#000',
    borderWidth: 2,
    height: '35%',
    width: '80%',
    position: 'absolute',
    marginTop: 0,
    marginLeft: '5%'
  },
  containerbottom1: {
    borderColor: '#f00',
    borderWidth: 2,
    height: '60%',
    width: '65%',
    position: 'absolute',
    marginTop: '35%',
    marginLeft: '20%'
  }
})
