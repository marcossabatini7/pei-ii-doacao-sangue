import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useEffect, useState, useTransition } from 'react'
import { Alert, Image, ScrollView, Share, Text, TouchableOpacity, View } from 'react-native'
import Slideshow from 'react-native-image-slider-show'
import { SafeAreaView } from 'react-native-safe-area-context'

import differenceInDays from 'date-fns/differenceInDays'
import Button from '../components/Button'
import DonationCard from '../components/DonationCard'
import { COLORS, FONTS, SIZES } from '../constants'
import { BASE_URL } from "../constants/api"
import { categories } from '../constants/data'

const bloodTypes = {
    a: '🅰️',
    b: '🅱️',
    ab: '🆎',
    o: '🅾️'
}

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
        const [page, setPage] = useState(1)
        const [campaigns, setCampaigns] = useState([])
        const [isPending, startTransition] = useTransition()

        async function shareCampaign(campaign) {
            try {
                const bloodType = `${campaign.bloodType}`
                    .toLowerCase()
                    .replace('+', '')
                    .replace('-', '')
                const result = await Share.share({
                    message:
                        `*Campanha de Doação de Sangue* ❣️\n\n🗓️ *Campanha:* ${campaign.name}\n${bloodTypes[bloodType]} *Tipo sanguíneo:* ${campaign.bloodType}\n📞 *Telefone para contato:* ${campaign.phoneNumber}\n📌 *Local de coleta:* ${campaign.location}`,
                });
                if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                        // shared with activity type of result.activityType
                    } else {
                        // shared
                    }
                } else if (result.action === Share.dismissedAction) {
                    // dismissed
                }
            } catch (error) {
                Alert.alert(error.message);
            }
        }

        const fetchCampains = useCallback(async () => {
            const userString = await AsyncStorage.getItem('user')

            if (!userString) {
                navigation.navigate('Login')
            }

            const user = JSON.parse(userString)

            startTransition(() => {
                fetch(`${BASE_URL}/api/v1/campaign?page=${page ?? 1}`, {
                    method: 'get',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${user?.token}`
                    }
                })
                    .then(async (r) => {
                        const { data } = await r.json()

                        if (r.ok) {
                            setCampaigns((c) => [...c, ...data])
                            setPage((p) => p + 1)
                        }
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            })
        }, [page, setCampaigns])

        useEffect(() => {
            fetchCampains()

            return () => {
                setCampaigns([])
            }
        }, [])

        return (
            <ScrollView>
                <Text
                    style={{
                        ...FONTS.body3,
                        fontWeight: 'bold',
                        color: COLORS.secondaryBlack,
                    }}
                >Últimas campanhas</Text>
                {!isPending && campaigns?.length ? <>
                    {campaigns?.map((c) => {
                        const postedDate = differenceInDays(new Date(), new Date(c.created_at));

                        return (<DonationCard
                            key={c?.id}
                            name={c?.name}
                            location={c?.location}
                            bloodType={c?.bloodType?.toLowerCase()}
                            postedDate={postedDate}
                            onPress={() => shareCampaign(c)}
                        />)
                    })}
                </> : null}
                {!isPending && campaigns?.length ? <Button
                    title="Carregar Mais"
                    onPress={() => fetchCampains()}
                    style={{
                        width: '100%',
                        marginBottom: SIZES.padding,
                    }}
                /> : null}
            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={{ marginHorizontal: 22 }}>
                    {renderHeader()}
                    {/* {renderSliderBanner()} */}
                    {renderFeatures()}
                    {renderDonationCard()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
