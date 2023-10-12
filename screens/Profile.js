import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons'
import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import PageContainer from '../components/PageContainer'
import { COLORS, FONTS, SIZES, images } from '../constants'

const Profile = ({ navigation }) => {
    const [address, setAddress] = useState('Carregando...')
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestBackgroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permissão para acessar localização foi negada')
                return
            }

            let location = await Location.getCurrentPositionAsync()
            const text = JSON.stringify(location)
            const parsedData = JSON.parse(text)
            const longitude = parsedData.coords.longitude
            const latitude = parsedData.coords.latitude
            let address = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            })

            setAddress(
                `${address[0].name},${address[0].district},${address[0].city}`
            )
        }

        getPermissions()
    }, [])
    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
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
                <Text style={{ ...FONTS.h4 }}>Profile</Text>
                <TouchableOpacity onPress={() => console.log('Pressed')}>
                    <Feather name="edit" size={24} color={COLORS.black} />
                </TouchableOpacity>
            </View>
        )
    }

    function renderProfile() {
        return (
            <View
                style={{
                    alignItems: 'center',
                    marginVertical: 22,
                }}
            >
                <Image
                    source={images.user3}
                    resizeMode="contain"
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: SIZES.padding,
                    }}
                />
                <Text style={{ ...FONTS.h2, marginTop: 24 }}>Fahim Ekan</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical: SIZES.padding,
                    }}
                >
                    <EvilIcons
                        name="location"
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text
                        style={{
                            ...FONTS.body4,
                            marginLeft: 8,
                        }}
                    >
                        {address}
                    </Text>
                </View>
            </View>
        )
    }

    function renderButtons() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={{
                        backgroundColor: COLORS.secondary,
                        width: 150,
                        height: 50,
                        borderRadius: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Ionicons
                        name="person-add-outline"
                        size={24}
                        color={COLORS.white}
                    />
                    <Text
                        style={{
                            ...FONTS.body4,
                            color: COLORS.white,
                            marginLeft: 12,
                        }}
                    >
                        Call Now
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => console.log('Pressed')}
                    style={{
                        backgroundColor: COLORS.primary,
                        width: 150,
                        height: 50,
                        borderRadius: SIZES.padding,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Entypo name="forward" size={24} color={COLORS.white} />
                    <Text
                        style={{
                            ...FONTS.body4,
                            color: COLORS.white,
                            marginLeft: 12,
                        }}
                    >
                        Request
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderFeatures() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 22,
                }}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.h1 }}>A+</Text>
                    <Text style={{ ...FONTS.body3 }}>Tipo</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.h1 }}>05</Text>
                    <Text style={{ ...FONTS.body3 }}>Doações</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.h1 }}>02</Text>
                    <Text style={{ ...FONTS.body3 }}>Requisições</Text>
                </View>
            </View>
        )
    }

    function renderSettings() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12,
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    <MaterialCommunityIcons
                        name="calendar-clock-outline"
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text
                        style={{
                            ...FONTS.body3,
                            marginLeft: 24,
                        }}
                    >
                        Disponível Para Doação
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12,
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    <Ionicons
                        name="share-outline"
                        size={24}
                        color={COLORS.primary}
                    />
                    <Text
                        style={{
                            ...FONTS.body3,
                            marginLeft: 24,
                        }}
                    >
                        Convidar Um Amigo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12,
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    <Feather name="info" size={24} color={COLORS.primary} />
                    <Text
                        style={{
                            ...FONTS.body3,
                            marginLeft: 24,
                        }}
                    >
                        Obter ajuda
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 12,
                    }}
                    onPress={() => console.log('Pressed')}
                >
                    <AntDesign name="logout" size={24} color={COLORS.primary} />
                    <Text
                        style={{
                            ...FONTS.body3,
                            marginLeft: 24,
                        }}
                    >
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{ marginHorizontal: 22 }}>
                    {renderHeader()}
                    {renderProfile()}
                    {renderButtons()}
                    {renderFeatures()}
                    {renderSettings()}
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Profile
