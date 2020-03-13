import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header"

export default function App() {
  return (
    <View style={{flex:1}}>
      <View 
          style={{flex:1}}>
            <Header headerText='Вход в личный кабинет' username='pavand239'/>
        </View>
      <View style={styles.container}>
        <View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
