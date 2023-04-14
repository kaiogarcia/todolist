import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


// variável para criar css

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFBCBC",
  },
  text: {
    paddingRight: 200,
    textAlign: "center",
    marginTop: "15%",
    fontSize: 25,
    color: "Black",
    fontWeight: "bold",
  },
  inputBox: {
    marginLeft:30,
    width: 270,
    borderRadius: 10,
    top: 600,
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 20,
    height: 50,
  },
  button: {
    position: "absolute",
    right: 20,
    top: 550,
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },

  buttontext: {
    color: "black",
    fontSize: 24,
  },
  textstyle: {
    fontSize: 20,
    color: "black",
  },
  listview: {
    paddingLeft:15,
    borderRadius:10,
    backgroundColor: "white",
    borderWidth: 2,
    height: 50,
    justifyContent: "space-between",
    borderColor: "white",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});


export default styles;