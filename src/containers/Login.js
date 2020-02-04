import { View, Text, StyleSheet, Image, style, Button, TextInput, useState, ActivityIndicator,Platform,StatusBar } from 'react-native';
import React,{Component} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor()
    {
        super();
        this.state = { ID: '', Passwords: '', loading: false, disabled: false}
    }
    render() {   
        
         return(
            <View style = { styles.container }> 
                <StatusBar barStyle="default"></StatusBar>
                < View style = {styles.blank} ></View>
                < View style = {
                    {
                        marginTop: "5%",
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
                        require('../../Image/Logo_kmitl.png')
                    }
         /></View> 
        <View style = {styles.blank}></View>
            
        <Text style = {{marginLeft: "15%",fontSize: 20,color: '#000'}} >Login</Text>

       

        <View style = {styles.bla}></View>
        <TextInput
            onChangeText={(text) => this.setState({ ID: text })}
             value = {
                 this.state.UserName
             }
            placeholder = "Username"
            style = {
                {
                    height: "5%",
                    width: "70%",
                    borderColor: '#c0c0c0',
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: '#c0c0c0',
                    marginLeft: "15%"
                   
                }
            }
            />

            <View style = {{flex: 0.01}}></View>

            <TextInput
            onChangeText={(text) => this.setState({ Passwords: text })}
            value2 = {
                this.state.UserPass
            }
            placeholder = "Password"
            style = {
                {
                    height: "5%",
                    width: "70%",
                    borderColor: '#c0c0c0',
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: '#c0c0c0',
                    marginLeft: "15%"
                }
            }
            />

            <View style = {{flex: 0.02}}></View>

            <TouchableOpacity
            onPress = {
                () =>
                this.props.navigation.navigate('Home')
            }
            underlayColor = '#c0c0c0' >
                <Text style = {
                    styles.ForgetText
                } > Forget Password? </Text>  
            </TouchableOpacity>

            <View style = { styles.bla } ></View>

            <TouchableOpacity style = {styles.container2}
                disabled={this.state.disabled} 
                activeOpacity={0.8} 
                onPress={
                    //this.saveData
                     () =>
                     this.props.navigation.navigate('Home')
                }
                underlayColor = '#fff'>
                            <Text style = {
                            styles.loginText
                        }> Submit </Text>
            </TouchableOpacity>
                 {
                     (this.state.loading)
                         ?
                         (<ActivityIndicator size="large" />)
                         :
                         null
                 }

            <View style = {styles.bla} ></View>

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
        backgroundColor: '#fff',
    },

    container2: {
        backgroundColor: 'orange',
        alignSelf: 'center',
        //justifyContent: 'center',
        borderColor: 'white',
        borderRadius: 10,
        width: "30%",
    },

    loginText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
    },

    GuestText: {
        color: '#c0c0c0',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 17,
    },

    ForgetText: {
        color: '#c0c0c0',
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
