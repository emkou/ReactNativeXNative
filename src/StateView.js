import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

class StateView extends Component {
  static navigationOptions = {
    title: 'State View'
  };

  constructor(props) {
    super(props);

    this.state = {
      count: 0 //can be done with hooks too
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>{`Count: ${this.state.count}`}</Text>

        <Button
          style={styles.buttonContainer}
          onPress={() => this.setState({ count: this.state.count + 1 })}
          title="Increment state parameter"
          color="#841584"
        />
      </View>
    );
  }
}

export default StateView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignContent: 'center',
    justifyContent: 'center'
  },

  textContainer: {
    alignSelf: 'center',
    padding: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },

  buttonContainer: {
    height: 44,
    padding: 25
  }
});
