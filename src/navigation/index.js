import FeedScreen from "../screens/FeedScreen"; 
import CreatePostScreen from "../screens/CreatePostScreen"; 
import ProfileScreen from "../screens/ProfileScreen"; 
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator(); 

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={FeedScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />   
                <Stack.Screen name="Create post" component={CreatePostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}; 

export default Navigator; 