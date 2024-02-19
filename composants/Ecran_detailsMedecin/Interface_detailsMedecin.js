import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORS } from '../../outils/constantes';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Interface_detailsMedecin = ({route}) => {
  const {nomPrenom, specialite, adresse, telephone, email} = route.params.item;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Détails Du Medecin</Text>
        <View style={styles.contenu_Details_Medecin}>
            <Text style={styles.Nom_Docteur}>{nomPrenom}</Text>
            <Text style={styles.specialite}>
                <Text style={styles.text_specialite_Bold}>Spécialité : </Text>
                <Text style={styles.text_specialite}>{specialite}</Text>
            </Text>
            <View style={styles.infos_Details_Docteur}>
                <View style={styles.text_info}>
                    <Text style={styles.textBold}>* Note : 4.8 (basée sur 120 évaluations) </Text> 
                    <Text style={styles.textBold}>* Localisation Lien Map :  Tizi-Ouzou, Algérie</Text>
                    <Text style={styles.textBold}>* Adresse :  {adresse} </Text> 
                    <Text style={styles.textBold}>* Téléphone : {telephone} </Text> 
                    <Text style={styles.textBold}>* E-mail : {email} </Text> 
                </View>
                <View style={styles.div_Horaires_Ouverture}>
                    <Text style={styles.text_Horaire}>Horaires d'ouverture</Text>
                    <Text> <Text style={styles.jour_Semaine}>Lundi :</Text> 9h00 - 17H00 </Text> 
                    <Text> <Text style={styles.jour_Semaine}>Mercredi :</Text> 9h00 - 17H00 </Text> 
                    <Text> <Text style={styles.jour_Semaine}>Vendredi :</Text> 9h00 - 17H00 </Text> 
                </View>
                <View style={styles.services}>
                    <Text style={styles.text_Service}>Services</Text>
                    <Text style={styles.sous_Text_Service}>* Consultation en orthopedique generale</Text>
                    <Text style={styles.sous_Text_Service}>* Diagnostic et traitement des affections musculo-squelettiques</Text>
                    <Text style={styles.sous_Text_Service}>* Chirurgie orthopédique mineure</Text>
                </View>
            </View>
        </View>
        <View style={styles.div_Btn}>
            <TouchableOpacity style={styles.btn_inscription_Liste}>
                <Text style={styles.Text_inscription_Liste}>S'inscrire sur une liste</Text>
                <Foundation name="list-bullet" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_RendezVous_Horaire}>
                <Text style={styles.text_RendezVous_Horaire}>Prendre un rendez-vous hoaraire</Text>
                <Ionicons name="time-outline" size={32} color="white" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 50,
        padding: 10,
        backgroundColor: COLORS.White
    },
    text:{
        fontSize: 32,
        width: "100%",
        marginBottom: 10,
        fontWeight: "bold",
        textAlign: "center",
        color: COLORS.VioletFonce,
    },
    contenu_Details_Medecin:{
        margin: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.VioletFonce,
    },
    Nom_Docteur:{
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: COLORS.VioletFonce
    },
    specialite:{
        fontSize: 16,
        marginBottom: 15,
    },
    text_specialite:{
        color: COLORS.grise,
    },
    text_specialite_Bold:{
        fontWeight: "bold"
    },
    infos_Details_Docteur:{
        padding: 5,
    },
    text_info:{
        // padding: 3,
    },
    text_Horaire:{
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS.VioletFonce,
        marginBottom: 10,
        marginTop: 20,
    },
    jour_Semaine:{
        fontWeight: "bold"
    },
    services:{
        marginBottom: 10
    },
    text_Service:{
        fontSize: 16,
        color: COLORS.VioletFonce,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 20,
    },
    sous_Text_Service:{
        color: COLORS.Black,
    },
    div_Btn:{
        alignItems: "center"
    },
    btn_inscription_Liste:{
        flexDirection: "row",
        backgroundColor: COLORS.VioletFonce,
        marginBottom: 10,
        borderRadius: 8,
        padding: 10,
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    btn_RendezVous_Horaire:{
        flexDirection: "row",
        backgroundColor: COLORS.VioletFonce,
        borderRadius: 8,
        padding: 10,
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    Text_inscription_Liste:{
        fontSize: 15,
        color: COLORS.White,
        fontWeight: "bold"
    },
    text_RendezVous_Horaire:{
        fontSize: 15,
        color: COLORS.White,
        fontWeight: "bold"
    }
})

export default Interface_detailsMedecin;