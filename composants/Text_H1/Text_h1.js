import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../outils/constantes'

const Text_h1 = () => {
  return (
    <View style={styles.divTitreRecherche}>
      <Text style={styles.titreRecherche}>Recherchez un médecin</Text>
    </View>
  )
}

export default Text_h1

const styles = StyleSheet.create({
  divTitreRecherche:{
    marginTop: 40,
    marginBottom: 20,
  },
  titreRecherche:{
    fontSize: 40,
    textAlign: 'center',
    color: COLORS.VioletFonce,
    fontWeight: 'bold'
  }
})