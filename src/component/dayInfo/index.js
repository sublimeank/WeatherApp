import DayInfoProptypes from "./DayInfo.proptypes";
import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import { s, vs,ms } from "../../utils/scale";

const DayInfo = ({item}) =>(
    <View style={style.container}>
        <Text style={style.textDay}>{item.day}</Text>
        <Text style={style.textTemp}>{item.temp}</Text>
    </View>
) 
DayInfo.propTypes = DayInfoProptypes

export default DayInfo;

const style = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: vs(2),
        borderColor: '#212124'
    },
    textDay:{
        marginStart: s(16),
        marginVertical: vs(14),
        fontFamily: 'DMSans-Bold',
        lineHeight: vs(26),
        fontSize: ms(24),
        color: '#212124'
    },
    textTemp: {
        marginVertical: vs(14),
        fontFamily: 'DMSans-Bold',
        lineHeight: vs(26),
        fontSize: ms(24),
        color: '#212124',
        marginEnd: s(12)
    }
})