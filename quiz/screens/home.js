import {Image, View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import Title from "../components/title"
const Home = ({navigation}) => {
  return (
<View style={styles.container}>
<Title/>
<View style={styles.bannerContainer}>
<Image source={{uri:'https://cdn4.iconfinder.com/data/icons/education-4-21/66/160-128.png'}}
  style={styles.banner}
  resizeMode="contain"
/>
</View>

<TouchableOpacity style={styles.containerBtn} onPress={()=>navigation.navigate("Quiz")}>
<Text style={styles.textStart}>Start </Text>
</TouchableOpacity>

</View>


  )
}

export default Home

const styles=StyleSheet.create({
  container:{
        padding:40,
        paddingTop: 40,
    paddingHorizontal: 16,
    height:"100%"
  },

  banner:{
    height: 300,
   width: 300
  },

  bannerContainer:{
    justifyContent:"center",
  alignItems:"center",
  flex: 1
  },

  containerBtn:{
   
    backgroundColor:"#2a9d8f",
    padding:20,
    borderRadius:40,
    alignItems:"center"
  },
  textStart:{
   fontSize:25,
  color: "#edf6f9"
  }
  
})