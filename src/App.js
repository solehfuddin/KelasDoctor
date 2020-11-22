  import React from 'react'
  import { StyleSheet, Text, View } from 'react-native'
  import { ILLogo } from './assets'

  export default function App() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ILLogo />
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#112340', marginTop: 20 }}>My Doctor</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({})
