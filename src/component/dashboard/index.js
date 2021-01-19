import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import DashBoardPropTypes from './DashBoard.propTypes'
import {vs, ms, s} from '../../utils/scale'
const DashBoard = ({
    number,
    description,
    styles
}) => (
    <View style={[style.container,styles]}>
        <Text style={style.indicatorText}>{number}</Text>
        <Text style={style.descriptionText}>{description}</Text>
    </View>
)

DashBoard.propTypes = DashBoardPropTypes;
export default DashBoard;

const style = StyleSheet.create({
    container:{
        marginTop: vs(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    indicatorText:{
        fontFamily: 'DMSans-Bold',
        lineHeight: vs(106),
        fontSize: ms(100),
        color: '#212124'
    },
    descriptionText:{
        marginTop: vs(14),
        fontFamily: 'DMSans-Bold',
        lineHeight: vs(28),
        fontSize: ms(26),
        color: '#212124'
    }
})