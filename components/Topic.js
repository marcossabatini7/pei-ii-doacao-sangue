import { Text } from 'react-native'

import { COLORS, FONTS } from '../constants'

function Topic({ title, text }) {
  return (
    <>
      <Text
        style={{ ...FONTS.topic, color: COLORS.subtitle }}
      >
        {title}
      </Text>
      <Text
        style={{ ...FONTS.paragraph, color: COLORS.black, marginVertical: 12 }}
      >
        {text}
      </Text>
    </>
  )
}

export default Topic
