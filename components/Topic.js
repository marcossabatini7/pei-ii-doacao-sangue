import { Text, View } from 'react-native'

import { COLORS, FONTS } from '../constants'
import Divider from './Divider'

function Topic({ title, text }) {
  return (
    <View
      style={{
        marginTop: 16
      }}
    >
      <Text
        style={{ ...FONTS.topic, color: COLORS.subtitle }}
      >
        {title}
      </Text>
      <Divider />
      <Text
        style={{ ...FONTS.paragraph, color: COLORS.black, marginBottom: 12 }}
      >
        {text}
      </Text>
    </View>
  )
}

export default Topic
