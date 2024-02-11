import Btn from '../Button/Btn'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../../outils/constantes'
import Text_Input from '../Text_Input/Text_Input'

const Connexion = (props) => {

  const handlePressConnexion = () =>{
    props.navigation.navigate('Home');
  }
  const handlePressInscription = () =>{
    props.navigation.navigate('Inscription');
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.divContainer}>
          <Text_Input style={styles.style_Text_Input} text_label={"Email"} text_placeholder={"Exemple@exemple.com"}/>
          <Text_Input style={styles.style_Text_Input} text_label={"Password"} text_placeholder={""}/>
          <Btn textBtn={"Se Connecter"} style={styles.btnSeConnecter} fonction={handlePressConnexion} />
          <View style={styles.divBtn}>
            <Btn textBtn={"Mot de passe oublié"} style={styles.btnMotDePass} />
            <Btn textBtn={"S'inscrire"} style={styles.btnSinscrire} fonction={handlePressInscription}/>
          </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  divContainer:{
    padding: 10,
    width: "100%",
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
  divBtn:{
    marginBottom: 35,
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnSeConnecter:{
    marginTop: 50,
    padding: 10,
    fontSize: 20,
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: COLORS.VioletFonce,
  },
  btnMotDePass:{
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    color: COLORS.BleuSarcelle,
    borderBottomColor: COLORS.BleuSarcelle,
  },
  btnSinscrire:{
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    color: COLORS.BleuSarcelle,
    borderBottomColor: COLORS.BleuSarcelle,
  },
})
export default Connexion;