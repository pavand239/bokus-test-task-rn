import React, {useContext} from 'react';
import DataServiceContext from "../data-service-context";
import {
    View,
    FlatList
} from "react-native";
import ListItem from "../list-item";


export const ListScreen = ({navigation}) => {
    const {getItemList} = useContext(DataServiceContext);
    let data = getItemList();
    return (
        <View>
            <FlatList
                data={data}
                renderItem = {
                    ({item})=>(
                        <ListItem 
                            title={item.title} 
                            onSelect={()=>navigation.navigate('Element', {id:item.id})} />
                    )
                }
                keyExtractor={item=>item.id}/>
        </View>
    )
}