import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS, SIZES, images } from '../constants'

const GetStarted = ({ navigation }) => {
    async function login() {
        const user = await AsyncStorage.getItem('user')
        if (user) {
            navigation.navigate('Home')
            return
        }
        navigation.navigate('Login')
    }

    async function register() {
        navigation.navigate('Register')
    }

    return (<SafeAreaView style={{ flex: 1 }}>
        <PageContainer>
            <View
                style={{
                    flex: 1,
                    marginHorizontal: 22,
                    alignItems: 'center',
                }}
            >
                <Image
                    source={images.logo}
                    style={{
                        tintColor: COLORS.primary,
                        marginVertical: 80,
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.h1, color: COLORS.primary }}>
                        Dare
                    </Text>
                    <Text
                        style={{
                            ...FONTS.h1,
                            color: COLORS.black,
                            marginHorizontal: 8,
                        }}
                    >
                        To
                    </Text>
                    <Text style={{ ...FONTS.h1, color: COLORS.primary }}>
                        Donate
                    </Text>
                </View>

                <View style={{ marginVertical: 40 }}>
                    <Text
                        style={{
                            ...FONTS.body3,
                            textAlign: 'center',
                        }}
                    >
                        Você pode doar para quem precisa e solicitar sangue se precisar
                    </Text>
                </View>
                <Button
                    title="LOGIN"
                    onPress={login}
                    style={{
                        width: '100%',
                        marginBottom: SIZES.padding,
                    }}
                />
                <Button
                    title="REGISTRAR"
                    onPress={register}
                    filled
                    style={{
                        width: '100%',
                    }}
                />
            </View>
        </PageContainer>
    </SafeAreaView>
    )
}

export default GetStarted
