import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation/index.js';
import Home from "./screens/home.js"
import Quiz from './screens/quiz.js';
import Result from './screens/result.js';

export default function App() {
  return (
    // <View style={styles.container}>
     
     <NavigationContainer>
      <MyStack/>
     </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 40,
    paddingHorizontal:16
  }
});
