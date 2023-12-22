import { FlatList, Text, StyleSheet, View, } from "react-native";

import users from '../../assets/data/user.json';

import HeaderImage from "../components/ProfileScreenComponents/1. HeaderImage";
import FeedPost from "../components/FeedPost";
import Buttons from "../components/ProfileScreenComponents/2. Buttons";
import UserInfo from "../components/ProfileScreenComponents/3. UserInfo"; 

const ProfileScreen = () => {

    return (
        <View style={styles.baseContainer}>
            {/* USER POSTS */}
            <FlatList 
                data={users.posts}
                renderItem ={({item}) => <FeedPost post={item} />}
                ListHeaderComponent={
                    <>
                        {/* HEADER & NAME */}
                        <HeaderImage users={users}/>

                        {/* BUTTONS */}
                        <Buttons />

                        {/* USER INFO */}
                        <UserInfo users = {users} />
                        <View style={styles.listHeader}>
                            <Text style={styles.headerText}>Posts</Text>
                        </View>
                    </>
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

listHeader: {
    backgroundColor: 'lightgrey',
    padding: 7,
    paddingRight: 10, 
},

headerText: {
    fontSize: 20,
    fontWeight: '600',
},

});

export default ProfileScreen;