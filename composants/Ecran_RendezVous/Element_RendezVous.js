import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../outils/constantes'

const Element_RendezVous = () => {
    return (
        <View style={styles.divNotification}>
            <View style={styles.style_Notification}>
                <Text style={styles.Nom_Docteur}>Dr.Saheb</Text>
                <View style={styles.infos_Docteur}>
                    <Text style={styles.text_info}>
                        <Text style={styles.textBold}>Spécialité : </Text>Orthopedique
                    </Text>
                    <Text style={styles.text_info}>
                        <Text style={styles.textBold}>Patient : </Text>Moi meme 
                    </Text>
                    <Text style={styles.text_info}>
                        <Text style={styles.textBold}>Date : </Text>25 Fevrier 2024 
                    </Text>
                    <Text style={styles.text_info}>
                        <Text style={styles.textBold}>N : </Text>15h30
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    divNotification:{
        marginBottom: 10
    },
    text_h1_notification:{
        fontWeight: "bold",
        fontSize: 18,
        color: COLORS.Émeraude,
        textAlign: "center",
        padding: 10
    },
    style_Notification:{
        padding: 12,
        borderWidth: 2,
        borderColor: COLORS.VioletRoyal,
        borderRadius: 10
    },
    Nom_Docteur:{
        fontSize: 22,
        fontWeight: "bold",
        color: COLORS.VioletFonce
    },
    infos_Docteur:{
        paddingLeft: 15
    },
    text_info:{
        fontSize: 16
    },
    textBold:{
        fontWeight: "bold"
    }
})

export default Element_RendezVous;