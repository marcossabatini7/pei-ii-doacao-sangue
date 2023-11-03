import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Slideshow from 'react-native-image-slider-show'
import { SafeAreaView } from 'react-native-safe-area-context'

import DonationCard from '../components/DonationCard'
import { COLORS, FONTS, SIZES } from '../constants'
import { categories } from '../constants/data'

const Home = ({ navigation }) => {
    const [position, setPosition] = useState(0)
    const [dataSource, setDataSource] = useState([
        {
            url: 'https://i.ibb.co/YXKSm0q/16262070-tp227-facebookeventcover-06.jpg',
        },
        {
            url: 'https://i.ibb.co/vhBbSQf/16262056-tp227-facebookeventcover-04.jpg',
        },
    ])

    useEffect(() => {
        const toggle = setInterval(() => {
            setPosition(position === dataSource.length - 1 ? 0 : position + 1)
        }, 10000)

        return () => clearInterval(toggle)
    })

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 12,
                }}
            >
                <TouchableOpacity onPress={() => console.log('Pressed')}>
                    <MaterialCommunityIcons
                        name="view-dashboard"
                        size={28}
                        color={COLORS.primary}
                    />
                </TouchableOpacity>
                <View>
                    <View
                        style={{
                            height: 6,
                            width: 6,
                            backgroundColor: COLORS.primary,
                            borderRadius: 3,
                            position: 'absolute',
                            right: 5,
                            top: 5,
                        }}
                    ></View>
                    <TouchableOpacity onPress={() => console.log('Pressed')}>
                        <Ionicons
                            name="notifications-outline"
                            size={28}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderSliderBanner() {
        return (
            <View
                style={{
                    height: 200,
                    width: '100%',
                }}
            >
                <Slideshow position={position} dataSource={dataSource} />
            </View>
        )
    }

    function renderFeatures() {
        return (
            <View
                style={{
                    marginVertical: SIZES.padding,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}
            >
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.title}
                        style={{
                            height: 120,
                            width: 110,
                            borderColor: COLORS.secondaryWhite,
                            borderWidth: 2,
                            backgroundColor: COLORS.white,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 22,
                        }}
                        onPressIn={() => navigation.navigate(category.page)}
                    >
                        <Image
                            source={category.icon}
                            resizeMode="contain"
                            style={{
                                height: 40,
                                width: 40,
                                marginVertical: 12,
                            }}
                        />
                        <Text
                            style={{
                                ...FONTS.body3,
                                color: COLORS.secondaryBlack,
                            }}
                        >
                            {category.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    function renderDonationCard() {
        return (
            <View>
                <Text
                    style={{
                        ...FONTS.body3,
                        fontWeight: 'bold',
                        color: COLORS.secondaryBlack,
                    }}
                >
                    Requisição de doação
                </Text>
                <DonationCard
                    name="Marcos Sabatini"
                    location="Hospital Evangélico de Cachoeiro de Itapemirim"
                    bloodType="A+"
                    postedDate="5 min"
                    onPress={() => console.log('Pressed')}
                />
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ marginHorizontal: 22 }}>
                {renderHeader()}
                {renderSliderBanner()}
                {renderFeatures()}
                {renderDonationCard()}
            </View>
        </SafeAreaView>
    )
}

export default Home
