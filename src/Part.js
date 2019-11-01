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
            < ImageZoom cropWidth = {140}
                        cropHeight = {188}
                        imageWidth = {140}
                        imageHeight = {188}
            onDoubleClick = {
                () => this.props.navigation.navigate('Part')} > 
                <Image style = {
                {
                    paddingRight: 0,
                    paddingBottom: 0,
                    width: 140,
                    height: 150
                }
            }
            source = {
            require('../Image/equipment/boilerซ้ายแก้ไข1.png')
        }/>
        
        </ImageZoom >
        <View style={
                    styles.containerbottom2
                } >
        < ImageZoom cropWidth = {110}
                    cropHeight = {130}
                    imageWidth = {110}
                    imageHeight = {130}
                    onDoubleClick = {
                () => this.props.navigation.navigate('Part')} > 
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
        </ImageZoom >
        </View>
        <View style={
                    styles.containerbottom3
                } > 
        <ImageZoom  
                    cropWidth = {100}
                    cropHeight = {158}
                    imageWidth = {100}
                    imageHeight = {158}
                    onDoubleClick = {
                () => this.props.navigation.navigate('Part')
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
        </ImageZoom >
        </View>
        </View>
        <View style={
                    styles.containerbottom0
                } > 
        <ImageZoom  
                    cropWidth = {200}
                    cropHeight = {100}
                    imageWidth = {200}
                    imageHeight = {100}
                    onDoubleClick = {
                () => this.props.navigation.navigate('Part')
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
    },
    containerbottom2: {
        flex: 0.6,
        paddingTop : 58,
        paddingRight : 50,
        backgroundColor: '#fff',
        flexDirection: "row"
    },
    containerbottom3: {
        flex: 0.6,
        paddingTop: 29.5,
        paddingRight: 65,
        backgroundColor: '#fff',
        flexDirection: "row"
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