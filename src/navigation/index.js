import FeedScreen from "../screens/FeedScreen"; 
import CreatePostScreen from "../screens/CreatePostScreen"; 
import ProfileScreen from "../screens/ProfileScreen"; 
import EditProfileScreen from "../screens/EditProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

import { FontAwesome } from '@expo/vector-icons';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); 

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                name="Feed"
                component={FeedScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                    <FontAwesome
                        onPress={() => navigation.navigate("Profile")}
                        name="user"
                        size={24}
                        color="gray"
                    />
                    ),
                })}
                />
            <Stack.Screen name="Profile" component={ProfileScreen} /> 
            <Stack.Screen name="EditProfile" component={EditProfileScreen} /> 
            <Stack.Screen name="Create post" component={CreatePostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}; 

export default Navigator; 