import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../outils/constantes'
import Element_Notification from '../../composants/rendez_vous_notification/Element_Notification'

const Notifications = () => {

  return (
    <View style={styles.container}>
      <Element_Notification jourRestant={2}/>
      <Element_Notification jourRestant={2}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.White
  },
})

export default Notifications;