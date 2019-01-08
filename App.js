import React, { Component } from "react";
import {
  SafeAreaView, StyleSheet
} from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})