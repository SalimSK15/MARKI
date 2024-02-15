import { StyleSheet, Text, View } from 'react-native'
import Btn from '../Button/Btn';
import { COLORS } from '../../outils/constantes';
import Text_Input from '../../composants/Text_Input/Text_Input'
import { useState } from 'react';

const Interface_Confirmation = ({navigation}) => {

  const [compteActife, setCompteActife] = useState(false);

  const handlePressConfirmation = () =>{
    setCompteActife(true)
    navigation.navigate('Home',{compteActife});
  }

  return (
    <View style={styles.container}>
      <View style={styles.sousContenue}>
        <Text style={styles.contenuText}>Saisissez le code envoyer à votre téléphone</Text>
        <Text_Input style={styles.style_Text_Input} text_placeholder={"*******"} />
        <Btn textBtn={"Confirmer"} style={styles.btnConfirmer} fonction={handlePressConfirmation}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.White,
  },
  sousContenue:{
    marginTop: "30%"
  },
  contenuText:{
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    // marginTop: -10
  },
  style_Text_Input:{
    height: 45,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 20,
  },
  btnConfirmer:{
    marginTop: 50,
    padding: 10,
    fontSize: 20,
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: COLORS.VioletFonce,
  }
})

export default Interface_Confirmation;