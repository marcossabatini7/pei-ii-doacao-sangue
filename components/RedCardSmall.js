import { Image, Text, View } from 'react-native'

import { COLORS, FONTS, SIZES, images } from '../constants'

function Title({ text }) {
  return (
    <Text
      style={{
        ...FONTS.h1,
        color: COLORS.white,
        marginVertical: 36
      }}
    >
      {text}
    </Text>
  )
}

function Subtitle({ text }) {
  return (
    <Text
      style={{
        ...FONTS.subtitle,
        color: COLORS.white,
        fontSize: 20,
        marginTop: -20
      }}
    >
      {text}
    </Text>
  )
}

function Paragraph({ text }) {
  return (
    <Text
      style={{ ...FONTS.paragraph, color: COLORS.white, marginTop: 18 }}
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
        source={images.redCardTopic}
        style={{
          marginTop: 20
        }}
      />
      <Text
        style={{
          color: COLORS.white,
          fontFamily: 'bold',
          fontStyle: 'normal',
          fontSize: 12,
          lineHeight: 24,
          marginTop: 18,
        }}
      >
        {text}
      </Text>
    </View>
  )
}

function RedCardSmall({ title, subtitle, paragraphs, topics }) {
  return (
    <View
      style={{
        width: SIZES.width - 44,
        height: 'auto',
        borderRadius: SIZES.padding3,
        flexDirection: 'col',
        paddingHorizontal: 24,
        paddingVertical: 24,
        backgroundColor: COLORS.primary,
        borderColor: COLORS.cardBorder,
        borderWidth: 1,
        elevation: 2,
        shadowColor: COLORS.secondaryWhite,
        shadowRadius: 3,
        marginTop: 36,
        marginBottom: -30,
        paddingTop: -36
      }}
    >
      <Title text={title} />
      {subtitle ? <Subtitle text={subtitle} /> : null}
      {paragraphs?.map((p, index) => (
        <Paragraph key={index} text={p} />
      ))}
      {topics?.map((p, index) => (
        <Topic key={index} text={p} />
      ))}
    </View>
  )
}

export default RedCardSmall
