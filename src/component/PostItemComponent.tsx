import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native';

type propsType = {id: string, feedImage: string, likeCount: string, title: string, imageUrl: string};
const PostItemComponent = (props: propsType) =>{
    const{id, feedImage, likeCount, title, imageUrl} = props;

    return(
        <View style={styles.postContainer}>
            <View style={styles.profileContainer}>
                <Image 
                    style={styles.profile}
                    source={{
                        uri: `${imageUrl}`
                    }}
                />
                <Text style={styles.profileText}>{title}</Text>
            </View>
            <View>
                <Image 
                    style = {styles.postImage}
                    source={{
                        uri: `${feedImage}`,
                    }}
                />
            </View>
            <View style={styles.engagementContainer}>
            <Image
                style={styles.engagement}
                source={require('../assets/heart.png')}
            />
            <Image
                style={styles.engagement}
                source={require('../assets/chat.png')}
            />
            <Image
                style={styles.engagement}
                source={require('../assets/share.png')}
            />
            </View>
            <View>
                <Text style={styles.likes}>{likeCount} Likes</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    engagement: {
        height: 30,
        width: 30,
    },

    profile:{
        height: 40,
        width: 40,
        borderRadius: 50,
    },

    postImage: {
        height: 400,
        // width: 200
    },

    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        margin: 10
    },

    profileText:{
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 17,

    },

    engagementContainer:{
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        // backgroundColor: 'red',
        width: 150,
        justifyContent: 'space-between'
    },

    postContainer:{
        marginBottom: 20,
    },

    likes:{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        color: 'black'
    }

})

export default PostItemComponent;