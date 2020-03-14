import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {Provider, useSelector} from "react-redux";
import {store} from "./store";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./components/login-screen";
import ListScreen from "./components/list-screen"
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const HeaderTitle = ({title, style={}}) => (
  <Text style={style}>{title}</Text>
)
const Username = ({style={}}) => {
  let username = useSelector(state=>state.username)
  return <Text style={style}>{username}</Text>
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Login'
            component={LoginScreen}
            options={{
              title:'Вход в личный кабинет',
              headerTitleStyle:{...styles.headerTitle},
              headerStyle: {
                backgroundColor: 'red'
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
                <Username style={{...styles.headerTitle, ...styles.headerUsername}} />
              ),
              headerLeft:()=>{},
              headerStyle: {
                backgroundColor: 'red'
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#fff',
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
  headerUsername:{
    marginRight:20
  }
});
