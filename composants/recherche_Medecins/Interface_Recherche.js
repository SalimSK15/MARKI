import { useState } from 'react';
import { COLORS } from '../../outils/constantes';
import Input_Recherche from '../InputRecherche/Input_Recherche';
import { donneesMedecins } from '../../assets/donneesMedecins/donneesMedecins';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import Interface_Recherche_Maps from '../Recherche_Maps/Interface_Recherche_Maps';

const Interface_Recherche = ({navigation}) => {
    const [showListDoctor,setShowListDoctor] = useState(true);

    const handleVoireCarte = () =>{
        setShowListDoctor(!showListDoctor);
    } 
    const handleDetailMedecins = ({item}) =>{
        navigation.navigate('detailsMedecin',{item});
    }

  const renderItem = ({item}) =>(
    <Pressable onPress={() => handleDetailMedecins({item})}>
        <View style={styles.DivContenu_Recherche_medecins}>
            <View style={styles.Contenu_Recherche_medecins}>
                <Text style={styles.Nom_Docteur}>{item.nomPrenom}</Text>
                <View style={styles.infos_Docteur}>
                    <Text style={styles.text_info}>
                        <Text style={styles.textBold}>Spécialité : </Text>{item.specialite}
                    </Text>
                    <Text style={styles.text_info}>
                        <Text style={styles.textBold}>Note : </Text> 4,9  
                    </Text>
                </View>
            </View>
        </View>
    </Pressable>
  )
  return (
    <View style={styles.container}>
      <View style={styles.div_Text_InputRecherche}>
        <Text style={styles.text}>sélectionnez un médecin</Text>
        <Input_Recherche 
            handleClickFonction={handleVoireCarte}
            styleInputRecherche_Width={styles.styleInputRecherche_Width}
            styleIconRecherche={styles.styleIconRecherche}
            icon={
                showListDoctor ? 
                <Image source={require("../../assets/icons/carteMapX1.png")} /> :
                <Image source={require("../../assets/icons/list-ul-X1.png")} />
            }
            textIcon = {showListDoctor ? "Voir sur la carte" : "Voir en liste"}
            />
        </View>
        { showListDoctor ? 
          <FlatList 
            data={donneesMedecins}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          /> : 
          <Interface_Recherche_Maps />
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
    },
    div_Text_InputRecherche:{
        padding: 15
    },
    text:{
        fontSize: 32,
        width: "100%",
        marginBottom: 10,
        fontWeight: "bold",
        textAlign: "center",
        color: COLORS.VioletFonce,
    },
    DivContenu_Recherche_medecins:{
        alignItems: "center"
    },
    Contenu_Recherche_medecins:{
        width: "95%",
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,       
        borderColor: COLORS.VioletRoyal,
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
        fontSize: 16,
    },
    textBold:{
        fontWeight: "bold"
    },
    styleInputRecherche_Width:{
        width: "70%",
        padding: 15
    },
    styleIconRecherche:{
        width: "30%",
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Interface_Recherche;