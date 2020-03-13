import React, {Component} from 'react';
import { View, Text, StyleSheet  } from 'react-native';


export class Header extends Component {
    render() {
        let {headerText, username} = this.props;
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{headerText}</Text>
                {username?
                    <View>
                        <Text style={styles.headerText} >
                            {username}
                        </Text>
                    </View>
                    :null
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'red',
        alignItems:'flex-end',
    },
    headerText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        marginHorizontal:10,
        marginVertical:15
    }
})


