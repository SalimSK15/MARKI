import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialBottomTabView, createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialTab from '../composants/Tabs/MaterialTab';

const Tab = createMaterialBottomTabNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='routeInitial' screenOptions={{headerShown: false}}>
        <Tab.Screen name="routeInitial" component={MaterialTab} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})