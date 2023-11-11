import { icons, images } from '../constants'

export const donors = [
    {
        id: '1',
        image: images.user1,
        name: 'João Silva',
        location: 'Vitória',
        bloodType: 'A+',
    },
    {
        id: '2',
        image: images.user2,
        name: 'Maria da Silva',
        location: 'Cachoeiro de Itapemirim',
        bloodType: 'AB+',
    },
    {
        id: '3',
        image: images.user3,
        name: 'Romário Romeu',
        location: 'Serra',
        bloodType: 'B-',
    },
    {
        id: '4',
        image: images.user4,
        name: 'João José',
        location: 'Vitória',
        bloodType: 'O+',
    },
    {
        id: '5',
        image: images.user5,
        name: 'Carolina Aparecida',
        location: 'Carapina, Serra',
        bloodType: 'A+',
    },
    {
        id: '6',
        image: images.user6,
        name: 'Lucas Enzo',
        location: 'Mohammedpur, Dhaka',
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
        icon: icons.categoryIcon2,
        title: 'Doações',
        page: ''
    },
    {
        icon: icons.categoryIcon3,
        title: 'Solicitar Doação',
        page: ''
    },
    {
        icon: icons.categoryIcon4,
        title: 'Assistente',
        page: ''
    },
    {
        icon: icons.categoryIcon5,
        title: 'Relatório',
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
