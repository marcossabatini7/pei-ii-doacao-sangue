import { Text } from 'react-native'

import { COLORS, FONTS } from '../constants'

function Paragraph({ text }) {
  return (
    <Text
      style={{ ...FONTS.paragraph, color: COLORS.black, marginTop: 18 }}
    >
      {text}
    </Text>
  )
}

export default Paragraph
