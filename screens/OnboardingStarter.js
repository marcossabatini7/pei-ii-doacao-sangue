import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

const Dots = ({ selected }) => {
    let backgroundColor
    backgroundColor = selected ? '#ff2156' : '#808080'
    return (<View
        style={{
            height: 5,
            width: 5,
            marginHorizontal: 3,
            backgroundColor,
        }}
    />)
}

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{
            marginRight: 12,
        }}
        {...props}
    >
        <Text style={{ color: '#ff2156' }}>Finalizar</Text>
    </TouchableOpacity>
)

const OnboardingStarter = ({ navigation }) => {
    return (
        <Onboarding
            onSkip={() => navigation.navigate('GetStarted')}
            onDone={() => navigation.navigate('GetStarted')}
            DotComponent={Dots}
            bottomBarColor="#ffffff"
            DoneButtonComponent={Done}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: (
                        <Image
                            source={require('../assets/images/onboarding_1.png')}
                        />
                    ),
                    title: 'Encontre doadores',
                    subtitle:
                        'Crie uma campanha e anuncie sua necessidade por doações',
                },
                {
                    backgroundColor: '#fff',
                    image: (
                        <Image
                            source={require('../assets/images/onboarding_2.png')}
                        />
                    ),
                    title: 'Encontre doadores',
                    subtitle:
                        'Ou busque por doadores pelo tipo sanguíneo desejado',
                },
            ]}
        />
    )
}

export default OnboardingStarter
