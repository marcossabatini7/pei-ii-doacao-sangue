import { icons, images } from '../constants'

export const donors = [
    {
        id: '1',
        image: images.logo,
        name: 'João Silva',
        location: 'Vitória',
        bloodType: 'A+',
    },
    {
        id: '2',
        image: images.logo,
        name: 'Maria da Silva',
        location: 'Cachoeiro de Itapemirim',
        bloodType: 'AB+',
    },
    {
        id: '3',
        image: images.logo,
        name: 'Romário Romeu',
        location: 'Serra',
        bloodType: 'B-',
    },
    {
        id: '4',
        image: images.logo,
        name: 'João José',
        location: 'Vitória',
        bloodType: 'O+',
    },
    {
        id: '5',
        image: images.logo,
        name: 'Carolina Aparecida',
        location: 'Carapina, Serra',
        bloodType: 'A+',
    },
    {
        id: '6',
        image: images.logo,
        name: 'Lucas Enzo',
        location: 'Vitória',
        bloodType: 'B+',
    },
]

export const categories = [
    {
        icon: icons.categoryIcon6,
        title: 'Campanha',
        page: 'Campaign'
    },
    {
        icon: icons.categoryIcon1,
        title: 'Encontre Doadores',
        page: 'DonationRequest'
    },
    {
        icon: icons.categoryIcon4,
        title: 'Posso doar?',
        page: 'CanIDonate'
    },
    {
        icon: icons.categoryIcon2,
        title: 'Saiba mais',
        page: 'SeeMore'
    },
    {
        icon: icons.categoryIcon5,
        title: 'Perfil',
        page: ''
    },
]

export const donationRequests = [
    {
        name: 'Carlos Enzo',
        location: 'Vila Velha Hospital',
        postedDate: '5 min',
    },
    {
        name: 'Carlos Enzo',
        location: 'Vila Velha Hospital',
        postedDate: '5 min',
    },
    {
        name: 'Carlos Enzo',
        location: 'Vila Velha Hospital',
        postedDate: '5 min',
    },
    {
        name: 'Carlos Enzo',
        location: 'Vila Velha Hospital',
        postedDate: '5 min',
    },
    {
        name: 'Carlos Enzo',
        location: 'Vila Velha Hospital',
        postedDate: '5 min',
    },
    {
        name: 'Carlos Enzo',
        location: 'Vila Velha Hospital',
        postedDate: '5 min',
    },
]

export const features = [
    {
        id: '1',
        substance: 'Glicose',
        volume: '6 mmol/L',
    },
    {
        id: '2',
        substance: 'Colesterol',
        volume: '6.2 mmol/L',
    },
    {
        //  TODO: O QUE É Bilirubin?
        id: '3',
        substance: 'Bilirubin',
        volume: '12 mmol/L',
    },
    {
        id: '4',
        substance: 'RBC',
        volume: '3.6 ml/L',
    },
    {
        id: '5',
        substance: 'MCV',
        volume: '102 fl',
    },
    {
        id: '6',
        substance: '276 bL',
        volume: 'Plaquetas',
    },
]
