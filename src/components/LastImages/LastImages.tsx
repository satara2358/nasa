import React, { FC } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { PostImage } from '../../types'
import PostImagess from '../PostImagess'


const LastImages: FC<{postImages?: PostImage[] }> = ({postImages}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ultimos 5 dias</Text>
      <ScrollView style={styles.content}>
        {postImages?.map(postImage => (
          <PostImagess key={`post-image-${postImage.title}`} {...postImage}/>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginVertical: 8
  },
  content: {
    paddingHorizontal: 24,
  },
  title:{
    color: '#fff',
    fontSize: 16,
    marginBottom: 18
  }
})

export default LastImages