
import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View, Pressable, Alert } from 'react-native'
import { COLORS } from '../../outils/constantes'

const Input_Recherche = (props) => {

    const [searchText, setSearchText] = useState('');
    const handleRecherche = () =>{
      console.log(Alert.alert("cette methode est en cours de devloppement Merci "));
    }
    return (
        <View style={styles.divIconRecherche}>
            <TextInput 
                style={{...props.styleInputRecherche_Width,...styles.inputRecherche}}
                placeholder='Recherche ...' 
                value={searchText}
            />
            <View 
              style={{...props.styleIconRecherche,...styles.IconRecherche}}>
                <Pressable onPress={handleRecherche}>
                  {props.icon}
                </Pressable>
                {props.textIcon ? <Text style={styles.textIcon}> {props.textIcon} </Text> : ""}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
  divIconRecherche:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  inputRecherche:{
    height: 50,
    borderWidth: 2,
    paddingLeft: 30,
    borderRadius: 10,
  },
  IconRecherche:{
    height: 50,
    backgroundColor: COLORS.VioletFonce,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 8,
  },
  textIcon:{
    color: COLORS.White
  }
})

export default Input_Recherche;