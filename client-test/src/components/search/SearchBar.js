/**
 * 
 * Lista de Busqueda del Navegador
 * 
 */

import React from "react";
import { StyleSheet, TextInput, View, Keyboard } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Button } from "react-native-rapi-ui";
import { Icon } from 'react-native-elements';


const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        {props.clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              props.setSearchPhrase("")
          }}/>
        )}
      </View>
      {props.clicked && (
        <View>
          {/**
           * 
           * <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
            ></Button>
          */}

         
          <Button 
            text="Buscar"
            status="success"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          >
            Send
          </Button>

        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    
  },
  searchBar__unclicked: {
    padding: 8,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d8f5ff",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 8,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 17,
    marginLeft: 10,
    width: "85%"
  },
  Button: {
    flex: 1,
    marginTop: 10,
  }
});