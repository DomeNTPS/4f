import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text,
    Image,
    ImageBackground,
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler'; 
import SvgUri from 'react-native-svg-uri';
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
            
        <ImageBackground
        source={require('../Image/boiler/sss.png')}
        style={{ width: 530, height: 405, } }
        >
            {/* <TouchableOpacity style = {styles.container3}
                 onPress = {
                     () =>
                     this.props.navigation.navigate('Partboilermiddle')
                }
                >
            </TouchableOpacity> */}
            <TouchableOpacity style = {styles.container2}
                 onPress = {
                     () =>
                     this.props.navigation.navigate('Partboilerleft')
                }
                >
            </TouchableOpacity>
            
        </ImageBackground>
        
        {/* <Button 
                style = {styles.loginText
                }
                
                onPress ={
                () => this.props.navigation.navigate('Partboilerbottom') 
            } > </Button>
             */}
                           
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
    
    containerbottomall: {
        flex: 0.9,
        backgroundColor: '#fff',
        alignItems: 'center',
        //flexDirection: 'row',
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
    buttonleft:{
        position : 'absolute',
        top : 10,
        left : 20,
        // marginTop : 10,
        width : 70,
        // backgroundColor : 'red',

    },
     loginText: {
         color: '#000',
         textAlign: 'left',
        //  paddingLeft: 10,
        //  paddingRight: 10,
         fontSize: 20,
     },
      container2: {
        //   backgroundColor: 'orange',
         // alignItems: 'flex-start',
          //justifyContent: 'center',
          borderColor: 'white',
        //   position: 'absolute',
          borderRadius: 10,
          width : 150,
          height : 250,
      },
    //   container3: {
    //       backgroundColor: 'orange',
    //       alignItems: 'flex-start',
    //       //justifyContent: 'center',
    //       borderColor: 'white',
    //       borderRadius: 10,
    //       width: 170,
    //       height: 250,
    //   },

});