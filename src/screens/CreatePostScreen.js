import { Text, StyleSheet, View, Image, TextInput, Button, KeyboardAvoidingView, Platform } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from 'react';
import AddImage from "../components/AddImage";
import { useNavigation } from "@react-navigation/native";

const user = {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Deni Gabissov",
  };

const CreatePostScreen = () => {
    const [description, setDescription] = useState('');
    const navigation = useNavigation(); 
    
    // const insets = useSafeAreaInsets();

    const onSubmit = () => {
        console.warn('Posting: ', description); 
        setDescription (''); 

        navigation.goBack(); 
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.container, { marginBottom: 10 }]}
            contentContainerStyle={{ flex: 1 }}
            keyboardVerticalOffset={150}
        >
            <View style={styles.header}>
                <Image source={{ uri: user.image}} style={styles.image}/>
                <Text style={styles.name}>{user.name}</Text>
            </View>

            <TextInput 
                value= {description} 
                onChangeText={setDescription}
                placeholder="What is on your mind?" 
                multiline
                style={styles.textInput} />
            
            <AddImage />

            <View style={styles.buttonContainer}>
                <Button title="Post" onPress={onSubmit} />   
            </View>


            
        </KeyboardAvoidingView>
    );
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%',
        padding: 10, 
        paddingTop: 30, 
        borderWidth: 10,   
    }, 

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderWidth: 5,
        marginBottom: 10,  
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 30, 
        marginRight: 10, 
        borderWidth: 1, 
    },
    name: {
        fontWeight: '500', 
        borderWidth: 5, 
    },
    buttonContainer: {
        marginTop: "auto", 
        borderWidth: 5, 
    },
    textInput: {
        borderWidth: 5, 
    }

}); 

export default CreatePostScreen; 