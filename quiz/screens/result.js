import { Image,View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLinkProps } from '@react-navigation/native'

const Result = ({navigation,route}) => {
 const params=route.params
 const _score=params.score;
 const pass="pass";
 const fail="fail";
 const p='🥳';
 const f='😭';
 const victory='https://cdn-icons.flaticon.com/png/128/5021/premium/5021877.png?token=exp=1657714723~hmac=da6e863cf546a0a6e0671a964ee1be85';
const loss='https://cdn-icons-png.flaticon.com/128/3448/3448149.png'
 return (
    <View style={styles.container}>
    <View style={styles.bannerContainer}>
    <Image source={{uri:_score>50?victory:loss}}
  style={styles.banner}
  resizeMode="contain"
/>
<View>
  <Text style={styles.result}>{_score>50?pass:fail}{_score>50?p:f}</Text>
</View>
<View style={styles.score}>
      <Text style={styles.scrTxt}>{params.score}/100</Text>
    </View>
    </View>

    <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.containerBtn}>
      <Text style={styles.textHome}>GO TO HOME</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Result

const styles=StyleSheet.create({
  banner:{
    height: 300,
   width: 300
  },

  bannerContainer:{
    justifyContent:"center",
  alignItems:"center"

  },

  container:{
    padding: 20,
    paddingTop:40
  },
  containerBtn:{
   
    backgroundColor:"#2a9d8f",
    padding:20,
    borderRadius:40,
    alignItems:"center"
  },
  textHome:{
   fontSize:25,
  color: "#edf6f9"
  },
  score:{
    backgroundColor: '#00B8D4',
    width: 170,
    height: 170,
    borderColor: '#2a9d8f',
    borderWidth: 5,
    justifyContent: 'center',
    paddingHorizontal:30,
    borderRadius:100,
    marginTop:20,
    marginBottom:20
  },
  scrTxt:{
        fontSize:30
  },
  result:{
    fontSize:40,
    marginLeft:190,
    color:	'#800080'
  }
})