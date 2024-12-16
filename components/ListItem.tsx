import React from 'react'
import { Text, View } from 'react-native'

const ListItem = (props: { title: string, navigation: any }) => {
  return (
    <View style={{ width: '100%', padding: 10, backgroundColor: 'white', marginVertical: 5 }}>
      <Text>{props.title}</Text>
    </View>
  )
}

export default ListItem