import { View } from 'react-native'
import { COLORS } from '../constants'

function Divider() {
  return (
    <View
      style={{
        width: 57,
        height: 6,
        marginVertical: 10,
        backgroundColor: COLORS.primary
      }}
    ></View>
  )
}

export default Divider
