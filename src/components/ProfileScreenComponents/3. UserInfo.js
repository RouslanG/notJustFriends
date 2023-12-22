import { Text, StyleSheet, View,  } from "react-native";

import { Entypo } from '@expo/vector-icons';  
import { AntDesign } from '@expo/vector-icons';

const UserInfo = ( {users }) => {
    return (
    <View style={styles.userInfoContainer}>
                
        {/* graduation */}
        <View style={styles.graduationIconContainer}>
            <Entypo name="graduation-cap" size={16} color="gray" />
            <View style={styles.graduationTextContainer}>
                <Text style={styles.graduationText}>Graduated {users.education}</Text>
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
    
    });
    
export default UserInfo;