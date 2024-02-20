import React from "react";
import {Text, View, Image, StyleSheet} from "react-native";


const HeaderComponent = () =>{
    return(
        <View style={styles.container}>
             <Image
                style={styles.headerImage}
                source={require('../assets/camera.png')}
            />

            <Text style={styles.headerText}>Instagram</Text>

            <Image
                style={styles.headerImage}
                source={require('../assets/send.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    headerImage:{
        height: 30,
        width: 30,
    },

    headerText: {
        fontSize: 25,
    }

})


export default HeaderComponent;