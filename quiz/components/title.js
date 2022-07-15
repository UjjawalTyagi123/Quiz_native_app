import { View, Text,StyleSheet, SnapshotViewIOS, SnapshotViewIOSBase } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
      <Text style={styles.title}>Quizzer</Text>
    </View>
  )
}

export default Title

const styles=StyleSheet.create({
   title: {
    fontSize:30,
    fontWeight:"20",
    marginLeft:100
    },
});