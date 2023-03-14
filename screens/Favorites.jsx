import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favorites= props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#4cc06c",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{color:"#fff", fontSize: 42, fontWeight: "bold" }}>Favoritos</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
export default Favorites;