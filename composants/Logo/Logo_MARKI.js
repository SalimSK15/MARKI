import { StyleSheet, Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import  MaskedView  from "@react-native-masked-view/masked-view"

const Logo_MARKI = (props) => {
  
  return (
    <View style={{...props.style,...styles.container}}>

        <Image 
          style={{...props.margin_Btm_Rgt,...styles.logo_Style}} 
          source={require("../../assets/icons/LOGOx01.png")} alt='logo MARKI'
        />
          <MaskedView maskElement = { <Text style={styles.text_LinearGradient} > Markii </Text> } >
            <LinearGradient
              colors={["#BF2E96", "#74B1DA"]}
          >
        <Text style={ { opacity: 0, height: 45, width: 100 }}></Text>
          </LinearGradient>
        </MaskedView>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
  },
  logo_Style:{
    width: 70,
    height: 80
  },
  text_LinearGradient:{
    fontSize: 30,
    backgroundColor: "transparent", 
  }
})

export default Logo_MARKI;