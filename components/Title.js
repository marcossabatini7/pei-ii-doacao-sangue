import { Text } from 'react-native'

import { COLORS, FONTS } from '../constants'

function Title({ text }) {
  return (
    <Text
      style={{
        ...FONTS.h1,
        color: COLORS.primary,
        marginVertical: 36
      }}
    >
      {text}
    </Text>
  )
}

export default Title
