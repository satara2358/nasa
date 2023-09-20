import React, { FC } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

import { PostImage } from '../../types'

const ImagenDia: FC<PostImage> = ({date, title, url}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>    
      <Text style={styles.date}> {date}</Text>
      <View style={styles.boton}>
        <Button 
          title='View'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#2c449d',
    marginVertical:16,
    marginHorizontal: 24,
    borderRadius  : 32,
    padding: 16,
  },
  image: {
    width: '100%',
    height:190,
    borderWidth:2,
    borderColor: '#fff',
    borderRadius: 32,
  },
  title:{
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold'
  },
  date:{
    color: '#fff',
    fontSize:16,
  },
  boton:{
    alignItems: 'flex-end',
  }

})

export default ImagenDia