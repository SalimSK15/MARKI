import { View, Text, TextInput,StyleSheet, Button,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../outils/constantes'

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Home = () => {

  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* logo et num de lapplication  */}
      <View>
        <Text> Marki </Text>
        <FontAwesome name="heartbeat" size={30} color="black" />
      </View>

      {/* le titre recherche medecin */}
      <View style={styles.divTitreRecherche}>
        <Text style={styles.titreRecherche}>Recherchez un médecin</Text>
      </View>

      {/* bar de recherche & button loup filtrage */}
      <View style={styles.divIconRecherche}>
        <TextInput style={styles.inputRecherche}
          placeholder='Recherche ...' 
          value={searchText}
        />
        <View style={styles.IconRecherche}>
          <Feather name="search" size={24} color={COLORS.White}/>
        </View>
      </View>


      {/* text de presentation */}
      <View style={styles.divDescription}>
      
        <Text style={styles.TextBold}> Bienvenue sur MARKI </Text>

        <Text> Inscrivez-vous chez le médecin, c'est aussi simple que ça ! </Text>

        <Text><Text style={styles.TextBold}> Pourquoi Utiliser MARKI ? </Text></Text>

        <Text> <Text style={styles.TextBold}> 1. Rapidite:</Text> Rendez_vous en quelques clics. </Text>
        <Text> <Text style={styles.TextBold}> 2. Facilite:</Text> Cherchez par specialite et localisation. </Text>
        <Text> <Text style={styles.TextBold}> 3. Rappels :</Text> Ne ratez plus jamais un Rendez_vous. </Text>
          
      </View>

      <View style={styles.divBtn}>
        <TouchableOpacity style={styles.divSinscrire}><Text style={styles.btnSinscrire}>S'inscrire</Text></TouchableOpacity>
        <TouchableOpacity style={styles.divSeConnecter}><Text style={styles.btnSeConnecter}>Se Connecter</Text></TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
  },
  divTitreRecherche:{
    marginTop: 60,
    marginBottom: 20,
  },
  titreRecherche:{
    fontSize: 40,
    textAlign: 'center',
    color: COLORS.VioletFonce,
    fontWeight: 'bold'
  },
  divIconRecherche:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputRecherche:{
    flex: 1,
    height: 50,
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  IconRecherche:{
    width: 50,
    height: 50,
    backgroundColor: COLORS.VioletFonce,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 8,
  },
  divDescription:{
    flexDirection: "column"
  },
  TextBold:{
    fontWeight: 'bold',
  },
  divBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnSinscrire:{
    fontSize: 15,
    marginRight: 100,
    color: COLORS.BleuSarcelle,
    fontWeight: 'bold',
    borderBottomColor: COLORS.BleuSarcelle,
    borderBottomWidth: 1,
  },
  btnSeConnecter:{
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    color: 'white',
    borderRadius: 10,
    backgroundColor: COLORS.VioletFonce,
    fontSize: 15,
  }
})

export default Home