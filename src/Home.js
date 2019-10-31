import React from 'react';
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
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import ImageZoom from 'react-native-image-pan-zoom';

export default class Home extends React.Component {
    // logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
    //     console.log('');
    //     console.log('');
    //     console.log('-------------');
    //     console.log('Event: ', event);
    //     console.log('GestureState: ', gestureState);
    //     console.log('ZoomableEventObject: ', zoomableViewEventObject);
    //     console.log('');
    //     console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
    // }
    render() {
        return (<View style ={styles.container}>
            {/* <ReactNativeZoomableView
                maxZoom={1.5}
                minZoom={0}
                zoomStep={0.5}
                initialZoom={1}
                bindToBorders={true}
                // onZoomAfter={this.logOutZoomState}
                style={{
                    // padding: 10,
                    backgroundColor: 'red',
                }}>       */}
        <View style = {styles.containertop} >
        <TouchableOpacity
            title = "Scan"
            onPress = {
                () =>
                this.props.navigation.navigate('ScanScreen')
              }
        >
            <Image style = {
                    {
                        paddingRight : 20,
                        paddingTop : 30,
                        width: 50,
                        height: 50
                    }
                }
                 source = {require ('../Image/Untitled-1.png')}/>
            <View>
                <Text style = {{paddingRight : 15}} >Qr scan</Text>
            </View>
        </TouchableOpacity>
        </View>
        <View style={styles.containerbottom}>
            
        <ImageZoom     cropWidth={400}
                       cropHeight={250}
                       imageWidth={400}
                       imageHeight={250}
                        onDoubleClick={
                            () => this.props.navigation.navigate('Part')} >
        {/* <TouchableOpacity
                    title = "Scan"
            onPress = {
                    () =>this.props.navigation.navigate('Part')}> */}
        <Image style = {
                    {
                        paddingRight : 20,
                        paddingBottom : 30,
                        width: 400,
                        height: 250
                    }
                }
        
        source={require('../Image/Part/Steam_boiler.png')}/>
        {/* </TouchableOpacity> */}
        </ImageZoom > 
            
            </View>
            {/* </ReactNativeZoomableView> */}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    
        //justifyContent: 'center',
    },

    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',

    },

    containertop: {
        flex: 0.1,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        paddingTop : 20,
        
        //justifyContent: 'center',
    },
    containerbottom: {
        flex: 0.9,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    containerpicture: {
        //flex: 0.8,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

});