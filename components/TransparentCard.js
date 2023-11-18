import { Image, Text, View } from 'react-native'

import { COLORS, FONTS, SIZES, images } from '../constants'
import Paragraph from './Paragraph'
import Title from './Title'

function Subtitle({ text }) {
  return (
    <Text
      style={{
        ...FONTS.subtitle,
        color: COLORS.subtitle,
        fontSize: 20,
        marginTop: -20
      }}
    >
      {text}
    </Text>
  )
}


function Topic({ text }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingRight: 24,
      }}
    >
      <Image
        source={images.transpCardTopic}
        style={{
          marginTop: 20
        }}
      />

      <Text
        style={{
          color: COLORS.primary,
          fontFamily: 'bold',
          fontStyle: 'normal',
          fontSize: 12,
          lineHeight: 24,
          marginTop: 18,
          paddingTop: 2
        }}
      >
        {text}
      </Text>
    </View>
  )
}

function TransparentCard({ title, subtitle, paragraphs, topics }) {
  return (
    <View
      style={{
        width: SIZES.width - 44,
        height: 'auto',
        borderRadius: SIZES.padding3,
        flexDirection: 'col',
        paddingHorizontal: 24,
        paddingVertical: 24,
        borderColor: COLORS.cardBorder,
        borderWidth: 1,
        elevation: 2,
        shadowColor: COLORS.secondaryWhite,
        shadowRadius: 3,
        marginTop: 44,
        paddingTop: -36,
        marginBottom: -24
      }}
    >
      <Title text={title} />
      <Subtitle text={subtitle} />
      {paragraphs?.map((p, index) => (
        <Paragraph key={index} text={p} />
      ))}
      {topics?.map((p, index) => (
        <Topic key={index} text={p} />
      ))}
    </View>
  )
}

export default TransparentCard
