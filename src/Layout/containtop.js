import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
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

const ContainerTop = ({
        navigation
    }) => {
      const kks1 = navigation.getParam('KKS1', '10')
    return (
        <View style={styles.containertop}>
            <TouchableOpacity
            onPress={navigation.goBack}>
            <Text style={{fontSize: 25}}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
            title="Scan"
            onPress={() => navigation.navigate("ScanScreen",{ KKS1: kks1 })}
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

export default ContainerTop

