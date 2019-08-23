import React, { Component, useState, useEffect } from 'react';
import { FlatList, StyleSheet, ActivityIndicator, View } from 'react-native';
import ListItem from './ListItem';
import { makeRequest } from '../utils/http';

function ListView() {
  const [rowItems, setRowItems] = useState([]);

  useEffect(() => {
    this.getItems().then(items => setRowItems(items));
    dispatch(fetchItems());
  });

  getItems = async () => {
    const { _, body } = await makeRequest('/v2/5d5fcee22f00007f225f3953?mocky-delay=3000ms');
    return body;
  };

  return (
    <View style={styles.container}>
      {rowItems.length > 0 && (
        <FlatList data={rowItems} renderItem={({ item }) => <ListItem key={item.id} item={item} />} />
      )}
      {rowItems.length === 0 && <ActivityIndicator style={styles.activityIndicator} size="large" color="#0000ff" />}
    </View>
  );
}

ListView.navigationOptions = {
  title: 'List View'
};

export default ListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
