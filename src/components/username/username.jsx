import React from 'react';
import {Text, StyleSheet, View} from "react-native";
import {useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export const Username = ({textStyle={}, viewStyle={}, iconStyle={}}) => {
    let username = useSelector(state=>state.username)
    return (
        <View style={{flex:1, flexDirection:'row', alignItems:'center', ...viewStyle}}>
            <Text style={textStyle}>
                {username}       
            </Text>
            <FontAwesomeIcon color='white' icon={faUser} style={{marginLeft:5, ...iconStyle}} size={18}/>
        </View>
        
        )
}

