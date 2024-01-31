import { Text, TouchableOpacity } from 'react-native'

const Btn = (props) => {
  return (
    <TouchableOpacity >
        <Text style={{...props.style}}>{props.textBtn}</Text>
    </TouchableOpacity>
  )
}

export default Btn;