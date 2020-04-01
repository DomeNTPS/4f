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

export default class Submit extends React.Component {
    render() {
        ;<View style={styles.container}>
          <ContainerTop navigation={this.props.navigation}></ContainerTop>
        </View>

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    //justifyContent: 'center',
  },
  containerbottom: {
    flex: 1
  },
})