import { StyleSheet, View, Image } from "react-native";
import { useState } from 'react'; 
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const AddImage = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.addImage} >
      <Entypo
        onPress={pickImage}
        name="images"
        size={28}
        color="limegreen"
        style={styles.icon}
      />
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
}; 

const styles = StyleSheet.create({
  addImage: {
    borderWidth: 5, 
    marginTop: 1,
    backgroundColor: 'blue', 
  },
  icon: {
    marginLeft: 'auto',
  },
  image: {
	  width: "100%",
	  aspectRatio: 1 / 1,
	},
}); 

export default AddImage; 