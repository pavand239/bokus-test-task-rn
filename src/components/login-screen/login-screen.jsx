import React, {useState, useCallback} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,  
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {useDispatch} from "react-redux";
import { useFocusEffect } from '@react-navigation/native';
import {userLogin} from "../../actions";
import FloatingLabelTextInput from '../floating-label-text-input';

export const LoginScreen = ({navigation}) => {
    let [login, setLogin] = useState(''),
        [password, setPassword] = useState(''),
        [loginError, setLoginError] = useState(null),
        dispatch = useDispatch();
    useFocusEffect(
        useCallback(()=>{
            setLogin('');
            setPassword('');
        },[])
    )
    return (
        <KeyboardAvoidingView  style={styles.container}   enabled>
            <ScrollView contentContainerStyle={styles.container}>
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
                {loginError?<Text style={styles.textError}>{loginError}</Text>:null}
                <FloatingLabelTextInput 
                    style={styles.loginForm}
                    label={'Логин'}
                    onChangeText={(text)=>setLogin(text)}
                    value={login} 
                />
                <FloatingLabelTextInput 
                    secureTextEntry
                    style={styles.loginForm}
                    label={'Пароль'}
                    onChangeText={(text)=>setPassword(text)}
                    value={password} 
                />
                <TouchableOpacity 
                    style={styles.loginFormButton}
                    onPress={()=>{
                        if (password === '' || login === ''){
                            setLoginError('Введите имя пользователя/пароль');
                        } else {
                            setLoginError(null)
                            dispatch(userLogin(login));
                            navigation.navigate('List');
                        }
                        
                    }}
                >
                    <Text style={styles.loginFormButtonText}>Войти</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow:1 ,
      backgroundColor: '#fff',
      justifyContent:'center',
      padding:15,
    },
    welcomeTextContainer:{
        flex:2
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
        flexGrow:1,
    },
    loginForm:{
        height:40,
        borderColor:'lightgrey',
        borderBottomWidth:1,
        margin:10,
        paddingHorizontal:10
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
        
    },
    textError:{
        color:'red'
    }
  });