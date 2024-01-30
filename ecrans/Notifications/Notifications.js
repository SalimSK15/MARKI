import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../outils/constantes'
import RendezVous_Notification from '../../composants/rendez_vous_notification/RendezVous_Notification'

const Notifications = () => {

  return (
    <View style={styles.container}>
      <RendezVous_Notification jourRestant={2}/>
      <RendezVous_Notification jourRestant={2}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.White
  },
})

export default Notifications;