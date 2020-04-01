import React, {Component} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Map from '../map';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataBase: null
    };
  }
  componentDidMount() {
    fetch('https://ecocaffemap.firebaseio.com/arr.json')
      .then(res => res.json())
      .then(data => {
        const dataBase = [];
        for (const i in data) {
          dataBase.push(data[i]);
        }
        this.setState({dataBase})
      })
      .catch(err => console.log(`err: ${err}`));
  }

  render() {
    const { dataBase } = this.state;
    if(!dataBase) {
      return <Text style={style.text}>Wait</Text>
    }
    return <Map base={ this.state.dataBase }/>
  }
}

const style = StyleSheet.create({
  text: {
    textAlign: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35
  }
});
