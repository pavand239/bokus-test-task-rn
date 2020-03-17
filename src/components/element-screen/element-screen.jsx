import React, {useContext} from 'react';
import {View, Text, StyleSheet} from "react-native";
import DataServiceContext from "../data-service-context";

export const ElementScreen = ({route}) => {
    const {getItem} = useContext(DataServiceContext);
    let {id} = route.params,
        {title, description} = getItem(id);
    return (
        <View style ={{padding:10}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )  
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        margin:5
    },
    description:{
        fontSize:14
    }
})