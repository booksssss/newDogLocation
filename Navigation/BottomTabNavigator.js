import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import DogFeed from "../Screens/DogFeed";
import DogScreen from "../Screens/DogScreen";
import firebase from "firebase";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return(
        <Tab.Navigator 
        screenOptions={({route})=>({
            tabBarIcon:({focused, color, size})=>{
                var iconName
                if(route.name=="DogFeed"){
                    iconName=focused ? 'book' : 'book-outline'
                }
                else if(route.name=="DogScreen"){
                    iconName=focused ? 'create' : 'create-outline'
                }
                return <Ionicons name={iconName} size={size} color={color}></Ionicons>
            }
        })}
        tabBarOptions={{activeTintColor:"tomato", inactiveTintColor:'gray'}}
        >
            <Tab.Screen name="DogFeed" component={DogFeed} options={{headerShown: false}}>

            </Tab.Screen>
            <Tab.Screen name="DogScreen" component={DogScreen} options={{headerShown: false}}>

            </Tab.Screen>
        </Tab.Navigator>
    )
}
export default BottomTabNavigator