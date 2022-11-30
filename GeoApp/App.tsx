import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur massa a sapien congue, 
        sit amet viverra arcu maximus. In finibus justo neque, sit amet tristique enim ullamcorper id. 
        Suspendisse at aliquet mi. Nam neque magna, sagittis vitae mauris ac, rhoncus volutpat metus. 
        Integer aliquam maximus ex et ultrices. Vestibulum hendrerit rutrum risus, placerat tempor risus. 
        Donec elementum nisl iaculis nulla tincidunt molestie. Proin ut orci a ligula semper vulputate quis
         nec erat. Nam ut augue dignissim, pellentesque arcu ut, vestibulum purus. Curabitur sed varius enim. 
         Sed ante ipsum, venenatis at odio a, interdum venenatis metus. Sed iaculis placerat neque, et 
         molestie neque pulvinar ut. Nullam rutrum velit eget ex dictum mollis. Aenean feugiat fermentum semper.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
