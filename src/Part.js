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
import {TouchableOpacity} from 'react-native-gesture-handler';
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
        <View style = {
                styles.containerbottom1
            } >
            < ImageZoom cropWidth = {200}
                        cropHeight = {400}
                        imageWidth = {200}
                        imageHeight = {400}
            onDoubleClick = {
                () => this.props.navigation.navigate('Part')} > 
                <Image style = {
                {
                    paddingRight: 0,
                    paddingBottom: 0,
                    width: 200,
                    height: 400
                }
            }
            source = {
            require('../Image/boiler/boilerซ้าย.png')
        }/>
        
        </ImageZoom >
        < ImageZoom cropWidth = {100}
                    cropHeight = {100}
                    imageWidth = {100}
                    imageHeight = {100}
                    onDoubleClick = {
                () => this.props.navigation.navigate('Part')} > 
                <Image style = {
                {
                    paddingRight: 0,
                    paddingBottom: 0,
                    width: 100,
                    height: 100
                }
            }
            source = {
            require('../Image/boiler/boilerกลาง.png')
        }/>
        </ImageZoom > 
        <ImageZoom  cropWidth = {100}
                    cropHeight = {100}
                    imageWidth = {100}
                    imageHeight = {100}
                    onDoubleClick = {
                () => this.props.navigation.navigate('Part')
            } >
            <Image style = {
                {
                    paddingRight: 0,
                    paddingBottom: 0,
                    width: 100,
                    height: 100
                }
            }
        source = {
            require('../Image/boiler/boilerขวา.png')
        }
        /> 
        </ImageZoom >   
        </View> 
        {/* <View style = {
                styles.containerbottom2
            } >

            
        
         < ImageZoom cropWidth = {
             100
         }
     cropHeight = {100}
     imageWidth = {
         100
     }
     imageHeight = {
         100
     }
     onDoubleClick = {
             () => this.props.navigation.navigate('Part')
         } >
         <Image style = {
             {
                 paddingRight: 0,
                 paddingBottom: 0,
                 width: 100,
                 height: 100
             }
         }
     source = {
         require('../Image/boiler/boilerล่าง.png')
     }
     /> 
     </ImageZoom >  
     </View>   */}
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
        flexDirection: "row"
    },
    containerbottom2: {
        flex: 0.2,
        backgroundColor: '#fff',
        alignItems: 'center',
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