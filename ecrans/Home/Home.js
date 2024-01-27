import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../outils/constantes'

import { Feather } from '@expo/vector-icons';

import Logo_MARKI from '../../composants/Logo/Logo_MARKI';
import Text_h1 from '../../composants/Text_H1/Text_h1';
import Input_Recherche from '../../composants/InputRecherche/Input_Recherche';
import Text_Presentation from '../../composants/Text_Presentation/Text_Presentation';
import Btn from '../../composants/Button/Btn';

const Home = () => {

  return (
    <SafeAreaView  style={styles.container}>
      
      {/* logo et nom de lapplication  */}
      <Logo_MARKI margin_Btm_Rgt={styles.margin_Right_Logo} style={styles.logo_Marki} />

      {/* le titre recherche medecin */}
      <Text_h1 />

      {/* bar de recherche & button loup filtrage */}
      <Input_Recherche 
        styleInputRecherche_Width={styles.styleInputRecherche_Width} 
        styleIconRecherche={styles.styleIconRecherche}
        icon={<Feather name="search" size={32} color={COLORS.White}/>}
      />

      {/* text de presentation */}
      <Text_Presentation />

      <View style={styles.divBtn}>
        <Btn textBtn={"S'inscrire"}   style={styles.btnSinscrire}/>
        <Btn textBtn={"Se Connecter"} style={styles.btnSeConnecter}/>
      </View>

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
    flexDirection: "row",
    margin: 10,
  },
  margin_Right_Logo:{
    marginRight: 10
  },
  styleInputRecherche_Width: {
    width: 300
  },
  styleIconRecherche:{
    width: 70,
  },
  divBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35
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
    textAlign: "center"
  }
})

export default Home;