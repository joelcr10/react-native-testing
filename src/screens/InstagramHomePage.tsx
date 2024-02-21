import React from "react";
import HeaderComponent from "../component/HeaderComponent";
import { SafeAreaView } from "react-native";
import StoryComponent from "../component/StoriesComponent";
import PostComponent from "../component/PostComponent";

const InstagramHomePage = () =>{
    return(
        <SafeAreaView>
            <HeaderComponent/>
            <StoryComponent />
            <PostComponent /> 
        </SafeAreaView>
    )
}


export default InstagramHomePage;