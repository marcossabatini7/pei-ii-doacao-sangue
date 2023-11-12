import { Image, View } from 'react-native'

import Topic from '../components/Topic'
import { COLORS } from '../constants'

function TopicIcon({ icon, title, text }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 10
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.primary,
          width: 78,
          height: 78,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          source={icon}
          resizeMode='contain'
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          paddingHorizontal: 20,
          marginTop: -16,
          marginRight: 20
        }}
      >
        <Topic
          title={title}
          text={text}
        />
      </View>
    </View>
  )
}

export default TopicIcon
