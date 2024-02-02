import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../outils/constantes'
import Element_RendezVous from '../../composants/Ecran_RendezVous/Element_RendezVous'

const RendezVous = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.btnMesRendezVous}>Mes Rendez-Vous </Text>
      <Element_RendezVous />
      <Element_RendezVous />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.White
  },
  btnMesRendezVous:{
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    color: 'white',
    borderRadius: 8,
    backgroundColor: COLORS.VioletFonce,
    fontSize: 22,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
    fontWeight: "bold"
  }
})

export default RendezVous;