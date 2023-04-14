import * as React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../SRC/style';
import Ionicons from '@expo/vector-icons/Ionicons';


export default class SecondPage extends React.Component{
    constructor() {
    super();
    this.state = {
      newItem: "",
      listOfItems: [],
    };
  }

      deleteItem(id) {
    //busca todos os items da lista
    const list = this.state.listOfItems;
    //filtra a lista e cria outra
    const updatedList = list.filter((item) => item.id !== id);
    //define o estado da lista atualizada
    this.setState({
      listOfItems: updatedList,
    });
  }
  updateInput(key, value) {
    // atualiza o estado
    this.setState({
      [key]: value,
    });
  }
  addItem = () => {
    if (this.state.newItem != "") {
      // cria um item novo id unico
      const newItemJSON = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice(),
      };

      // copia a lista atual
      const list = this.state.listOfItems;

      // adiciona novo item na lista
      list.push(newItemJSON);

      // atualiza o estado com a nova lista e redefine a entrada
      this.setState({
        listOfItems: list,
        newItem: "",
      });
    }
  };

    render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
        </View>
        <View>
          <TextInput
            placeholder="Digite sua tarefa aqui..."
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ newItem: text });
            }}
            value={this.state.newItem}
          ></TextInput>
          <View>
            <TouchableOpacity style={styles.button} onPress={this.addItem}>
              <Text style={styles.buttontext}>+</Text>
            </TouchableOpacity>
          </View>

          <View>
            <ScrollView>
              {this.state.listOfItems.map((item) => {
                return (
                  <View style={styles.listview}>
                    <Text style={styles.textstyle}> {item.value}</Text>
                      <Ionicons 
                        name="trash-outline" 
                        size={32} 
                        color="black" 
                        onPress={() => this.deleteItem(item.id)}                    
                    >
                    </Ionicons>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }

}