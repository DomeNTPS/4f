import { View,Text,StyleSheet,Image,style,Button,TextInput,useState } from 'react-native';
import React,{Component} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            UserPass: ''
        };
    }

    UserLoginFunction = () =>{
 
        const { UserName }  = this.state ;
        const { UserPass }  = this.state ;
        
        
       fetch('https://reactnativecode.000webhostapp.com/User_Login.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
        
           name: UserName,
        
           password: UserPass
        
         })
        
       }).then((response) => response.json())
             .then((responseJson) => {
        
               // If server response message same as Data Matched
              if(responseJson === 'Data Matched')
               {
        
                   //Then open Profile activity and send user email to profile activity.
                   this.props.navigation.navigate('Home', { Name: UserName });
        
               }
               else{
        
                 Alert.alert(responseJson);
               }
        
             }).catch((error) => {
               console.error(error);
             });
        
        
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
                        require('../../Image/Logo_kmitl.png')
                    }
         /></View> 
        <View style = {styles.blank}></View>
            
        <Text style = {{paddingRight: 250,fontSize: 20,color: '#000'}} >Login</Text>

       

        <View style = {styles.bla}></View>
        <TextInput
            onChangeText = {
             (text) => this.setState({
                 text
             })
             }
             value = {
                 this.state.UserName
             }
            placeholder = "Username"
            style = {
                {
                    height: 40,
                    width: 300,
                    borderColor: '#c0c0c0',
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: '#c0c0c0',
                   
                   
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
                this.state.UserPass
            }
            placeholder = "Password"
            style = {
                {
                    alignContent: 'center',
                    height: 40,
                    width: 300,
                    borderColor: '#c0c0c0',
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: '#c0c0c0',
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
