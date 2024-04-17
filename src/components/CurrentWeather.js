import React, { Component } from 'react'
import { Text, View, SafeAreaView,StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default class CurrentWeather extends Component {
  render() {
    return (
        <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
        <Feather name = "sun" size = {100}color = "black"/>
          <Text>Current Weather</Text>
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feels like 5</Text>
          
          <View style={styles.highlowWrapper}>
            <Text style={styles.highlow}>High: 8 </Text>
            <Text style={styles.highlow}>Low: 5</Text>
          </View>
        </View>
          <View style={styles.bodyWrapper}>
            <Text style={styles.description}>It's Sunny</Text>
            <Text style={styles.message}>It's Perfect Tshirt weather</Text>

          </View>

      </SafeAreaView>
    )
  
    }
}
  const styles = StyleSheet.create({
    wrapper:{
      flex:1
    },
    container:{
      backgroundColor:'pink',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
     
    },
    
    temp:{
      color:'black',
      fontSize:48
  
    },
    feels:{
      color:'black',
      fontSize:30
    },
    highlow:{
      color:'black',
      fontSize:20
    },
    highlowWrapper:
    {
      flexDirection:'row'
    },
    description:
    {
      fontSize:48
    },
    message:
    {
      fontSize:30
    },
    bodyWrapper:{
      justifyContent:'flex-end',
    
      paddinLeft:25,
      marginBottom:40
    },
  
  
  })


