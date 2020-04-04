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
import { Table, Row, Rows } from 'react-native-table-component'
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
    tableHead: ['Equipment',
     'CountWithdraw' 
    ],
    data: []
  })
  useEffect(() => {
    const fetching = async () => {
      try {
        const tokenfromstore = await AsyncStorage.getItem('token')
        if (tokenfromstore !== null) {
          let allitemwithdraw = await axios.get(`${config.apiUrl}/itemcheck/withdraw/${tokenfromstore}`)
          let allitemwithdrawinArray = allitemwithdraw.data.map(({ Count_withdraw, NameEquip }) => [NameEquip, Count_withdraw])
          // console.log(allitemwithdrawinArray)
          setwithdrawInfo((prev) => ({ ...prev, data: allitemwithdrawinArray }))
          // console.log('token: ', tokenfromstore)
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
      <>
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
          width={0.8}
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
              backgroundColor: '#F7F7F8',
            }}
          >
            <Table borderStyle={{ borderWidth: 2, borderColor: 'orange' }}>
              <Row data={withdrawInfo.tableHead} style={styles.head} textStyle={styles.text} />
              <Rows data={withdrawInfo.data} textStyle={styles.text} />
            </Table>
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
      </>
    )
}


export default Submit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center'
  },
  containerbottom: {
    flex: 1
  },
  buttonstyle: {
    backgroundColor: 'white',
    shadowColor: '#0000',
    borderRadius: 10
  },
  head: { height: 40, backgroundColor: 'orange' },
  text: { margin: 6 }
})