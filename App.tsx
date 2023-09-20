/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/views/Home';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default App;
