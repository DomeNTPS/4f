import { View,Text,StyleSheet,Image,style,Button,TextInput,useState } from 'react-native';
import React,{Component} from 'react';

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
            <View style = {{flex: 0.07 , width: 100,backgroundColor: 'orange',}}> 
                <Text style = {{marginLeft: 27,marginTop: 15,fontSize: 20 }} >Login</Text>
            </View>
            <View style = {styles.blank}></View>
            < TextInput
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
                    width: 200,
                    borderColor: '#fff',
                    borderWidth: 1
                   
                }
            }
            />
            <View style = { styles.bla } ></View>
            < Button
            title = "Submit"
            color='orange'
            alignItems='center'
            backgroundColor='#000'
            onPress = {
                    () =>
                    this.props.navigation.navigate('Home')
                } >
                </Button>
        </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },

        bla:{
            flex: 0.2,
        },
        blank:{
            flex: 0.11,
        }
    

});
