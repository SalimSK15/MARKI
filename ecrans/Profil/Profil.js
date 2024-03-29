import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { COLORS } from '../../outils/constantes'

import Btn from '../../composants/Button/Btn'

import Text_Input from '../../composants/Text_Input/Text_Input'

const Profil = () => {
  return (
    <View style={styles.containerProfil}>
      <View style={styles.photo_profil}>
          <Image source={require("../../assets/images/photo_Profil_vide_x2.png")} />
      </View>
      <Btn style={styles.btnSeConnecter} textBtn={"Modifier la photo de profil"} />
      <ScrollView >
        <Text_Input style={styles.style_Text_Input} text_label={"Nom"} text_placeholder={"Nom"} />
        <Text_Input style={styles.style_Text_Input} text_label={"Prénom"} text_placeholder={"Prénom"} />
        <Text_Input style={styles.style_Text_Input} text_label={"Année de naissance"} text_placeholder={"Année de naissance"} />
        <Text_Input style={styles.style_Text_Input} text_label={"Email"} text_placeholder={"Ex : nom@gmail.com"} />
        <Text_Input style={styles.style_Text_Input} text_label={"Numéro de téléphone"} text_placeholder={"Ex : 05 51 12 3x xx"} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  containerProfil:{
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.White,
  },
  photo_profil:{
    borderWidth: 2,
    width: "55%",
    height: 200,  
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  btnSeConnecter:{
    width: "55%",
    padding: 10,
    fontSize: 15,
    color: 'white',
    borderRadius: 8,
    textAlign: "center",
    backgroundColor: COLORS.VioletFonce,
  },
  style_Text_Input:{
    height: 40,
    borderWidth: 1,
    paddingLeft: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  }
})

export default Profil;