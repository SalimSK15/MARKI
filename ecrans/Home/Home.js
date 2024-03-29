import { Feather } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native'
import { COLORS } from '../../outils/constantes'
import { SafeAreaView } from 'react-native-safe-area-context'

import Btn from '../../composants/Button/Btn';
import Text_h1 from '../../composants/Text_H1/Text_h1';
import Logo_MARKI from '../../composants/Logo/Logo_MARKI';
import Input_Recherche from '../../composants/InputRecherche/Input_Recherche';
import Ecran_Connecte from '../../composants/Ecran_HomeConnecte/Ecran_Connecte';
import Text_Presentation from '../../composants/Text_Presentation/Text_Presentation';

const Home = ({route, navigation}) => {

  const compteActife = route.params;
  
  const handlePressInscription = () =>{
    navigation.navigate('Inscription');
  }
  const handlePressConnexion = () =>{
    navigation.navigate('Connexion');
  }
  const handleRecherche = () =>{
    navigation.navigate('Recherche');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      
      {
        !compteActife && (
          <View>
            {/* logo et nom de lapplication  */}
            <Logo_MARKI margin_Btm_Rgt={styles.margin_Right_Logo} style={styles.logo_Marki} />
          </View>
        )
      }

      {/* le titre recherche medecin */}
      <Text_h1 /> 

      {/* bar de recherche & button loup filtrage */}
      <Input_Recherche 
        handleClickFonction={handleRecherche}
        styleInputRecherche_Width={styles.styleInputRecherche_Width} 
        styleIconRecherche={styles.styleIconRecherche}
        icon={<Feather name="search" size={32} color={COLORS.White}/>}
      />
      {/* affichage de lecran si compte est actif */}
      {compteActife && <Ecran_Connecte />}

      {/* text de presentation */}
      {!compteActife && <Text_Presentation />}

      {
        !compteActife && (
          <View>
            <View style={styles.divBtn}>
              <Btn textBtn={"S'inscrire"} style={styles.btnSinscrire} fonction={handlePressInscription}/>
              <Btn textBtn={"Se Connecter"} style={styles.btnSeConnecter} fonction={handlePressConnexion}/>
            </View>
          </View>
        ) 
      }

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.White
  },
  logo_Marki:{
    margin: 10,
    flexDirection: "row",
  },
  margin_Right_Logo:{
    marginRight: 10
  },
  styleInputRecherche_Width: {
    width: 300
  },
  styleIconRecherche:{
    width: 50,
  },
  divBtn:{
    marginBottom: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSinscrire:{
    fontSize: 15,
    marginRight: 100,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    color: COLORS.BleuSarcelle,
    borderBottomColor: COLORS.BleuSarcelle,
  },
  btnSeConnecter:{
    padding: 10,
    fontSize: 15,
    color: 'white',
    paddingLeft: 20,
    borderRadius: 10,
    paddingRight: 20,
    textAlign: "center",
    backgroundColor: COLORS.VioletFonce,
  }
})

export default Home;