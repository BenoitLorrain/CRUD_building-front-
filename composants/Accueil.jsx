import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Accueil = () => {

  return (
    <View style={styles.box}>
      <View>
        <Text>Liste de bâtiments :</Text>
      </View>
      
    </View>
  )
}

export default Accueil

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titre : {
        fontSize:30,
    }
})