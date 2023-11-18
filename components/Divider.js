import { View } from 'react-native'
import { COLORS } from '../constants'

function Divider({ style = {} }) {
  return (
    <View
      style={{
        width: 57,
        height: 6,
        marginVertical: 10,
        backgroundColor: COLORS.primary,
        ...style
      }}
    ></View>
  )
}

export default Divider
