import { View,Text,StyleSheet,Image,style,Button,TextInput,useState } from 'react-native';
import React,{Component} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {   
        
         return(
            <View style = { styles.container }> 
                < View style = {styles.blank} ></View>
                < View style = {
                    {
                        alignSelf: 'center',
                        height: 150,
                    }
                } >
                    <Image style = {
                    {
                        
                        width: 150,
                        height: 150
                    }
                }
                    source = {
                        require('../Image/tools.png')
                    }
         /></View> 
        <View style = {styles.blank}></View>
            
        <Text style = {{paddingRight: 250,fontSize: 20,color: 'white'}} >Login</Text>

       

        <View style = {styles.bla}></View>
        <TextInput
            onChangeText = {
             (text) => this.setState({
                 text
             })
             }
             value = {
                 this.state.text
             }
            placeholder = "Username"
            style = {
                {
                    height: 40,
                    width: 300,
                    borderColor: '#fff',
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                   
                   
                }
            }
            />

            <View style = {{flex: 0.01}}></View>

            <TextInput
            onChangeText = {
                (text2) => this.setState({
                    text2
                })
            }
            value2 = {
                this.state.text2
            }
            placeholder = "Password"
            style = {
                {
                    alignContent: 'center',
                    height: 40,
                    width: 300,
                    borderColor: '#fff',
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                }
            }
            />

            <View style = {{flex: 0.02}}></View>

            <TouchableOpacity
            onPress = {
                () =>
                this.props.navigation.navigate('Home')
            }
            underlayColor = '#fff' >
                <
                Text style = {
                    styles.ForgetText
                } > Forget Password? </Text>  
            </TouchableOpacity>

            <View style = { styles.bla } ></View>

            <TouchableOpacity style = {styles.container2}
                 onPress = {
                     () =>
                     this.props.navigation.navigate('Home')
                }
                underlayColor = '#fff'>
                            <Text style = {
                            styles.loginText
                        }> Submit </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress = {
                     () => 
                     this.props.navigation.navigate('Home')
                }
                underlayColor = '#fff' >
                            <Text style = {
                            styles.GuestText
                        } > Guest Login </Text> 
            </TouchableOpacity>
        </View>
    
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        // justifyContent: 'center',
    },

    container2: {
        backgroundColor: 'orange',
        alignItems: 'center',
        //justifyContent: 'center',
        borderColor: 'white',
        borderRadius: 10,
    },

    loginText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
    },

    GuestText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
    },

    ForgetText: {
        color: '#fff',
        //textAlign: 'center',
        paddingLeft: 200,
        paddingRight: 10,
        fontSize: 10,
    },
        bla:{
            flex: 0.03,
            alignItems: 'center',
        },
        blank:{
            flex: 0.2,
            alignItems: 'center',
        },
        space:{ flex: 0.05,},

    
    

});
