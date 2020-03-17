import React, {useContext} from 'react';
import DataServiceContext from "../data-service-context";
import { useSelector } from "react-redux";
import {
    View,
    FlatList
} from "react-native";
import ListItem from "../list-item";


export const ListScreen = ({navigation}) => {
    const {getItemList} = useContext(DataServiceContext),
          username = useSelector(state=>state.username);
    if (!username) {
        navigation.navigate('Login');
    }
    let data = getItemList();
    return (
        <View>
            <FlatList
                data={data}
                renderItem = {
                    ({item})=>(
                        <ListItem 
                            title={item.title} 
                            onSelect={()=>{console.log(item.id);navigation.navigate('Element', {id:item.id})}} />
                    )
                }
                keyExtractor={item=>item.id}/>
        </View>
    )
}