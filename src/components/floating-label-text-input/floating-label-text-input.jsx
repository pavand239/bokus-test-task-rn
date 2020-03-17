import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export const FloatingLabelTextInput = ({label, value, ...props})=>{
    const [isFocused, setIsFocused] = useState(false);
    let labelStyle={
                position:'absolute',
                left:10,
                top:(isFocused || value !=='')?-6:16,
                fontSize:(isFocused || value !=='')?12:16,
                color: '#aaa', 
            }
    
    return (
        <View>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput style={{textAlignVertical:'center'}}
                {...props}
                value={value}
                onFocus={()=>setIsFocused(true)}
                onBlur={()=>setIsFocused(false)}
            />
        </View>
    )
}