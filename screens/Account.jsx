import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Account = props => {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: "#0462b3",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Text style={{color:"#fff", fontSize: 42, fontWeight: "bold" }}>Cuenta</Text>
  </View>
  )
}

const styles = StyleSheet.create({})

export default Account;