import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  containertop: {
    height: 150,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    paddingLeft: 32,
    paddingRight: 10,
    paddingTop: 50,
    opacity: 1
  }
})
const ContainerTop = ({ navigation }) => {
  return (
    <View style={styles.containertop}>
      <View style={{opacity: 1}}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={{ fontSize: 25, color : '#fff' }}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ContainerTop
