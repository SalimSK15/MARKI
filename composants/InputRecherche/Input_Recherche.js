
import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View, Pressable, Alert } from 'react-native'
import { COLORS } from '../../outils/constantes'

const Input_Recherche = (props) => {

    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.divIconRecherche}>
            <TextInput 
                style={{...props.styleInputRecherche_Width,...styles.inputRecherche}}
                placeholder='Recherche ...' 
                value={searchText}
                onChangeText={searchText => setSearchText(searchText)}
            />
            <Pressable 
              onPress={props.handleClickFonction}
              style={{...props.styleIconRecherche,...styles.IconRecherche}}>
                  {props.icon}
                  {props.textIcon ? <Text style={styles.textIcon}> {props.textIcon} </Text> : ""}
            </Pressable>
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
    marginLeft: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.VioletFonce,
  },
  textIcon:{
    color: COLORS.White
  }
})

export default Input_Recherche;