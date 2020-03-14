import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ListItem = ({title}) => (
    <View style={styles.listItem}>
        <Text style={styles.listItemTitle}>
            {title}
        </Text>
    </View>
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