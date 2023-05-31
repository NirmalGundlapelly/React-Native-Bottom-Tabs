import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';


export default class Explore extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.homeContainer}>
          <Text style={styles.homeText}>Explore</Text>
       
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  homeContainer:{
    height:"100%",
    backgroundColor:"black"
  },
  homeText:{
    color:"white",
    fontSize:35,
    textAlign:"center",
    marginTop:80
  }
})