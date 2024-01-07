import { Text, StyleSheet, View, Pressable } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';  

import { useNavigation } from "@react-navigation/native";
import { Auth } from 'aws-amplify'; 
 
const Buttons = ( ) => {

    const navigation = useNavigation();

    const editProfile = () => {
        navigation.navigate('EditProfile');
    };

    const signOut = () => {Auth.signOut()}; 

    return (
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
            
            <Pressable style={styles.logOutButton} onPress={signOut}>
                <Feather name="log-out" size={16} color="black" />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
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
            paddingLeft: 20,
            paddingRight: 25,
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
            paddingLeft: 20,
            paddingRight: 25,
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
    
    });
    
    export default Buttons;