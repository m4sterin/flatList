import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Butoes from "./Butoes";

class Produto extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{this.props.nome}</Text>
        <View style={styles.alinhamento}>
          <Text style={styles.textos}>
            <strong>Valor:</strong> {this.props.valor}
          </Text>
          <Text style={styles.textos}>
            <strong>Quantidade:</strong> {this.props.quantidade}
          </Text>
        </View>
        <View style={styles.alinhamento}>
          <Text style={styles.textos}>
            <strong>Marca:</strong> {this.props.marca}
          </Text>
          <Text style={styles.textos}>
            <strong>Referencia:</strong> {this.props.referencia}
          </Text>
        </View>
        <Butoes />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 25,
  },
  title: {
    fontSize: 32,
    color: "#FFFF",
    fontWeight: 600,
  },
  textos: {
    color: "#FFFF",
    padding: 5,
    marginRight: 5,
  },
  alinhamento: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Produto;
