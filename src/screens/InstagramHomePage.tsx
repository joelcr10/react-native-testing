import React from "react";
import HeaderComponent from "../component/HeaderComponent";
import { SafeAreaView } from "react-native";
import StoryComponent from "../component/StoriesComponent";

const InstagramHomePage = () =>{
    return(
        <SafeAreaView>
            <HeaderComponent/>
            <StoryComponent />
        </SafeAreaView>
    )
}


export default InstagramHomePage;