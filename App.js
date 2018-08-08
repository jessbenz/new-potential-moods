import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import Toolbar from './app/components/Toolbar/Toolbar';

const styles = require('./app/style');

export default class App extends React.Component {
  constructor(){
    super(); //call super, what ever that is
    // Standard RN listview initialization below
    // pass in rowHasChanged
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});

    // define the state
    this.state = {
      //set some called itemDataSource to be variabe called ds, and create ds above
      itemDataSource: ds
    }

    // this.renderRow = this.renderRow.bind(this)
    // this.pressRow = this.renderRow.bind(this)
  }

  componentWillMount(){
    this.getItems()
  }
  //to make double sure that it does get called:
  componentDidMount(){
    this.getItems()
  }

  // create function to get the data
  getItems(){
    //create array
    let items = [
      {title: 'Item One'},
      {title: 'Item Two'}
    ]

    // now we want make our items into a listview
    // so we pass 'items' into the list view rows
    this.setState({
      itemDataSource: this.state.itemDataSource.cloneWithRows(items)
    })
  }

  pressRow(item){
    console.log(item)
  }

  renderRow(item){
    return (
      <TouchableHighlight onPress={() => {
        //pass 'item' when pressed
        this.pressRow(item)
      }}>
        <View style={styles.li}>
          <Text style={styles.liText}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>    
        <Toolbar title="ItemLister"/>
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}  
        />
      </View>
    );
  }
}