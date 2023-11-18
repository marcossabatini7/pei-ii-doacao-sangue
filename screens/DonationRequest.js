import { FontAwesome, Fontisto, MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useReducer, useState, useTransition } from 'react'
import { Alert, ScrollView, Share, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from '../components/Button'
import DonationCard from '../components/DonationCard'
import Input from '../components/Input'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import { BASE_URL } from "../constants/api"
import { validateInput } from '../utils/actions/campaignFormActions'
import { reducer } from '../utils/reducers/formReducers'

const initialState = {
    inputValidities: {
        name: false,
        bloodType: false,
    },
    formIsValid: false,
}

const bloodTypes = {
    a: '🅰️',
    b: '🅱️',
    ab: '🆎',
    o: '🅾️'
}

const DonationRequest = ({ navigation }) => {
    const [donors, setDonors] = useState([])
    const [isPending, startTransition] = useTransition()
    const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result, inputValue })
        },
        [dispatchFormState]
    )

    const fetchDonors = useCallback(async () => {
        const userString = await AsyncStorage.getItem('user')

        if (!userString) {
            navigation.navigate('Login')
        }

        const user = JSON.parse(userString)
        const name = formState?.inputValues?.name ?? '';
        const bloodType = formState?.inputValues?.bloodType.toUpperCase() ?? '';

        startTransition(() => {
            fetch(encodeURI(`${BASE_URL}/api/v1/donor?name=${name}&bloodType=${bloodType}`), {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${user?.token}`
                }
            })
                .then(async (r) => {
                    const data = await r.json()

                    if (r.ok && data?.length) {
                        setDonors((c) => [...c, ...data])
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        })
    }, [setDonors, formState?.inputValues])

    /**
     * @param {object} donor
    */
    async function shareDonor(donor) {
        try {
            const bloodType = `${donor.bloodType}`
                .toLowerCase()
                .replace('+', '')
                .replace('-', '')
            const result = await Share.share({
                message:
                    `*Preciso de Sangue* ❣️\n\n Olá *${donor.name}*, tudo bem\nNecessito de doação de sangue para o tipo ${bloodTypes[bloodType]??''} *${donor.bloodType}*.\nPosso contar com sua ajuda?`,
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
                {/* <Text style={{ ...FONTS.h4 }}>Requisitar Doação</Text> */}
            </View>
        )
    }

    function renderContent() {
        return (
            <ScrollView style={{ flex: 1 }}>
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
                            Solicite uma
                        </Text>
                        <Text
                            style={{ ...FONTS.h1, color: COLORS.primary }}
                        >
                            Doação
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
                            placeholder="Nome para busca"
                        />
                        <Input
                            icon="blood-drop"
                            iconPack={Fontisto}
                            id="bloodType"
                            onInputChanged={inputChangedHandler}
                            errorText={
                                formState.inputValidities['bloodType']
                            }
                            placeholder="Tipo sanguíneo"
                        />
                    </View>
                    <Button
                        title="Pesquisar"
                        filled
                        onPress={() => fetchDonors()}
                        style={{
                            width: '100%',
                        }}
                        isLoading={isPending}
                    />
                    <View style={{ marginVertical: 20 }}>
                        {donors.map((donor) => (
                            <DonationCard
                                key={donor.name}
                                name={donor.name}
                                location={donor.location}
                                postedDate={donor.postedDate}
                                onPress={() => shareDonor(donor)}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                {renderHeader()}
                {renderContent()}
            </PageContainer>
        </SafeAreaView>
    )
}

export default DonationRequest
