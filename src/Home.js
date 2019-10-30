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
import ImageViewer from 'react-native-image-zoom-viewer';
import ImageZoom from 'react-native-image-pan-zoom';

export default class Home extends React.Component {
    render() {
        return (<View style ={styles.container}>
             
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
        <View style = {styles.containerpicture}>

        
        <ImageZoom     cropWidth={400}
                       cropHeight={250}
                       imageWidth={400}
                       imageHeight={250} 
                       onClick = {
                                    () =>
                                    this.props.navigation.navigate('Part')}>
        <Image style = {
                    {
                        paddingRight : 20,
                        paddingBottom : 30,
                        width: 400,
                        height: 250
                    }
                }
        
        source={require('../Image/Part/Steam_boiler.png')}/>
    
        </ImageZoom >
        </View>
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
        flex: 0.45,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        paddingTop : 20,
        //justifyContent: 'center',
    },
    containerbottom: {
        flex: 0.8,
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