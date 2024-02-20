import React from "react";
import { View,Text,Image, StyleSheet } from "react-native";


const StoryItemComponent = (props: any) =>{
    const {story_text, story_profile} = props;
   
    return(
        <View style={styles.storyContainer}>
            <Image 
                style={styles.storyImage}
                source={{
                    uri: `${story_profile}`
                }}
            />
            <Text style={styles.storyUser} >{story_text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    storyImage:{
        height: 70,
        width: 70,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'red'
    },

    storyContainer:{
        width: 70,
        margin: 5,
        alignItems: 'center'
    },

    storyUser:{
        textAlign: 'center'
    }
})


export default StoryItemComponent;
