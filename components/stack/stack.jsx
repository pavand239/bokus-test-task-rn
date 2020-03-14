import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {useSelector} from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../login-screen";
import ListScreen from "../list-screen";

const Stack = createStackNavigator();

const Header = ({title, titleStyle={},username=null}) => (
  <View style={styles.header}>
    <Text style={titleStyle}>{title}</Text>
    <Text style={titleStyle}>{username}</Text>
  </View>
)

export const AppStack = () => {
    let username = useSelector(state=>state.username)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name='Login'
                component={LoginScreen}
                options={{
                    headerTitle:props=><Header 
                    title='Вход в личный кабинет' 
                    titleStyle = {styles.headerTitle}
                    {...props} />,
                    headerStyle: {
                    backgroundColor: 'red'
                    },
                }}
                headerStyle={{

                }}
                />
                <Stack.Screen 
                name='List'
                component={ListScreen}
                options={{
                    headerTitle:props=><Header 
                    title='Список' 
                    titleStyle = {styles.headerTitle}
                    username = {username}
                    {...props} />,
                    headerStyle: {
                    backgroundColor: 'red'
                    },
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
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
    justifyContent:'space-around',
    alignSelf:'stretch',
    borderColor:'black',
    borderWidth:1
  },
  headerTitle:{
    color:'white',
    fontSize:14,
    fontWeight:'bold'
  }
});
