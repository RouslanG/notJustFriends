import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/navigation';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports'; 
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {

  // To see what data is provided for auth -> Auth.currentAuthenticatedUser().then((data) => console.log(data)); 

  return (
     
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default withAuthenticator(App); 
