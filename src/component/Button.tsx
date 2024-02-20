import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';


const ButtonComponent = () =>{
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                 <Text style={{color: 'white'}}>Press Here</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: 'blue',
      padding: 10,
      marginTop: 10,
      color: 'white',
    },
 
});

export default ButtonComponent;

