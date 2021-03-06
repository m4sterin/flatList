import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class Cabecalho extends Component {
  render() {
    return <View style={styles.cabec}></View>;
  }
}
const styles = StyleSheet.create({
  cabec: {
    backgroundColor: "blue",
    height: 50,
  },
});

export default Cabecalho;
