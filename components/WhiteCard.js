import { Text, View } from 'react-native'
import { COLORS, SIZES } from '../constants'

function Subtitle({ text }) {
  return (
    <Text
      style={{
        fontSize: 20,
        color: COLORS.subtitle,
        marginVertical: 2,
        fontFamily: 'bold',
        marginTop: 18
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
        color: COLORS.black,
        marginVertical: 2,
        fontFamily: 'regular',
        fontStyle: 'normal'
      }}
    >
      {text}
    </Text>
  )
}

function WhiteCard() {
  return (
    <View
      style={{
        width: SIZES.width - 44,
        height: 'auto',
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        flexDirection: 'col',
        paddingLeft: 4,
        paddingRight: -4,
        paddingVertical: 4,
        borderColor: COLORS.secondaryWhite,
        borderWidth: 1,
        elevation: 2,
        shadowColor: COLORS.secondaryWhite,
        shadowRadius: 3,
        marginBottom: 36
      }}
    >
      <View
        style={{
          width: SIZES.width - 54,
          height: 'auto',
          borderRadius: SIZES.padding3,
          backgroundColor: COLORS.white,
          flexDirection: 'col',
          paddingHorizontal: 24,
          paddingVertical: 24,
          borderColor: COLORS.secondaryWhite,
          borderWidth: 1,
          elevation: 2,
          shadowColor: COLORS.secondaryWhite,
          shadowRadius: 3,
          paddingTop: -18
        }}
      >
        <Subtitle text="Câncer e Acidente Vascular Cerebral (AVC/Derrame): Priorizando a Recuperação" />
        <Paragraph text="Indivíduos que tiveram câncer, mesmo após a recuperação, e pessoas que tiveram um acidente vascular cerebral (AVC/derrame) não podem doar sangue. Essas restrições visam respeitar a recuperação do doador e garantir sua saúde." />

        <Subtitle text="Doença Falciforme e Outras Doenças do Sangue: Sensibilidade às Condições Hematológicas" />
        <Paragraph text="Doença falciforme e outras condições hematológicas são impedimentos, considerando a sensibilidade dessas condições." />

        <Subtitle text="Uso de Droga Injetável: Um Cuidado com a Segurança" />
        <Paragraph text="O uso de droga injetável é uma restrição para garantir a segurança do sangue doado." />

        <Subtitle text="Residência na Europa por 5 Anos ou Mais e Sífilis pelo Método de Quimioluminescência: Prevenção e Cuidado Adicional" />
        <Paragraph text="Residir na Europa por 5 anos ou mais, consecutivos ou não, e a presença de sífilis detectada pelo método de quimioluminescência são impedimentos definitivos. Isso visa prevenir possíveis exposições a agentes infecciosos específicos, garantindo a qualidade e segurança do sangue doado." />

        <Subtitle text="Outras Considerações Importantes: Informações Adicionais para Sua Segurança" />
        <Paragraph text="Além dos impedimentos mencionados, há outras considerações importantes para garantir a segurança e a eficácia do processo de doação de sangue. Continue no nosso guia para esclarecer qualquer dúvida que você possa ter. Lembre-se, sua contribuição pode salvar vidas!" />

      </View>
    </View>
  )
}

export default WhiteCard
