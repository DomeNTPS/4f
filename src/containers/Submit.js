import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Modal,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  AsyncStorage,
  RefreshControl
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'
import dayjs from 'dayjs'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation
} from 'react-native-popup-dialog'
import PTRView from 'react-native-pull-to-refresh'
import { fetchUpdateAsync } from 'expo/build/Updates/Updates'
import useForceUpdate from 'use-force-update'
import config from '../config'

export const Submit = (props) => {
  const {
    navigation
  } = props
  const [TOKEN, setTOKEN] = useState({
    token: 'loading'
  })
  const [confirmDialog, setconfirmDialog] = useState({
    defaultAnimationDialog: false
  })
  const [hiddenbottom, sethiddenbottom] = useState({
    value: true
  })
  const [withdrawInfo, setwithdrawInfo] = useState({
    columns:[
      {title : "Equipment" , field : "NameEquip"},
      {title : "CountWithdraw" , field : "Count_withdraw"},
    ],
    data :[]
  })
  useEffect(() => {
    const fetching = async () => {
      try {
        const tokenfromstore = await AsyncStorage.getItem('token')
        if (tokenfromstore !== null) {
          let allitemwithdraw = await axios.get(`${config.apiUrl}/itemcheck/withdraw/${tokenfromstore}`)
          // We have token!!
          setwithdrawInfo(prev =>({...prev , data : allitemwithdraw.data}))
          console.log(allitemwithdraw.data)
          console.log('token: ', tokenfromstore)
          setTOKEN({
            token: `${tokenfromstore}`
          })
          sethiddenbottom({ value: false })
        } else {
          console.log('dont have token')
          // sethiddenbottom(true)
        }
      } catch (e) {
        console.log(e)
      }
    }
    fetching()
  }, [])
    return ( 
      <View style={styles.container}>
      <TouchableOpacity
              // visible ={true}
              disabled={hiddenbottom.value}
              style={styles.buttonstyle}
              onPress={() => {
                setconfirmDialog({ defaultAnimationDialog: true })
              }}
            >
              <Text style={styles.buttonText}> Confirm fix </Text>
      </TouchableOpacity>
      <Dialog
              onDismiss={() => {
                setconfirmDialog({ defaultAnimationDialog: false })
              }}
              width={0.5}
              visible={confirmDialog.defaultAnimationDialog}
              rounded
              actionsBordered
              onTouchOutside={() => {
                setconfirmDialog({ defaultAnimationDialog: false })
              }}
              dialogTitle={
                <DialogTitle
                  title="Table of Withdraw"
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
                    text="CANCEL"
                    bordered
                    onPress={() => {
                      setconfirmDialog({ defaultAnimationDialog: false })
                    }}
                    key="button-1"
                  />
                  <DialogButton
                    text="OK"
                    bordered
                    onPress={() => {
                      // insertwithdraw(),
                       setconfirmDialog({ defaultAnimationDialog: false })
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
                <Text>In inventory piece </Text>
                {/* <TextInput
                  onChangeText={(Num) => setWithdrawCount({ CountUse: parseInt(Num, 10) })}
                  value={this.Num}
                  defaultValue={Count}
                  clearTextOnFocus={true}
                  style={{
                    width: '25%',
                    // borderColor: '#c0c0c0',
                    borderWidth: 1,
                    borderRadius: 10,
                    // backgroundColor: '#c0c0c0',
                    marginLeft: '15%',
                    fontSize: 20
                  }}
                  keyboardType="numeric"
                /> */}
              </DialogContent>
            </Dialog>
            </View>
    )
}


export default Submit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    //justifyContent: 'center',
  },
  containerbottom: {
    flex: 1
  },
  buttonstyle: {
    backgroundColor: 'white',
    shadowColor: '#0000',
    borderRadius: 10,
    width: 100,
    // marginLeft: 50
    justifyContent: 'center'
    
    
  }
})