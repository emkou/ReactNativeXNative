import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from './ListItem';

export default class ListView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
            { key: 'Emma' },
            { key: 'Janna' },
            { key: 'Susan' },
            { key: 'Megan' },
            { key: 'Kate' },
            { key: 'Ivan' },
            { key: 'Marc' },
            { key: 'Johannes' },
            { key: 'Margaret' },
            { key: 'Maria' },
            { key: 'Emil' },
            { key: 'Ellen' },
            { key: 'Bernie' }
          ]}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
