import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Cabecalho from "./src/components/Cabecalho";
import Rodape from "./src/components/Rodape";
import Produtos from "./src/components/Produtos";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: "1",
          nome: "Arroz",
          valor: "22.99",
          quantidade: "15",
          marca: "Vasconcelos",
          referencia: "001",
        },
        {
          id: "2",
          nome: "Feijao",
          valor: "12.99",
          quantidade: "20",
          marca: "Vasconcelos",
          referencia: "002",
        },
        {
          id: "3",
          nome: "Macarrao",
          valor: "9.99",
          quantidade: "45",
          marca: "Amalia",
          referencia: "003",
        },
        {
          id: "4",
          nome: "Sardinha",
          valor: "4.99",
          quantidade: "90",
          marca: "Gomes",
          referencia: "004",
        },
        {
          id: "5",
          nome: "Detergente",
          valor: "1.99",
          quantidade: "120",
          marca: "Ype",
          referencia: "005",
        },
        {
          id: "6",
          nome: "Sabao em Po",
          valor: "10.99",
          quantidade: "10",
          marca: "Omo",
          referencia: "006",
        },
      ],
    };
  }
  render() {
    return (
      <View style={{ flex: 1, height: 70}}>
        <Cabecalho />
        <Text style={styles.titulo}>Lista de Produtos</Text>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Produtos
              nome={item.nome}
              valor={item.valor}
              quantidade={item.quantidade}
              marca={item.marca}
              referencia={item.referencia}
            />
          )}
        />
        <Rodape />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    color: "blue",
    fontSize: 26,
    fontWeight: 800,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 15,
  },
});

export default App;
