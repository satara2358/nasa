import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PostImage } from '../../types'


const LastImages: FC<PostImage[]> = (postImage) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimos 5 dias</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  title:{

  }
})

export default LastImages