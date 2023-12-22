import { Text, StyleSheet, View, SafeAreaView, Button, TextInput, KeyboardAvoidingView } from "react-native";

import { Entypo } from '@expo/vector-icons';  
import { AntDesign } from '@expo/vector-icons';

import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

const EditUserInfo = ({ users }) => {
    const education = users.education;
    const currentLocation = users.location;
    const [graduation, setGraduation] = useState(education);
    const [location, setLocation] = useState(currentLocation);

    const navigation = useNavigation(); 

    const onSubmit = () => {
        console.warn('Posting: ', graduation);
        console.warn('Posting; ', location); 
        setGraduation ('');
        setLocation('');  

        navigation.goBack(); 
    };
    
    return (
    <KeyboardAvoidingView style={styles.userInfoContainer}>
                
        {/* graduation */}
        <View style={styles.graduationIconContainer}>
            <Entypo name="graduation-cap" size={16} color="gray" />
            <View style={styles.graduationTextContainer}>
                <TextInput 
                    value= {graduation} 
                    onChangeText={setGraduation}
                    placeholder="Where have you studied?" 
                    style={styles.textInput} />
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
                <TextInput 
                        value= {location} 
                        onChangeText={setLocation}
                        placeholder="Where are you located?" 
                        style={styles.textInput} />
            </View>
        </View>

        {/* button */}
        <View style={styles.buttonContainer}>
            <Button title="Save" onPress={onSubmit} />   
        </View>
        
    </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({    
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

        // button 
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'black',
          },
          text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
    
    });
    
export default EditUserInfo;