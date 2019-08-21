import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.container} key={item.key}>
      <Text style={styles.item}>{item.key}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
