import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../outils/constantes'

const RendezVous_Notification = (props) => {

    // const {nom_Docteur, Specialite, Patient, Date, Heur} = route;

    return (
        <View style={styles.divNotification}>
            <Text style={styles.text_h1_notification}>____ Votre rendez-vous dans {props.jourRestant} JOURS</Text>
            
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
                        <Text style={styles.textBold}>Heur : </Text>15h30
                    </Text>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    divNotification:{
        borderTopColor: COLORS.grise,
        borderTopWidth: 2,
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
        borderWidth: 3,
        borderColor: COLORS.VertLime,
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

export default RendezVous_Notification;