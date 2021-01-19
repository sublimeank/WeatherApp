import ErrorDashPropTypes from "./ErrorDash.propTypes";
import React from 'react';
import {View, TouchableOpacity, StyleSheet,Text } from 'react-native'
import { ms, vs, s } from "../../utils/scale";

const ErrorDash = ({errorText, buttonText, onButtonClick}) => (
    <View style={style.container}>
        <View style={style.view}>
            <Text style={style.errorText}>
                {errorText}
            </Text>
        </View>
        <View style={style.view}>
            <TouchableOpacity  style={style.button} onPress = {() => onButtonClick()}>
                <Text style={style.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    </View>
) 
ErrorDash.propTypes = ErrorDashPropTypes;

export default ErrorDash;

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText:{
        fontFamily: 'DMSans-Bold',
        lineHeight: vs(54),
        fontSize: ms(50),
        color: '#212124',
        marginHorizontal: s(16),
        marginVertical: s(16)
    },
    button:{
        borderWidth: ms(1),
        borderColor: '#212124'
    },
    buttonText:{
        fontFamily: 'DMSans-Bold',
        lineHeight: vs(20),
        fontSize: ms(16),
        color: '#212124',
        marginVertical: vs(14),
        marginHorizontal: s(16)
    },
})