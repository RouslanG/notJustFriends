import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import LikeImage from '../../assets/images/like.png'; 

const FeedPost = ( { post } ) => {

  const navigation = useNavigation(); 

  const [isLiked, setIsLiked] = useState(false); 

  const viewProfile = () => {
    console.warn('View profile');
    navigation.navigate("Profile"); 
  }; 

  return (

    <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
            <Image 
            source={{ uri: post.User.image }} 
            style={styles.profileImage} 
            />
            <Pressable onPress={viewProfile} style={styles.name}>
              <Text>{post.User.name}</Text>
            </Pressable>
            <View>
              <Text style={styles.subtitle}>{post.createdAt}</Text>
            </View>
            <Entypo 
              name="dots-three-horizontal" 
              size={18} 
              color="gray" 
              style={styles.icon} 
            />    
        </View>

        {/* Body */}
        {post.description &&(<Text style={styles.description}>{post.description}</Text>
        )}
        
        {/* if url present render image, if not present do nothing */}
        {post.image && (<Image source={{ uri: post.image }} style={styles.image} />)}

        
        {/* Footer */}
        <View style={styles.footer}>
            
            {/* Stats row */}
            <View style={styles.statsRow}>
            <Image source={ LikeImage } style={styles.likeIcon}/>
            <Text style={styles.likedBy}>Elon Musk and {post.numberOfLikes} others</Text>
            <Text style={styles.shares}>
                {post.numberOfShares} shares
            </Text>
            </View>

            {/* Buttons row */}
            <View style={styles.buttonsRow}>

            {/* Like button */}
            <Pressable
              onPress={() => setIsLiked(!isLiked)} //<- onPress event toggles isLiked
              style={styles.iconButton}
            >
                <AntDesign
                  name="like2"
                  size={18}
                  color={isLiked ? "royalblue" : "gray"}
                />
                <Text
                  style={[
                    styles.iconButtonText,
                    { color: isLiked ? "royalblue" : "gray" },
                  ]}
                >
                  Like
                </Text>
            </Pressable>

            {/* Comment button */}
            <View style={styles.iconButton}>
                <FontAwesome5 name="comment-alt" size={16} color="gray" />
                <Text style={styles.iconButtonText}>Comment</Text>
            </View>

            {/* Share button */}
            <View style={styles.iconButton}>
                <MaterialCommunityIcons
                name="share-outline"
                size={18}
                color="gray"
                />
                <Text style={styles.iconButtonText}>Share</Text>
            </View>

          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  // HEADER
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10, 
  },
  name: {
    fontWeight: '600',
    marginRight: 5,
  },
  subtitle: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto', 
  },

  // BODY
  description: {
    paddingHorizontal: 10, 
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginTop: 10, 
  },

  //FOOTER
  footer: {
    paddingHorizontal: 10, 
  },
  statsRow: {
    paddingVertical: 10, 
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likedBy: {
    color: 'gray',
  },
  shares: {
    marginLeft: 'auto', 
    color: 'gray',
  },

  // Buttons Row
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    color: "gray",
    marginLeft: 5,
    fontWeight: "500",
    },
});

export default FeedPost; 
