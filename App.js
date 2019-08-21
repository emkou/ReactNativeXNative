import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ListView from './src/ListView';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListView />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
