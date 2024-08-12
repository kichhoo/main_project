import { View, Text } from 'react-native'
import React from 'react'

export const ProductsTitle = ({title}) => {
  return (
    <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
    }}>
      <Text style={{fontSize:20, fontWeight:"700"}}>{title}</Text>
      <Text style={{fontSize:16, color:"#5fc342"}}>See All</Text>
    </View>
  )
}

export default ProductsTitle