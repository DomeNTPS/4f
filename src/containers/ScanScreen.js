import * as React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { NavigationEvents } from 'react-navigation'
import ContainerTop from '../Layout/containtop'

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
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
        <Button title="back" onPress={this.props.navigation.goBack} style={{alignSelf:'center', marginTop:100}}>
          <Text style={{ fontSize: 25 }}>Back</Text>
        </Button>

        {scanned && <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />}
      </View>
    )
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true })
    this.props.navigation.navigate('PartV', { KKS: `${kks1}${data}` })
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff'
    //justifyContent: 'center',
  },
})
