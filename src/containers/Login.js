import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  style,
  Button,
  TextInput,
  ActivityIndicator,
  Platform,
  StatusBar,
  LayoutAnimation,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation
} from 'react-native-popup-dialog'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'
import config from '../config'

export const Login = (props) => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

  Login.navigationOptions = { header: null }

  const [loginInput, setLoginInput] = useState({
    ID: '',
    Passwords: ''
  })
  const [loginInfo, setLoginInfo] = useState({
    token: '',
    Position: '',
    KKS1: ''
  })
  const [AnimationDialog, setAnimationDialog] = useState({
    defaultAnimationDialog: false
  })
  const handleLogin = async () => {
    try {
      const info = await axios.post(`${config.apiUrl}/employee/`, {
        ID: `${loginInput.ID}`,
        Pass: `${loginInput.Passwords}`
      })
      setLoginInfo((prev) => ({ ...prev, token: info.data.token }))
      setLoginInfo((prev) => ({ ...prev, Position: info.data.Position }))
      setLoginInfo((prev) => ({ ...prev, KKS1: info.data.KKS1 }))
      setAnimationDialog((prev) => ({ ...prev, defaultAnimationDialog: info.data.defaultAnimationDialog }))
      await AsyncStorage.setItem('token', info.data.token)
      props.navigation.navigate('Home', { KKS1: info.data.KKS1 })
    } catch (e) {
      console.log(e)
      setAnimationDialog({ defaultAnimationDialog: true })
    }
    console.log(loginInfo)
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <View style={styles.blank}></View>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}>
        <View style={styles.containerPicture}>
          <Image
            style={{
              width: 200,
              height: 200
            }}
            source={require('../../Image/Logo_kmitl.png')}
          />
        </View>

        <Text style={{ marginTop: 330, marginLeft: '18%', fontSize: 20, color: '#000' }}>Login</Text>

        <View style={styles.bla}></View>

        <View style={styles.containerTextinput}>
          <TextInput
            // ใส่ค่าแค่จุดID
            onChangeText={(IDlogin) => setLoginInput((prev) => ({ ...prev, ID: IDlogin }))}
            value={this.IDlogin}
            autoCapitalize="none"
            placeholder="Username"
            style={{
              height: 40,
              width: '70%',
              borderColor: '#c0c0c0',
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#c0c0c0',
              marginLeft: '15%',
              marginTop: 10
            }}
          />

          <View style={{ flex: 0.1 }}></View>

          <TextInput
            onChangeText={(Pass) => setLoginInput((prev) => ({ ...prev, Passwords: Pass }))}
            value2={this.Pass}
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry
            style={{
              height: 40,
              width: '70%',
              borderColor: '#c0c0c0',
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: '#c0c0c0',
              marginLeft: '15%',
              marginTop: 5
            }}
          />
          <View style={styles.bla}></View>
          <TouchableOpacity
            style={styles.container2}
            activeOpacity={0.8}
            onPress={() => handleLogin()}
            underlayColor="#fff"
          >
            <Text style={styles.loginText}> Submit </Text>
          </TouchableOpacity>
          <View style={styles.bla}></View>

          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => {
              props.navigation.navigate('Home')
            }}
            underlayColor="#fff"
          >
            <Text style={styles.GuestText}> Guest Login </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <Dialog
        onDismiss={() => {
          setAnimationDialog({ defaultAnimationDialog: false })
        }}
        width={0.5}
        visible={AnimationDialog.defaultAnimationDialog}
        rounded
        actionsBordered
        onTouchOutside={() => {
          setAnimationDialog({ defaultAnimationDialog: false })
        }}
        dialogTitle={
          <DialogTitle
            title="Log in Fail."
            style={{
              backgroundColor: '#F7F7F8'
            }}
            hasTitleBar={false}
            align="left"
          />
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="OK"
              bordered
              onPress={() => {
                setAnimationDialog({ defaultAnimationDialog: false })
              }}
              key="button-2"
            />
          </DialogFooter>
        }
      >
        <DialogContent
          style={{
            backgroundColor: '#F7F7F8'
          }}
        >
          <Text>Plase Check Your ID or Password หรือติดต่อเจ้าหน้าที่</Text>
        </DialogContent>
      </Dialog>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerPicture: {
    // marginVertical: "5%",
    // marginHorizontal: "10%"
    alignSelf: 'center',
    top: 100,
    position: 'absolute'
  },
  containerTextinput: {
    // backgroundColor: 'orange',
    alignSelf: 'center',
    //justifyContent: 'center',
    borderColor: 'white',
    width: '90%',
    marginTop: 10
  },
  container2: {
    backgroundColor: 'orange',
    alignSelf: 'center',
    borderColor: 'white',
    borderRadius: 10,
    width: '30%',
    marginTop: 10
  },

  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  },

  GuestText: {
    color: '#c0c0c0',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 17
  },
  bla: {
    flex: 0.03,
    alignItems: 'center'
  },
  blank: {
    flex: 0.2,
    alignItems: 'center'
  },
  space: { flex: 0.05 }
})
