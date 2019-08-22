import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';

class MainView extends Component {
  static navigationOptions = {
    title: 'React Native Domain'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button style={styles.item} onPress={this.openStateComponent} title="Show State Component" color="#841584" />
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.item} onPress={this.openListComponent} title="Show List Component" color="#841584" />
        </View>
      </View>
    );
  }

  openStateComponent = () => {
    this.props.navigation.navigate('State');
  };

  openListComponent = () => {
    this.props.navigation.navigate('List');
  };
}

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignContent: 'center',
    justifyContent: 'center'
  },

  buttonContainer: {
    padding: 50
  },

  item: {
    height: 44
  }
});
