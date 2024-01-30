import { StyleSheet, Text, TextInput, View } from 'react-native'

const Text_Input = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.div_textLabel}>{props.text_label}</Text>
        <TextInput
            style={{...props.style,...styles.textInput}} 
            placeholder={props.text_placeholder}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
    },
    div_textLabel:{
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 8
    },
    textInput:{
        height: 50,
        width: "90%",
        borderWidth: 2,
        paddingLeft: 15,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    }
})

export default Text_Input;