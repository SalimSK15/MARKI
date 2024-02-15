import { StyleSheet, Text, View, Image } from 'react-native'
import { COLORS } from '../../outils/constantes'

const Ecran_Connecte = () => {
  return (
    <View style={styles.container}>
        <View style={styles.partieLogoTitre}>
            <Image source={require("../../assets/icons/logoPassageVideX2.png")} />
            <Text style={styles.titrePartieLogoTitre}> Vos passages Aujourd'hui </Text>
        </View>
        <View style={styles.sectionAucunPassage}>
            <Image style={styles.test} source={require("../../assets/icons/passageVideX1-5.png")} />
            <Text style={styles.texteSectionAucunPassage}> Aucun Passage aujourd'hui </Text>
        </View>
    </View>
  )
}

export default Ecran_Connecte

const styles = StyleSheet.create({
    container:{
    },
    partieLogoTitre:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    titrePartieLogoTitre:{
        fontSize: 18,
        paddingLeft: 10,
        fontWeight: "bold",
        color: COLORS.VioletFonce,
    },
    sectionAucunPassage:{
        paddingTop: "30%",
        alignItems: "center",
        justifyContent: "center",
    },
    texteSectionAucunPassage:{
        fontSize: 16,
        color: COLORS.grise,
        marginTop: 20
    }

})