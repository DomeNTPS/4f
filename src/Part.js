import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import ImageZoom from 'react-native-image-pan-zoom';
export default class Friends extends React.Component {
    
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
        < ScrollView maximumZoomScale = {
            5
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
        <View style = {
                styles.containerbottom1
            } >
            <TouchableOpacity
                onPress = {
                    () => this.props.navigation.navigate('Partboilerleft')
                }>
                <Image style = {
                {
                    paddingRight: 0,
                    paddingBottom: 0,
                    width: 140,
                    height: 150,
                }
            }
            source = {
            require('../Image/equipment/boilerซ้ายแก้ไข1.png')
        }/>
        </TouchableOpacity>
        <View style={
                    styles.containerbottom2
                } >
        < TouchableOpacity
                onPress = {
                () => this.props.navigation.navigate('Partboilermiddle')
        } >
                <Image style = {
                {

                    paddingBottom: 0,
                    paddingTop : 100,
                    width: 110,
                    height: 120
                }
            }
            source = {
            require('../Image/equipment/boilerกลางแก้ไข.png')
        }/>
        </TouchableOpacity>
        </View>
        <View style={
                    styles.containerbottom3
                } > 
        < TouchableOpacity
                onPress = {
                () => this.props.navigation.navigate('Partboilerright')
        } >
            <Image style = {
                {   
                    paddingRight: 0,
                    paddingBottom: 0,
                    width: 85,
                    height: 140
                }
            }
        source = {
            require('../Image/equipment/boilerขวาแก้ไข.png')
        }
        /> 
        </TouchableOpacity>
        </View>
        </View>
        {/* <View style={
                    styles.containerbottom0
                } > 
        <ImageZoom  
                    cropWidth = {200}
                    cropHeight = {100}
                    imageWidth = {200}
                    imageHeight = {100}
                    onDoubleClick = {
                () => this.props.navigation.navigate('Partboilerbottom')
            } >
            <Image style = {
                {   
                    paddingRight: 0,
                    paddingBottom: 0,
                    width: 250,
                    height: 50
                }
            }
        source = {
            require('../Image/equipment/boilerล่างแก้ไข.png')
        }
        /> 
        </ImageZoom >
        </View> */}
        </ScrollView>   
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
        flex: 0.2,
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        paddingTop : 20,
        //justifyContent: 'center',
    },
    containerbottom1: {
        flex: 0.6,
        backgroundColor: '#fff',
        flexDirection: "row",
        padding : 20,
        width: 140,
        height: 188,
        position: "absolute",        
    },
    containerbottom2: {
        flex: 0.6,
        paddingTop : 58,
        // paddingRight : 50,
        backgroundColor: '#fff',
        flexDirection: "row",
        position: "absolute",
    },
    containerbottom3: {
        flex: 0.6,
        paddingTop: 29.5,
        // paddingRight: 65,
        backgroundColor: '#fff',
        flexDirection: "row",
        position: "absolute",
    },
    containerbottom0: {
        // flex: 0.2,
        backgroundColor: '#fff',
        flexDirection: "column",
        paddingBottom : 200,
        padding : 50
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
});