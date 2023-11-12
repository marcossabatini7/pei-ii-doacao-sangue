import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import PageContainer from '../components/PageContainer'
import Paragraph from '../components/Paragraph'
import RedCard from '../components/RedCard'
import RedCardSmall from '../components/RedCardSmall'
import Subtitle from '../components/Subtitle'
import Topic from '../components/Topic'
import TransparentCard from '../components/TransparentCard'
import WhiteCard from '../components/WhiteCard'
import { COLORS, FONTS, images } from '../constants'

const CanIDonate = ({ navigation }) => {
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
                        <Subtitle text="Doar Sangue: Uma Atitude Simples que Pode Salvar Vidas!" />

                        <Paragraph text="Você sabia que sua doação de sangue pode fazer toda a diferença?" />

                        <Paragraph text="Talvez você não saiba, mas existem alguns requisitos que tornam a doação possível." />

                        <Image
                            source={images.canIDonate1}
                            style={{
                                marginVertical: 30,
                            }}
                        />

                        <Subtitle text="Requisitos para doação" />

                        <Paragraph text="Vamos esclarecer tudo para que você possa contribuir de maneira tranquila e consciente." />

                        <Topic
                            title='Idade: Uma Janela de Oportunidade para Todos'
                            text='Imagine se você soubesse que, dos 16 aos 69 anos, 11 meses e 29 dias, você tem a chance de fazer algo incrível? Essa é a faixa etária para doação de sangue. Se você tem entre 16 e 17 anos, não se preocupe - basta a autorização formal dos seus pais. [Link para autorização]'
                        />
                        <Topic
                            title='Documento de Identificação: Seu Passaporte para Salvar Vidas'
                            text='Para entrar nessa jornada solidária, é necessário apresentar um documento com foto. E, pode ser que você não saiba, documentos digitais oficiais também são aceitos, desde que contenham foto, RG, data de nascimento e nome da mãe. Facilite o processo e traga o seu!'
                        />
                        <Topic
                            title='Peso: Uma Balança de Esperança'
                            text='Aqui está um detalhe importante: você precisa pesar acima de 50 kg. Sabe por quê? Porque o peso está diretamente relacionado à sua segurança durante e após a doação. Garantimos que, mantendo esse peso mínimo, sua generosidade fluirá da forma mais saudável possível.'
                        />
                        <Topic
                            title='Condições de Saúde: O Seu Bem-Estar é Prioridade'
                            text='Quando falamos em doação, a saúde é essencial. Talvez você esteja nessa situação: se estiver em boas condições de saúde, já é meio caminho para ajudar quem precisa. Pode ser que você não saiba, mas uma boa saúde garante a qualidade do sangue doado, tornando-o seguro para quem o recebe.'
                        />
                        <Topic
                            title='Jejum e Restrições a Bebidas Alcoólicas: Energia para a Solidariedade'
                            text='Agora, quanto ao jejum e às bebidas alcoólicas, aqui vai um segredo: você não precisa estar em jejum! Aliás, é melhor evitar alimentos gordurosos no dia da doação. E sobre as bebidas alcoólicas, é importante evitar 12 horas antes da doação. Isso tudo visa garantir que você esteja em plenas condições para compartilhar essa dádiva de vida.'
                        />
                        <Topic
                            title='Acompanhamento: Juntos Nessa Jornada de Solidariedade'
                            text='Agora, sobre a presença de crianças: se você tiver pequenos com menos de 12 anos, é melhor deixá-los em casa. Se for necessário trazê-los, tenha um acompanhante maior de idade para que você possa se concentrar em dar o seu melhor.'
                        />

                        <Image
                            source={images.canIDonate2}
                            style={{
                                marginVertical: 36,
                            }}
                        />

                        <Subtitle text="Impedimentos Definitivos para Doação de Sangue: O Que Você Precisa Saber" />

                        <Paragraph text="Certamente, a vontade de doar sangue é louvável, mas é importante conhecer alguns impedimentos definitivos que podem surgir. Talvez você não tenha conhecimento, e é possível que algumas destas situações sejam novas para você." />

                        <RedCard />
                        <WhiteCard />

                        <Subtitle text="Desvendando os Tempos de Espera e Impedimentos Temporários para Doação de Sangue" />
                        <Paragraph text="Doar sangue é um ato valioso, mas alguns fatores temporários podem afetar a elegibilidade. Vamos explorar exemplos e os períodos de espera associados a diferentes situações:" />

                        <TransparentCard
                            title="Procedimentos Dentários"
                            subtitle="Cuidados Pós-Tratamento"
                            paragraphs={["Pode ser que você tenha realizado um procedimento dentário recentemente. O tempo de espera para doar varia de 1 a 30 dias, dependendo do procedimento específico."]}
                        />
                        <RedCardSmall
                            title="Transfusão, Hemodiálise e Parceiros Sexuais"
                            subtitle="1 Ano de Espera"
                            paragraphs={["Para quem recebeu transfusão de sangue, fez hemodiálise ou é parceiro sexual dessas pessoas, é necessário aguardar 1 ano antes de doar.", "Infecções sexualmente transmissíveis também possuem o tempo de espera de 1 ano após a cura."]}
                        />
                        <TransparentCard
                            title="Tatuagem, Piercing e Procedimentos Estéticos"
                            subtitle="Cautela por 6 Meses a 1 Ano"
                            paragraphs={["Se aventurou em uma nova tatuagem, piercing, micropigmentação ou procedimento estético?"]}
                        />
                        <RedCardSmall
                            title="Toxina Botulínica"
                            subtitle="72 Horas de Resguardo"
                            paragraphs={["Após uma aplicação de Toxina Botulínica, aguarde 72 horas antes de doar sangue."]}
                        />
                        <TransparentCard
                            title="Sintomas Respiratórios e Outros Indicadores"
                            subtitle="Espera Estratégica"
                            paragraphs={["Se você teve sintomas respiratórios, como gripe, tosse ou febre, aguarde 30 dias após a cura. Para outras situações, como diarreia, a espera é de 1 semana após o último episódio."]}
                        />
                        <RedCardSmall
                            title="Vacinação e Antibióticos"
                            subtitle="Intervalos Importantes"
                            paragraphs={[
                                "Após receber a vacina contra gripe, Hepatite B ou anti-tetânica, espere 48 horas. Para vacinas antirrábica profilática e tríplice viral, a espera é de 28 dias.",
                                "Em casos gerais de infecção ou uso de antibiótico, exigem 15 dias após a cura para doação. Além disso, para herpes labial, aguarde 1 semana após a cicatrização total da lesão.",
                                "Nos casos de vacinação recente contra a Conid-19 a quantidade de tempo de espera para doação vai depender do laboratório da vacina ministrada:"
                            ]}
                            topics={[
                                'Coronavac (Butantan): 48 horas após administração da vacina;',
                                'Covishield (Astrazeneca), Janssen e Pfizer: 07 dias administração da vacina.'
                            ]}
                        />
                        <TransparentCard
                            title="Situações Específicas"
                            subtitle="Avaliação na Triagem"
                            paragraphs={[
                                "Alguns casos, como cirurgias, exames invasivos, doenças em geral e situações de maior risco para doenças sexualmente transmissíveis, passarão por avaliação na triagem podendo ter um tempo de espera dependendo da situação:"
                            ]}
                            topics={[
                                'Situações nas quais há maior risco de adquirir doenças sexualmente transmissíveis: aguarde 12 meses;',
                                'Endoscopia, colonoscopia ou outros exames invasivos: 6 meses após o procedimento;',
                                'Doenças em geral - passará por avaliação na triagem;'
                            ]}
                        />
                        <RedCardSmall
                            title="Informações Adicionais"
                            subtitle="Atente-se aos Detalhes"
                            paragraphs={[
                                "Fique atento a casos específicos, como relações sexuais ocasionais nos últimos 12 meses, uso de certos medicamentos, cirurgia bariátrica (1 ano após a cirurgia, estando bem de saúde), e histórico de uso de drogas."
                            ]}
                            topics={[
                                'Cirurgia – pode variar de 1 a 12 meses dependendo do porte e tipo da cirurgia;',
                                'Medicamentos: avaliação clínica do triagista;',
                                'Maconha: 12 horas após o uso. Outras drogas: 01 ano após o uso;'
                            ]}
                        />
                        <TransparentCard
                            title="Maternidade e Procedimentos Pós-Parto"
                            subtitle="Cuidados Especiais"
                            paragraphs={[]}
                            topics={[
                                'Amamentação - liberado após a criança completar 1 ano;',
                                'Cesárea - 6 meses;',
                                'Aborto ou parto normal - 3 meses.'
                            ]}
                        />
                        <RedCardSmall
                            title="Dengue, Malária e Convulsões"
                            subtitle="Prazos para Segurança"
                            paragraphs={[
                                "Fique atento a casos específicos, como relações sexuais ocasionais nos últimos 12 meses, uso de certos medicamentos, cirurgia bariátrica (1 ano após a cirurgia, estando bem de saúde), e histórico de uso de drogas."
                            ]}
                            topics={[]}
                        />

                        <View
                            style={{
                                marginTop: 56
                            }}
                        >
                            <Subtitle text="Doação de Sangue: Informações Importantes a Considerar!" />
                            <Paragraph text="Doar sangue é um gesto nobre, mas há situações em que é melhor pensar duas vezes. Vamos esclarecer alguns pontos importantes para que você esteja bem informado antes de tomar essa decisão." />
                        </View>

                        <Text
                            style={{
                                marginTop: 64,
                                fontSize: 61,
                                fontStyle: 'normal',
                                fontFamily: 'bold',
                                color: COLORS.subtitle
                            }}
                        >
                            Na Dúvida, Não Doe!
                        </Text>

                        <Paragraph text="Se a razão que o trouxe ao Hemocentro for a realização de exames, é essencial comunicar ao profissional da entrevista. Doar sangue para este propósito não é apropriado." />

                        <RedCardSmall
                            title="Exames? Procure o Centro de Testagem e Aconselhamento (CTA)"
                            paragraphs={[
                                "Caso seu objetivo seja realizar exames, sugerimos procurar o Centro de Testagem e Aconselhamento (CTA) mais próximo. Lá, os exames são gratuitos, os resultados são mais rápidos e não é necessário uma solicitação médica para realizá-los.",
                                "Entender essas nuances pode fazer toda a diferença. Queremos garantir que sua intenção de ajudar seja da maneira mais eficaz possível. Se tiver dúvidas, estamos aqui para ajudar!"
                            ]}
                            topics={[]}
                        />
                    </View>
                </ScrollView>
            </PageContainer>
        </SafeAreaView>
    )
}

export default CanIDonate
