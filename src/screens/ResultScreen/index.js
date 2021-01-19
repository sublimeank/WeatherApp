import ResultScreenPropTypes from "./ResultScreenPropTypes";
import React from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native'
import DayInfo from '../../component/dayInfo';
import DashBoard from '../../component/dashboard';

const ResultScreen = ({currentTemp, cityName, next7dayData}) => (
    <SafeAreaView style={style.container}>
    <View style={style.dashBoard}>
      <DashBoard number={currentTemp} description={cityName}/>
    </View>
    <View style={style.container}>
      <FlatList
      data={next7dayData}
      renderItem={DayInfo}
      keyExtractor={item => item.id.toString()}
      />
    </View>
  </SafeAreaView>

)

ResultScreen.propTypes = ResultScreenPropTypes

export default ResultScreen;

const style = StyleSheet.create({
    container:{
        flex:1
    },
    dashBoard: {
        flex:1,
        justifyContent: 'center'
    }
})