import { StyleSheet, Text, TextInput, View } from 'react-native'

const Text_Input = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.div_textLabel}>{props.text_label}</Text>
        <TextInput
            style={{...props.style}} 
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
    },
})

export default Text_Input;