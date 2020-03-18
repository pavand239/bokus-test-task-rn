import React from 'react';
import { Text, TouchableOpacity} from 'react-native';

export const ListItem = ({textStyle={}, containerStyle={}, title, onSelect}) => (
    <TouchableOpacity 
        onPress={()=>onSelect()}
        style={containerStyle}>
        <Text 
            style={textStyle}>
            {title}
        </Text>
    </TouchableOpacity>
)
