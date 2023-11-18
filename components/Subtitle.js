import { Text } from 'react-native'

import { COLORS, FONTS } from '../constants'

function Subtitle({ text }) {
  return (
    <Text
      style={{ ...FONTS.subtitle, color: COLORS.subtitle }}
    >
      {text}
    </Text>
  )
}

export default Subtitle
