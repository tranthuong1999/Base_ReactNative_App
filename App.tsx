import React, { useEffect } from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeScreen from "./src/components/HomeScreen";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <HomeScreen />
        </View>
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({

})

export default App;
