import { FontAwesome, Fontisto, MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useEffect, useReducer, useState, useTransition } from 'react'
import { Alert, ScrollView, Share, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from '../components/Button'
import Input from '../components/Input'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import { validateInput } from '../utils/actions/campaignFormActions'
import { reducer } from '../utils/reducers/formReducers'

const initialState = {
    inputValidities: {
        name: false,
        phoneNumber: false,
        bloodType: false,
        location: false,
    },
    formIsValid: false,
}

const bloodTypes = {
    a: '🅰️',
    b: '🅱️',
    ab: '🆎',
    o: '🅾️'
}

const Campaign = ({ navigation }) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState)
    const [isPending, startTransition] = useTransition()
    const [campaign, setCampaign] = useState()

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result, inputValue })
        },
        [dispatchFormState]
    )

    const startCampaign = useCallback(async () => {
        if (!formState.formIsValid) {
            return ToastAndroid.show('Formulário inválido!', ToastAndroid.BOTTOM)
        }

        const user = JSON.parse(await AsyncStorage.getItem('user'))

        if (!user) {
            navigation.navigate('Login')
        }

        startTransition(() => {
            fetch('http://10.3.152.15:8080/api/v1/campaign', {
                method: 'post',
                body: JSON.stringify({
                    name: formState?.inputValues?.name,
                    bloodType: formState?.inputValues?.bloodType.toUpperCase(),
                    phoneNumber: formState?.inputValues?.phoneNumber,
                    location: formState?.inputValues?.location,
                    userId: user.id
                }),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${user?.token}`
                }
            })
                .then(async (r) => {
                    const { data, errors, message } = await r.json()

                    if (r.ok) {
                        setCampaign(data?.campaign)
                        ToastAndroid.show(message ?? 'Campanha criada com sucesso!', ToastAndroid.BOTTOM)
                    }

                    const errorValidation = errors ? Object.keys(errors).map((k) => errors[k][0]).at(0) : null

                    ToastAndroid.show(errorValidation ?? message ?? 'Erro ao iniciar a campanha', ToastAndroid.BOTTOM)
                })
                .catch((e) => {
                    console.log(e)
                    ToastAndroid.show('Erro ao iniciar a campanha', ToastAndroid.BOTTOM)
                })
        })
    }, [formState.formIsValid, formState.inputValues])

    async function shareCampaign() {
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

    useEffect(() => {
        return () => {
            setCampaign()
        }
    }, [])

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 60
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
                {/* <Text style={{ ...FONTS.h4 }}>Retornar para Home</Text> */}
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                {renderHeader()}
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            marginHorizontal: 22,
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 30
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h1,
                                    color: COLORS.black,
                                    marginHorizontal: 8,
                                }}
                            >
                                Inicie uma
                            </Text>
                            <Text
                                style={{ ...FONTS.h1, color: COLORS.primary }}
                            >
                                Campanha
                            </Text>
                        </View>

                        <View style={{ marginVertical: 20 }}>
                            <Input
                                icon="user"
                                iconPack={FontAwesome}
                                id="name"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['name']
                                }
                                placeholder="Informe o nome completo"
                            />
                            <Input
                                icon="phone"
                                iconPack={FontAwesome}
                                id="phoneNumber"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['phoneNumber']
                                }
                                placeholder="Informe o telefone de contato"
                            />

                            <Input
                                icon="blood-drop"
                                iconPack={Fontisto}
                                id="bloodType"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['bloodType']
                                }
                                placeholder="Informe o tipo sanguíneo"
                            />

                            <Input
                                icon="location-on"
                                iconPack={MaterialIcons}
                                id="location"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['location']
                                }
                                placeholder="Informe a localização"
                            />
                        </View>
                        {!campaign &&
                            <Button
                                title="Iniciar Agora"
                                filled
                                onPress={() => startCampaign()}
                                style={{
                                    width: '100%',
                                }}
                                isLoading={isPending}
                            />
                        }
                        {campaign &&
                            <Button
                                title="Compartilhar"
                                filled
                                onPress={() => shareCampaign()}
                                style={{
                                    width: '100%',
                                }}
                            />
                        }
                    </View>
                </ScrollView>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Campaign
