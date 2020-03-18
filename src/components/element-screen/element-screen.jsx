import React, {useContext} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {userLogout} from "../../actions";
import DataServiceContext from "../data-service-context";

export const ElementScreen = ({route, navigation}) => {
    const {getItem} = useContext(DataServiceContext),
          dispatch = useDispatch(),
          username = useSelector(state=>state.username);
    if (!username) {
        navigation.navigate('Login');
    }
    let {id} = route.params,
        {title, description} = getItem(id);
    console.log(title, description)
    return (
        <View style={styles.container}>
            <View style ={{padding:10}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.buttonBlock}>
                <TouchableOpacity 
                        onPress={()=>navigation.goBack()}
                        style={styles.backButton} >
                    <Text style={styles.backButtonText}>Назад</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                        onPress={()=>dispatch(userLogout())}
                        style={styles.logoutButton} >
                    <Text style={styles.logoutButtonText}>Выйти из аккаунта</Text>
                </TouchableOpacity>
            </View>
        </View>
    )  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor: 'white'
    },
    buttonBlock:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end'
    },
    backButton:{
        padding:11,
        flex:1,
        borderWidth:1,
        borderColor:'darkred' 
    },
    backButtonText:{
        color:'darkred',
        textAlign:'center'
    },
    logoutButton: {
        padding:12,
        flex:1,
        backgroundColor:'darkred'
    },
    logoutButtonText:{
        color:'white',
        textAlign:'center'
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        margin:5
    },
    description:{
        fontSize:14
    }
})