import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.leftItem}>Firstname: </Text>
        <Text style={styles.leftItem}>Lastname: </Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.rightItem}>{item.first_name}</Text>
        <Text style={styles.rightItem}>{item.last_name}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0
  },

  viewContainer: {
    justifyContent: 'space-around',
    height: 44
  },

  leftItem: {
    fontSize: 14,
    fontWeight: 'bold',
    alignContent: 'center',
    alignItems: 'center'
  },

  rightItem: {
    fontSize: 16,
    alignContent: 'center',
    alignItems: 'center'
  }
});
