import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

export default class DogFeed extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                <Text>Dog Feed</Text>
            </View>
        )
    }
}