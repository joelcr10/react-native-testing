import React from "react";
import {Text, View,FlatList} from 'react-native';
import PostItemComponent from "./PostItemComponent";
const feeds = [
    {
      id: '1', feedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_4qTecYyAS3Le7wSQWgrJoMCHMUVBhSn1B1JxQCBJ7NTeQKMF9IlopklR-24QLFRN00&usqp=CAU'
      , likeCount: '1000', title: 'Your Story', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg'
    },
    {
      id: '2', feedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOAbM2VsbmRfH4Tg-OyeD3S5NksaZR5ne_KaWnh1UCOrVStwlnQoOc5mOFppNvKC_I-w&usqp=CAU'
      , likeCount: '2200', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg'
    },
    {
      id: '3', feedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfV2kpHYP5tVGmqp-345N_uVlfHMhFvn3V1g&usqp=CAU'
      , likeCount: '550', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
    },
    {
      id: '6', feedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rEzB5BFKqhkxgnb5opU-zHcvelKkhditpQ&usqp=CAU'
      , likeCount: '4893', title: 'Changler Bing', imageUrl: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png'
    },
    {
      id: '4', feedImage: 'https://previews.123rf.com/images/studiostoks/studiostoks1801/studiostoks180100194/94512492-astronaut-breaks-the-wall-leadership-and-determination-pop-art-retro-comic-book-vector-cartoon.jpg'
      , likeCount: '12567', title: 'Monica Geller', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg'
    },
    {
      id: '5', feedImage: 'https://www.bigsmall.in/cdn/shop/articles/4435917.jpg?v=1604671099&width=1600'
      , likeCount: '8900', title: 'Ross', imageUrl: 'https://4.bp.blogspot.com/-hVxScDcELoQ/Uvdf5TYxjsI/AAAAAAAAKA4/6reUkSJpru4/s1600/gistfst.jpg'
    },
    {
      id: '7', feedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_4qTecYyAS3Le7wSQWgrJoMCHMUVBhSn1B1JxQCBJ7NTeQKMF9IlopklR-24QLFRN00&usqp=CAU'
      , likeCount: '4589', title: 'Rach', imageUrl: 'https://i.pinimg.com/736x/59/25/a4/5925a4faff25017e546391c8a8527d9b.jpg'
    },
 
    // Add more feeds here
  ];


const PostComponent = () =>{
    return(
        <View>
            <FlatList 
                data={feeds}
                keyExtractor={(item)=> item.id}
                renderItem={({item}) =>
                     <PostItemComponent 
                        id={item.id}
                        feedImage={item.feedImage}
                        title={item.title}
                        likeCount={item.likeCount}
                        imageUrl={item.imageUrl}
                    />}
            />
            
        </View>
    )
}

export default PostComponent;