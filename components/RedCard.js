import { Text, View } from 'react-native'
import { COLORS, SIZES } from '../constants'

function Subtitle({ text }) {
  return (
    <Text
      style={{
        fontSize: 20,
        color: COLORS.white,
        marginVertical: 2,
        fontFamily: 'bold'
      }}
    >
      {text}
    </Text>
  )
}

function Paragraph({ text }) {
  return (
    <Text
      style={{
        fontSize: 16,
        color: COLORS.white,
        marginVertical: 2,
        fontFamily: 'regular',
        fontStyle: 'normal',
        marginBottom: 18
      }}
    >
      {text}
    </Text>
  )
}

function RedCard() {
  return (
    <View
      style={{
        width: SIZES.width - 44,
        height: 'auto',
        borderRadius: SIZES.padding3,
        backgroundColor: COLORS.primary,
        flexDirection: 'col',
        paddingHorizontal: 24,
        paddingVertical: 24,
        borderColor: COLORS.secondaryWhite,
        borderWidth: 1,
        elevation: 2,
        shadowColor: COLORS.secondaryWhite,
        shadowRadius: 3,
        marginVertical: 36
      }}
    >
      <Subtitle text="Hepatites B e C, Hanseníase, e Doença de Chagas: Protegendo a Saúde do Receptor" />
      <Paragraph text="Se você já teve Hepatites B ou C, presença de hanseníase, ou Doença de Chagas, infelizmente, não pode doar sangue. Essas precauções são tomadas para garantir a segurança do receptor, considerando os riscos associados a essas condições." />

      <Subtitle text="Hipertireoidismo e Tireoidite de Hashimoto: Cuidando da Saúde Geral" />
      <Paragraph text="Portadores de hipertireoidismo e tireoidite de Hashimoto, infelizmente, não podem doar. Essas condições autoimunes demandam atenção especial para preservar a saúde tanto do doador quanto do receptor." />

      <Subtitle text="Doenças Autoimunes e Acometimento de Mais de um Órgão: Uma Preocupação Adicional" />
      <Paragraph text="Doenças autoimunes que afetam mais de um órgão também são impedimentos definitivos. Esse cuidado visa garantir que a doação seja segura para ambas as partes." />

      <Subtitle text="HIV / AIDS: Garantindo a Segurança Sanguínea" />
      <Paragraph text="Portadores de HIV/AIDS não podem doar sangue. Essa restrição é crucial para manter a segurança do sangue transfundido." />

      <Subtitle text="Diabetes Tipo 1 e Uso de Insulina: Cuidados com a Regulação Glicêmica" />
      <Paragraph text="Pacientes com Diabetes Tipo 1 em uso de insulina estão impedidos de doar sangue. Isso se deve à necessidade de manter a estabilidade na regulação glicêmica." />

    </View>
  )
}

export default RedCard
