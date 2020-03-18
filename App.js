import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {Provider, useSelector} from "react-redux";
import {store} from "./src/store";
import { createStackNavigator } from "@react-navigation/stack";
import DataService from "./src/service/data-service";
import DataServiceContext from "./src/components/data-service-context"
import LoginScreen from "./src/components/login-screen";
import ListScreen from "./src/components/list-screen"
import ElementScreen from "./src/components/element-screen";
import Username from "./src/components/username"


const Stack = createStackNavigator();
const dataService = new DataService();


export default function App() {
  return (
    <DataServiceContext.Provider value={dataService}>
      <Provider store={store}>
        <NavigationContainer>
        <StatusBar backgroundColor='#bb0d02' />
          <Stack.Navigator>
            
            <Stack.Screen 
              name='Login'
              component={LoginScreen}
              options={{
                title:'Вход в личный кабинет',
                headerTitleStyle:{...styles.headerTitle},
                headerStyle: {
                  backgroundColor: '#bb0d02'
                },
              }}
            />
            <Stack.Screen 
              name='List'
              component={ListScreen}
              options={{
                title:'Список',
                headerTitleStyle:{...styles.headerTitle},
                headerRight:()=>(
                  <Username textStyle={{...styles.headerTitle}} viewStyle={{margin:10}} />
                ),
                headerLeft:()=>{},
                headerStyle: {
                  backgroundColor: '#bb0d02'
                },
              }}
            />
            <Stack.Screen 
              name='Element'
              component={ElementScreen}
              options={{
                title:'Элемент',
                headerTitleStyle:{...styles.headerTitle},
                headerRight:()=>(
                  <Username textStyle={{...styles.headerTitle}} viewStyle={{margin:15}} />
                ),
                headerStyle: {
                  backgroundColor: '#bb0d02'
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </DataServiceContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  headerTitle:{
    color:'white',
    fontSize:14,
    fontWeight:'bold',
  },
});
