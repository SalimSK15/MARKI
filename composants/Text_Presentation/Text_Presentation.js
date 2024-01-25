import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../outils/constantes'

const Text_Presentation = () => {
  return (
    <View style={styles.divDescription}>
      
        <Text style={styles.text_h1}> 
          <Text style={styles.TextBold}>Bienvenue sur MARKI</Text> 
        </Text>

        <Text style={styles.text_02}>Inscrivez-vous chez le médecin, c'est aussi simple que ça ! </Text>

        <Text style={styles.text_03}><Text style={styles.TextBold}> Pourquoi Utiliser MARKI ? </Text></Text>

        <View style={styles.text_04}>

          <Text style={styles.text_04_1}> 
            <Text style={styles.TextBold}> 1. Rapidité :</Text> S'inscrire en quelque clics. 
          </Text>

          <Text style={styles.text_04_1}> 
            <Text style={styles.TextBold}> 2. Facilité :</Text> Cherchez par Spécialité, par nom et par localisation. 
          </Text>

          <Text style={styles.text_04_1}> 
            <Text style={styles.TextBold}> 3. Rappels :</Text> Suivre votre tour en temps réel. 
          </Text>

        </View>
          
      </View>
  )
}

export default Text_Presentation

const styles = StyleSheet.create({
    divDescription:{
        flex: 1,
        flexDirection: "column",
        // backgroundColor: "yellow",
        marginBottom: 30,
        marginTop: 30,
      },
      text_h1:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      text_02:{
        fontSize: 18,
        marginBottom: 20,
        color: COLORS.grise
      },
      text_03:{
        fontSize: 18,
        marginBottom: 12
      },
      text_04:{
        flexDirection: "column",
        fontSize: 16,
      },
      text_04_1:{
        fontSize: 16,
        marginBottom: 3,
        color: COLORS.balck_Rgba_Op_08
      },
      TextBold:{
        fontWeight: 'bold',
        color: COLORS.Black
      },
})