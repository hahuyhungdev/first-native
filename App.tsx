import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Hello from './src/components/hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello name='hahuyhung' />
      <Text
        style={{
          fontSize: 18,
          margin: 20,
        }}
      >
        Open up App.js to start working on youdasdasr app!
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite', // "#fff
    alignItems: 'center',
    justifyContent: 'center',
  },
});
