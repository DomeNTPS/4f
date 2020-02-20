import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    AsyncStorage
} from 'react-native'
import {
    TouchableOpacity,
    ScrollView
} from "react-native-gesture-handler";


const styles = StyleSheet.create({
    containertop: {
        height: 150,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        paddingLeft: 32,
        paddingRight: 10,
        paddingTop: 50
    },
})
const logout= async()=>{
    try{
    //    await AsyncStorage.clear
       await AsyncStorage.removeItem('token')
       
       console.log("remove ")
    }catch(e){
        console.log(e)
    }
 
}
const ContainerTopForHome = ({
        navigation
    }) => {
    return (
        <View style={styles.containertop}>
            <TouchableOpacity
            onPress = {
                logout(),
                navigation.goBack
            } >
            <Text style={{fontSize: 25}}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity
            title="Scan"
            onPress={() => navigation.navigate("ScanScreen")}
            >
            <Image
              style={{
                paddingRight: 20,
                paddingTop: 30,
                width: 50,
                height: 50
              }}
              source={require("../../Image/Untitled-1.png")}
            />
            <View>
              <Text style={{ paddingRight: 15 }}>Qr scan</Text>
            </View>
          </TouchableOpacity>           
        </View>
    )
}

export default ContainerTopForHome

