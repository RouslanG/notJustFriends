import { Text, StyleSheet, View, Image } from "react-native";

const HeaderImage = ( {users} ) => {
    return (
        <View>
            
            {/* HEADER IMAGE */}
            <View style={styles.headerImageContainer}>
                <Image
                    source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',}}
                    style={styles.image}
                /> 
            </View>

            {/* PROFILE IMAGE */}
            <View style={styles.profileImageContainer}>
                <Image
                    source={{ uri: users.image, }}
                    style={{width: 180, height: 180, borderRadius: 90, marginTop: -190 }}
                />
            </View>

            {/* USER NAME */}
            <View style={{alignItems: 'center', paddingTop: 2, paddingBottom: 6, }}>
                <Text style={{fontSize: 20, fontWeight: '600'}}>{users.name}</Text>
            </View>
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
        profileImageContainer: {  
          alignItems: 'center',
        }, 
    
    });

export default HeaderImage;