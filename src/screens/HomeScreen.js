import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableHighlight onPress={()=> navigation.navigate('test')}>
        <Text>Click me</Text>
      </TouchableHighlight>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})