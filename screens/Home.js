import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores:[],
    };
  }
  componentDidMount(){
    fetch("http://foodstores.herokuapp.com/get/stores")
    .then((res)=>res.json())
    .then((res)=>{this.setState({stores:res})})
    .catch((error)=>console.error(error))
  }
  items=(item)=>{
    this.props.navigation.navigate("Items",{items:item.items})
  }
  render() {
    return(
    <View style={styles.container}>
      <View style={styles.display}>
      {this.state.stores?.map((item,i)=>(<TouchableOpacity key={i} onPress={(item)=>this.items(item)}><Image style={styles.img}
            source={{uri:item.image}} /><Text>{item.name}</Text></TouchableOpacity>))}
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  display: {
    display:"flex",
    alignContent:'center',
    justifyContent:'flex-start',
    flexDirection:"column",
    flexWrap:'wrap',
    width:300,
    height:800,
    margin:10,
    textAlign:'center',
  },
  img: {
    borderRadius:12,
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default Home;
