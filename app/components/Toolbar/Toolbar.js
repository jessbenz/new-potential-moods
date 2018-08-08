import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = require('../../style');

export default class Toolbar extends React.Component {
  render() {
    return (
    <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>
        {this.props.title}
        </Text>
    </View>
    );
  }
}

//AppRegistry.registerComponent('Toolbar', () => Toolbar);
