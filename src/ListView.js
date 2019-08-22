import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from './ListItem';
import { fakedata } from '../data/datasource.js';

const ListView = () => {
  return (
    <View style={styles.container}>
      <FlatList data={fakedata} renderItem={({ item }) => <ListItem key={item.id} item={item} />} />
    </View>
  );
};

ListView.navigationOptions = {
  title: 'List View'
};

export default ListView;

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
