import { FlatList, Text, StyleSheet, View, Button } from "react-native";
import users from '../../assets/data/user.json'; 

const ProfileScreen = () => {

    return (
        <View>
            <View style={styles.buttonContainer}>
                <View style={styles.addStoryButton}>
                    <Text>Add to Story</Text>
                </View>

                <View style={styles.editProfileButton}>
                    <Text>Edit Profile</Text>    
                </View>
                
                <View style={styles.logOutButton}>
                    
                </View>
            </View>

            <View style={styles.userInfoContainer}>
                <Text style={styles.education}>Graduated {users.education}</Text>
                <Text style={styles.joinDate}>Joined on {users.joinDate}</Text>
                <Text style={styles.location}>From {users.location}</Text>
            </View>
            <FlatList 
                data={users.posts}
                renderItem ={({item}) => <Text>{item.id}</Text>}
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
    listHeader: {
        backgroundColor: 'lightgrey',
        padding: 7,
        paddingRight: 10, 
    },
    headerText: {
        fontSize: 20,
    }
});

export default ProfileScreen;