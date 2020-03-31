import * as React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { NavigationEvents } from 'react-navigation'
import ContainerTop from '../Layout/containtop'
import ContainerTopCamera from '../Layout/containertopcamera'

export default class ScanScreen extends React.Component {

  
  state = {
    hasCameraPermission: null,
    scanned: false
  }

  async componentDidMount() {
    this.getPermissionsAsync()
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }
  

  render() {
    const { hasCameraPermission, scanned } = this.state
    const kks1 = this.props.navigation.getParam('KKS1', 'dont have value')
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    }
    handleBarCodeScanned = ({ type, data }) => {
      console.log(kks1)
      this.setState({ scanned: true })
      this.props.navigation.navigate('PartV', { KKS: `${kks1}${data}` })
      // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }
    
    return (
      <View style={styles.container}>
        <BarCodeScanner onBarCodeScanned={handleBarCodeScanned} style={StyleSheet.absoluteFill} />
        <ContainerTopCamera navigation={this.props.navigation}></ContainerTopCamera>
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />}
      </View>
    )
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff'
    //justifyContent: 'center',
  },
  backbut:{
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 100
  },
})
