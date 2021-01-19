import React from 'react'
import {View} from 'react-native'
import LottieView from 'lottie-react-native';

const LoaderScreen =({}) => (
<LottieView source={require('../../assets/animation/loader.json')} autoPlay loop />
)

export default LoaderScreen