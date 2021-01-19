/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  FlatList
} from 'react-native';
import DashBoard from './src/component/dashboard'
import DayInfo from './src/component/dayInfo'
import LoaderScreen from './src/screens/LoaderScreen'
const data = [{day: "Monday", temp: 8, id:1},{day: "Tuesday", temp: 8, id:2},{day: "Wednesday", temp: 8, id:3},{day: "Thursday", temp: 8, id:4}, {day: "Friday", temp: 8, id:5}]

import ErrorDash from './src/screens/ErrorScreen'
const App: () => React$Node = () => {
  return (
    <>

    <SafeAreaView style={{flex: 1}}>
      <LoaderScreen />
      </SafeAreaView>
    </>
  );
};


export default App;
