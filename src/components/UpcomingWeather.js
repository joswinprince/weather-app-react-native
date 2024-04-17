import { Text, View ,SafeAreaView,StyleSheet} from 'react-native'
import React, { Component } from 'react'

const DATA = []
export default class UpcomingWeather extends Component {
  render() {
    return (
   
          <SafeAreaView>
              <Text>Upcoming Weather</Text>
              <FlatList
              
              />

          </SafeAreaView>
       
    )
  
  const styles = StyleSheet.create({
    container:{
        flex:1
    }
  
  })
}
}