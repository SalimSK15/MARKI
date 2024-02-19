import { useState } from 'react';
import { COLORS } from '../../outils/constantes'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'

const Element_RendezVous = () => {

    const [boutonsVisibles, setBoutonsVisibles] = useState(true);

    const cacherBoutons = () => {
        setBoutonsVisibles(!boutonsVisibles);
      };

    return (
        <View style={styles.divNotification}>
            <View style={styles.style_Notification}>
                <View style={styles.container}>
                    <View>
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
                    <TouchableOpacity style={styles.btnModifier} onPress={cacherBoutons}>
                        <Text style={styles.text_btnModifier}>{ boutonsVisibles ? "Modifier" : "Reduire"}</Text>
                    </TouchableOpacity> 
                </View>
                {
                    !boutonsVisibles && (
                        <View>
                            <TouchableOpacity style={styles.changerBtn} onPress={() => console.log('sk')}>
                                <Text style={styles.textBoutonChangeBtn}> Changer la date d'inscription </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.annulerBtn} onPress={() => alert("Veuillez confirmer l'annulation ")}>
                                <Text style={styles.textBoutonAnnulationBtn}>Annuler mon passage</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    divNotification:{
        marginBottom: 10
    },
    text_h1_notification:{
        padding: 10,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: COLORS.Émeraude,
    },
    style_Notification:{
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: COLORS.VioletRoyal,
    },
    container:{
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    Nom_Docteur:{
        fontSize: 22,
        paddingLeft: 0,
        fontWeight: "bold",
        color: COLORS.VioletFonce,
    },
    infos_Docteur:{
        paddingLeft: 15
    },
    text_info:{
        fontSize: 16
    },
    textBold:{
        fontWeight: "bold"
    },
    btnModifier:{
        padding: 8,
        width: "30%",
        borderRadius: 8,
        alignSelf: 'flex-end',
        backgroundColor: COLORS.VertForêt
    },
    text_btnModifier:{
        fontWeight: "bold",
        textAlign: "center",
        color: COLORS.White,
    },
    changerBtn:{
        padding: 3,
        width: "70%",
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: "center",
        borderColor: COLORS.VertFoncé,
    },
    annulerBtn:{
        padding: 3,
        width: "70%",
        borderWidth: 2,
        borderRadius: 8,
        alignItems: "center",
    },
    textBoutonChangeBtn:{
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS.VioletFonce,
    },
    textBoutonAnnulationBtn:{
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS.rouge
    }
})

export default Element_RendezVous;