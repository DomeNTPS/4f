import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text,
    Image,
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import SvgUri from 'react-native-svg-uri';
// import test3 from ;
// import Svg,{
//     Use,Image,
// } from 'react-native-svg';
export default class Part extends React.Component {
    
    render() {
        return ( <View style = {styles.container} >
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
        <View style = {styles.containerbottomall}>
        < ScrollView maximumZoomScale = {
            10
        }
        scrollEnabled = {
            true
        }
        minimumZoomScale = {
            1
        }
        showsHorizontalScrollIndicator = {
            false
        }
        showsVerticalScrollIndicator = {
            false
        } >
                    <SvgUri    
                        width="200"
                        height="200"
                        source={require('../Image/Part/Boiler.svg')}/>
        </ScrollView>
        </View>   
     </View>
        );
    }
     
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
        
    },
    containertop: {
        flex: 0.1,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        paddingTop : 20,
        //justifyContent: 'center',
    },
    containerbottom5: {
        // flex: 0.6,
        paddingTop: 50,
        // paddingRight : 50,
        backgroundColor: '#f0f',
        // flexDirection: "row",
        padding: 43,
        alignSelf: 'flex-start',
        position: "absolute",
    },
    containerbottom2: {
        // flex: 0.6,
        paddingTop : 92,
        // paddingRight : 50,
        backgroundColor: '#0ff',
        // flexDirection: "row",
        padding: 158,
        height: 300,
        alignSelf: 'center',
        position: "absolute",
    },
    containerbottom3: {
        // flex: 0.6,
        paddingTop: 63,
        // padding: 200,
        alignSelf: 'flex-end',
        paddingRight: 68,
        backgroundColor: '#AB6',
        // flexDirection: "row",
        position: "absolute",
    },
    containerbottom0: {
        backgroundColor: '#fff',
        // flexDirection: "column",
        // flex: 0.9,
        paddingTop : 400,
        paddingRight : 20.5,
        position: "absolute",
        alignSelf : 'center',
        // height: 50,
        // width: 250,
    },
    containerbottomall: {
        flex: 0.9,
        backgroundColor: '#fff',
        flexDirection: "row",
        // paddingBottom: 200,
        // padding: 50
    },
    containerpicture: {
        //flex: 0.8,
        backgroundColor: '#fff',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',

    },
    bla: {
        flex: 0.03,
        alignItems: 'center',
    },
});