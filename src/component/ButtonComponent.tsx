import React, { useState } from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';


const ButtonComponent = () =>{
    const [count, setCount] = useState<number>(0);

    const onPress = () =>{
        setCount(prevCount => prevCount+1);
        console.log("clicked: ",count); 
    }

    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
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

