import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const ListItem = ({title, onSelect}) => (
    <TouchableOpacity 
        onPress={()=>onSelect()}
        style={styles.listItem}>
        <Text 
            style={styles.listItemTitle}>
            {title}
        </Text>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
    listItem:{
        borderWidth:1,
        borderColor:'lightgrey',
        margin:10,
        paddingVertical:20,
        paddingHorizontal:10
    },
    listItemTitle:{
        fontWeight:'bold'
    }
})