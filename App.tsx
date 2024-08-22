import React, { useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeScreen from "./src/components/HomeScreen";


const App = () => {

  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: "center"
        }}
      >
        <HomeScreen />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({

})

export default App;
