import React, {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,  
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import {useDispatch} from "react-redux";
import {userLogin} from "../../actions"

export const LoginScreen = ({navigation}) => {
    let [login, setLogin] = useState(''),
        [password, setPassword] = useState(''),
        dispatch = useDispatch();
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeTextHeader}>Welcome to my app!</Text>
                <Text style={styles.welcomeText}>   "Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum."
                </Text>
            </View>
            <View style={styles.loginFormContainer}>
                <TextInput 
                    style={styles.loginForm}
                    placeholder={'Логин'}
                    onChangeText={(text)=>setLogin(text)}
                    value={login} 
                />
                <TextInput 
                    style={styles.loginForm}
                    placeholder={'Пароль'}
                    onChangeText={(text)=>setPassword(text)}
                    value={password} 
                />
                <TouchableOpacity 
                    style={styles.loginFormButton}
                    onPress={()=>{
                        dispatch(userLogin(login));
                        navigation.navigate('List');
                    }}
                >
                    <Text style={styles.loginFormButtonText}>Войти</Text>
                </TouchableOpacity>
            </View>
            <View style={{height:100}} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1 ,
      backgroundColor: '#fff',
      alignSelf:'stretch',
      padding:15
    },
    welcomeTextContainer:{
        flex:2,
    },
    welcomeTextHeader:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:"center",
        paddingBottom:30
    },
    welcomeText:{
        fontSize:14,
        textAlign:"center"
    },
    loginFormContainer:{
        flex:1,

    },
    loginForm:{
        height:40,
        borderColor:'lightgrey',
        borderBottomWidth:1,
        marginBottom:10
    },
    loginFormButton:{
        backgroundColor: 'red',
        alignItems:'center',
        padding:10,
        width:200,
        alignSelf:'center'
    },
    loginFormButtonText:{
        color:'white',
        fontWeight:'bold',
        
    }
  });