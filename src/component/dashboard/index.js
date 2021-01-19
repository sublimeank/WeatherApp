import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import DashBoardPropTypes from './DashBoard.propTypes'

const DashBoard = ({
    number,
    description,
    styles
}) => (
    <View>
        <Text>{number}</Text>
        <Text>{description}</Text>
    </View>
)

DashBoard.propTypes = DashBoardPropTypes;
export default DashBoard;

const style = StyleSheet.create({
    container:{

    },
    indicatorText:{

    },
    descriptionText:{

    }
})