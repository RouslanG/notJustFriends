import { FlatList, Text, StyleSheet, View, Image, Pressable } from "react-native";

import { useState } from 'react';

import { useNavigation } from "@react-navigation/native";


import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';  
import { AntDesign } from '@expo/vector-icons';

import users from '../../assets/data/user.json'; 
import FeedPost from "../components/FeedPost";

const ProfileScreen = () => {
    const [graduation, setGradution] = useState(users.education);
    const [joined, setJoined] = useState(users.joinDate);
    const [location, setLocation] = useState(users.location);

    const navigation = useNavigation();

    const editProfile = () => {
        navigation.navigate('EditProfile');
    };

    return (
        <View style={styles.baseContainer}>
            {/* HEADER IMAGE */}
            <View style={styles.headerImageContainer}>
                <Image
                    source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',}}
                    style={styles.image}
                /> 
            </View>
            
            {/* PROFILE IMAGE */}
            <View style={styles.profileImage}>
                <Image
                    source={{ uri: users.image, }}
                    style={{width: 180, height: 180, borderRadius: 90, marginTop: -190 }}
                />
            </View>

            <View style={{alignItems: 'center', paddingTop: 2, paddingBottom: 6, }}>
                <Text style={{fontSize: 20, fontWeight: '600'}}>{users.name}</Text>
            </View>

            {/* BUTTONS */}
            <View style={styles.buttonContainer}>
                <View style={styles.addStoryButton}>
                    <View style={styles.addIconContainer}>
                        <Entypo name="plus" size={16} color="#316FF6" />
                    </View>
                    <Text style={styles.addIconText}>Add to Story</Text>
                </View>

                <Pressable style={styles.editProfileButton} onPress={editProfile}>
                    <MaterialIcons name="mode-edit" size={17} color="black" />
                    <Text style={styles.editProfileText}>Edit Profile</Text>    
                </Pressable>
                
                <View style={styles.logOutButton}>
                    <Feather name="log-out" size={16} color="black" />
                </View>
            </View>

            {/* USER INFO */}
            <View style={styles.userInfoContainer}>
                
                {/* graduation */}
                <View style={styles.graduationIconContainer}>
                    <Entypo name="graduation-cap" size={16} color="gray" />
                    <View style={styles.graduationTextContainer}>
                        <TextInput style={styles.graduationText}>Graduated {users.education}</TextInput>
                    </View>
                </View>

                {/* clock */}
                <View style={styles.clockIconContainer}>
                    <AntDesign name="clockcircle" size={16} color="gray" />
                    <View style={styles.clockTextContainer}>
                        <Text style={styles.clockText}>Joined on {users.joinDate}</Text>
                    </View>
                </View>

                {/* location */}
                <View style={styles.locationIconContainer}>
                    <Entypo name="location-pin" size={16} color="gray" />
                    <View style={styles.locationTextContainer}>
                        <Text style={styles.locationText}>From {users.location}</Text>
                    </View>
                </View>
                
            </View>

            {/* USER POSTS */}
            <FlatList 
                data={users.posts}
                renderItem ={({item}) => <FeedPost post={item} />}
                ListHeaderComponent={
                <View style={styles.listHeader}>
                    <Text style={styles.headerText} >Posts</Text>
                </View>
                }
            />
        </View>
    ); 
};

const styles = StyleSheet.create({

baseContainer: {
    marginRight: 3,
    marginLeft: 3,
    backgroundColor: 'white',
},

// Header 
    headerImageContainer: {
        height: 300, 
    },
    image: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '65%',
        marginTop: 6,
      },
    profileImage: {  
      alignItems: 'center',
    }, 
    listHeader: {
        backgroundColor: 'lightgrey',
        padding: 7,
        paddingRight: 10, 
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
    },

// Buttons
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12, 
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 5  
    },

    // add button 
    addStoryButton: {
        backgroundColor: '#316FF6',
        flexDirection: 'row',
        alignItems: 'center', 
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 23,
        paddingRight: 28,
        borderRadius: 5,
    },
    addIconContainer: {
        width: 15,
        height: 15, 
        backgroundColor: 'white', 
        borderRadius: 7.5,
        alignItems: 'center', 
    }, 
    addIconText: {
        fontSize: 14, 
        fontWeight: '600',
        color: 'white', 
        marginLeft: 5,
    }, 

    // editButton 
    editProfileButton: {
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 23,
        paddingRight: 28,
        borderRadius: 5,
        alignItems: 'center', 
    },
    editIconContainer: {
        width: 15,
        height: 15, 
        backgroundColor: 'white', 
        borderRadius: 7.5,
        alignItems: 'center', 
    }, 
    editProfileText: {
        fontSize: 14, 
        fontWeight: '600',
        color: 'black', 
        marginLeft: 5,
    }, 

    // logOutButton
    logOutButton: {
        backgroundColor: 'lightgrey',
        alignItems: 'center', 
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },

// User info 
    userInfoContainer: {
        marginLeft: 7,
    },
    // graduation 
    graduationIconContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
    },

    graduationTextContainer: {
        marginLeft: 10,
    },

    graduationText: {
        fontWeight: '500',
        fontSize: 14,
    },

    // clock 
    clockIconContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
    },

    clockTextContainer: {
        marginLeft: 10,
    },

    clockText: {
        fontWeight: '500',
        fontSize: 14,
    },

    // location 
    locationIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
    },

    locationTextContainer: {
        marginLeft: 10,
    },

    clockText: {
        fontWeight: '500',
        fontSize: 14,
    },

});

export default ProfileScreen;