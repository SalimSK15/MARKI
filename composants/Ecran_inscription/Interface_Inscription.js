import { StyleSheet, Text, View } from 'react-native'
import Text_Input from '../../composants/Text_Input/Text_Input'
import { COLORS } from '../../outils/constantes'
import Btn from '../../composants/Button/Btn'

const Interface_Inscription = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_TextInput} >
        <Text_Input style={styles.style_Text_Input} text_label={"Nom"} text_placeholder={"Nom"} />
        <Text_Input style={styles.style_Text_Input} text_label={"Prénom"} text_placeholder={"Prénom"} />
        <Text_Input style={styles.style_Text_Input} text_label={"Année de naissance"} text_placeholder={"Ex : 1998"} />
        <Text_Input style={styles.style_Text_Input} text_label={"Email"} text_placeholder={"Email"} />
        <Text_Input style={styles.style_Text_Input} text_label={"Numéro de téléphone"} text_placeholder={"Numéro de téléphone"} />
        <Text_Input style={styles.style_Text_Input} text_label={"Créer un mot de passe"} text_placeholder={"*******"} />
        <Text_Input style={styles.style_Text_Input} text_label={"Confirmer le mot de passe"} text_placeholder={"*******"} />
      </View>
      <View style={styles.container_Btn} >
        <Btn style={styles.btnSinscrire} textBtn={"S'inscrire"} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.White,
  },
  container_TextInput:{
    width: "100%",
    marginBottom: 20
  },
  style_Text_Input:{
    height: 45,
    borderWidth: 1,
    paddingLeft: 15,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  btnSinscrire:{
    padding: 10,
    fontSize: 15,
    color: 'white',
    borderRadius: 8,
    textAlign: "center",
    backgroundColor: COLORS.VioletFonce,
  },
  container_Btn:{
    width: "100%"
  }
})

export default Interface_Inscription;