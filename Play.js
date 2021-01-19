/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native'
import {Provider} from 'react-redux'
import store from './src/store/store'
import App from './src/App'

const Play = () => (
  <Provider store ={store}>
    <App />
  </Provider>
)

export default Play;
