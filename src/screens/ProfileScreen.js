import { FlatList, Text } from "react-native";
import users from '../../assets/data/user.json'; 

const ProfileScreen = () => {

    return (
        <FlatList 
            data={users.posts}
            renderItem ={({item}) => <Text>{item.id}</Text>}
        />
    ); 
};

export default ProfileScreen;