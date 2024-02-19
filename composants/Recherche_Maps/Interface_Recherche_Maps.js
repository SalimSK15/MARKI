import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../outils/constantes'

const Interface_Recherche_Maps = () => {
  return (
    <View style={styles.container}>
      <Text>Interface_Recherche_Maps en cours de developpenemt </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        height: "70%",
        width: "100%",
        alignItems: "center",
        backgroundColor: COLORS.grise,
        justifyContent: "center",
    }
})

export default Interface_Recherche_Maps;