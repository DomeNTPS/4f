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
import SearchableDropdown from 'react-native-searchable-dropdown'


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
  const [KKSInfo, setKKSInfo] = useState({
    item: []
  })
  const [nameselect, setNameselect] = useState('')
  const [KKSSelect, setKKSselect] = React.useState([]);
  useEffect(() => {
    const fetching = async () => {
      try {
        const tokenfromstore = await AsyncStorage.getItem('token')
        if (tokenfromstore !== null) {
          let allitemwithdraw = await axios.get(`${config.apiUrl}/itemcheck/withdraw/${tokenfromstore}`)
          let allitemwithdrawinArray = allitemwithdraw.data.map(({ Count_withdraw, NameEquip }) => [NameEquip, Count_withdraw])
          // console.log(allitemwithdrawinArray)
          setwithdrawInfo((prev) => ({ ...prev, data: allitemwithdrawinArray }))
          let allKKS = await axios.get(`${config.apiUrl}/changeRunningEquip/setKKS/${tokenfromstore}`)
          let allKKSaddId =allKKS.data.map(({KKS},index)=>({id : index ,name : KKS}))
          // console.log(allKKSaddId)
          setKKSInfo((prev) => ({ ...prev, item: allKKSaddId }))
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
  const handleChangeNameEquip = async (value) => {
    setKKSselect(value.name);
    // console.log(value.name)
    let setNameEquip = await axios.get(`${config.apiUrl}/changeRunningEquip/setName/${value.name}`)
    setNameselect(setNameEquip.data[0].NameEquip)
    console.log(setNameEquip.data[0].NameEquip)
  };
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
                text="Confirm"
                bordered
                onPress={() => {
                  if (nameselect==''){
                    alert([{ text: 'please select kks' }])
                  }else{
                    // insertwithdraw(),
                  setconfirmDialog({ defaultAnimationDialog: false })
                  }
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
            <Table borderStyle={{ borderWidth: 2, borderColor: 'orange' }}>
              <Row data={withdrawInfo.tableHead} style={styles.head} textStyle={styles.text} />
              <Rows data={withdrawInfo.data} textStyle={styles.text} />
            </Table>
            <View style={styles.search}>
              <SearchableDropdown
                onTextChange={(text) => text}
                onItemSelect={handleChangeNameEquip}
                containerStyle={{
                  width: 190
                }}
                textInputStyle={{
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5
                }}
                itemStyle={{
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: '#ddd',
                  borderColor: '#bbb',
                  borderWidth: 1,
                  borderRadius: 5
                }}
                itemTextStyle={{
                  color: '#222'
                }}
                itemsContainerStyle={{
                  maxHeight: 140
                }}
                items={KKSInfo.item}
                placeholder="KKS code"
                resetValue={false}
                underlineColorAndroid="transparent"
              />

              <Text editable={false} style={{ fontSize: 20 }}>
                {' '}
                {nameselect}{' '}
              </Text>
            </View>

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
  text: { margin: 6 },
  search :{
    display: 'flex',
    marginTop: 10,
  },
})