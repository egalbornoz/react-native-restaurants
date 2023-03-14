import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

 const Restaurants = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f9ed69",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{color:"#fff", fontSize: 42, fontWeight: "bold" }}>Restaurantes</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default Restaurants;