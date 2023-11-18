import { MaterialIcons } from '@expo/vector-icons'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from '../components/Button'
import Divider from '../components/Divider'
import PageContainer from '../components/PageContainer'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import TopicIcon from '../components/TopicIcon'
import { COLORS, FONTS, images } from '../constants'

const SeeMore = ({ navigation }) => {
    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 60,
                    position: 'absolute',
                    marginBottom: 30
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        height: 44,
                        width: 44,
                        borderRadius: 4,
                        backgroundColor: COLORS.secondaryWhite,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <MaterialIcons
                        name="keyboard-arrow-left"
                        size={24}
                        color={COLORS.black}
                    />
                </TouchableOpacity>
                <Text style={{ ...FONTS.h4 }}>Retornar para Home</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                {renderHeader()}
                <ScrollView
                    style={{
                        marginTop: 50
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            marginHorizontal: 22,
                            alignItems: 'left',
                            marginBottom: 56
                        }}
                    >
                        <Subtitle text="Doação de Sangue: Sua Jornada Pela Vida" />

                        <Text
                            style={{
                                ...FONTS.paragraph,
                                color: COLORS.black,
                                marginTop: 18,
                                fontFamily: 'bold'
                            }}
                        >
                            Pode ser que você não saiba <Text
                                style={{
                                    ...FONTS.paragraph,
                                    color: COLORS.black,
                                    marginTop: 18
                                }}
                            >
                                , mas em um mundo onde nada substitui o valor do sangue humano, a doação se destaca como um gesto fundamental, celebrado no Dia Nacional do Doador de Sangue, neste 25 de novembro. Muitas das pessoas hoje não dão a devida importância a esse ato,
                            </Text> mas você pode fazer diferente.
                        </Text>

                        <Image
                            source={images.seeMore1}
                            resizeMode='contain'
                            style={{
                                marginVertical: 36,
                                width: 'auto'
                            }}
                        />

                        <Divider />
                        <Subtitle text="A Importância do Sangue Humano" />
                        <Paragraph text="O sangue é um tesouro vital que desempenha funções cruciais em nosso corpo, desde transportar oxigênio até combater infecções e facilitar a coagulação. " />
                        <Paragraph text="Sua essencialidade se destaca ainda mais em tratamentos médicos e intervenções urgentes, proporcionando a base necessária para transfusões que podem salvar vidas. " />
                        <Paragraph text="Cada doação é um elo valioso na corrente da vida, contribuindo para a saúde e bem-estar de quem precisa." />

                        <View
                            style={{
                                marginVertical: 36
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h3, color: COLORS.subtitle,
                                    marginBottom: 24
                                }}
                            >
                                Por que o sangue é tão vital?
                            </Text>

                            <TopicIcon
                                icon={images.seeMoreIcon1}
                                title="Transporte de Oxigênio"
                                text="O sangue garante que cada célula do corpo receba o oxigênio necessário para seu funcionamento adequado."
                            />
                            <TopicIcon
                                icon={images.seeMoreIcon2}
                                title="Defesa contra Infecções"
                                text="Desenvolve um papel fundamental no sistema imunológico, combatendo e prevenindo infecções."
                            />
                            <TopicIcon
                                icon={images.seeMoreIcon3}
                                title="Coagulação Sanguínea"
                                text="Participa ativamente na coagulação, evitando perdas excessivas de sangue em caso de lesões."
                            />
                            <TopicIcon
                                icon={images.seeMoreIcon4}
                                title="Regulação da Temperatura"
                                text="O sangue ajuda a regular a temperatura corporal, garantindo um ambiente propício para as atividades celulares."
                            />
                        </View>

                        <Image
                            source={images.seeMore2}
                            style={{
                                width: 'auto',
                                marginVertical: 36
                            }}
                        />

                        <Divider />
                        <Subtitle text="Um Pouco da História que Nos Conecta" />
                        <Paragraph text="Ao longo do tempo, a ciência evoluiu, revelando que apenas a doação de um humano para outro é eficaz, pondo fim a tentativas infrutíferas de usar sangue animal. " />
                        <Paragraph text={`Pode ser surpreendente pensar que, no Brasil, a primeira transfusão ocorreu em 1910, em Salvador, e o primeiro " banco de sangue" público foi estabelecido em 1941, em Porto Alegre.`} />

                        <Divider style={{
                            marginTop: 30
                        }} />
                        <Subtitle text="Oportunidade de Doar Sangue Perto de Você" />
                        <Paragraph text="Com o conhecimento disseminado, vários lugares no país agora têm bancos de sangue, e é possível encontrar uma oportunidade próxima a você. Diversos locais, incluindo o Instituto Nacional do Câncer (INCA), disponibilizam informações sobre mais de 100 locais onde é possível fazer doações de sangue. Muitas das pessoas talvez não saibam que têm essa oportunidade tão perto delas." />

                        <Image
                            source={images.seeMore3}
                            style={{
                                width: 'auto',
                                marginVertical: 36
                            }}
                        />

                        <Subtitle text="Desafios e Oportunidades para a Mudança" />
                        <Paragraph text="Apesar disso, apenas 1,8% da população brasileira doa sangue regularmente, abaixo dos 2% ideais da OPAS. " />
                        <Paragraph text="Muitas das pessoas podem achar que é difícil fazer a diferença, mas é crucial intensificar a conscientização nacional e local. " />
                        <Paragraph text="Por isso buscamos esclarecer dúvidas e compartilhar conhecimento, pois a informação é essencial para despertar o interesse da população e desmistificar mitos." />

                        <Text
                            style={{
                                ...FONTS.paragraph,
                                color: COLORS.black,
                                marginTop: 36,
                                fontFamily: 'bold'
                            }}
                        >
                            Muitas das pessoas podem pensar que sua contribuição é pequena, mas cada doação é um passo vital para salvar vidas.
                            {'\n\n'}
                            Junte-se a nós nesta jornada pela vida!
                        </Text>

                        <Button
                            title="Clique e Descubra agora se você pode Doar Também!"
                            filled
                            onPress={() => navigation.navigate('CanIDonate')}
                            style={{
                                width: '100%',
                                marginTop: 24
                            }}
                        />
                    </View>
                </ScrollView>
            </PageContainer>
        </SafeAreaView>
    )
}

export default SeeMore
