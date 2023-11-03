import { FontAwesome, Fontisto, MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useReducer, useTransition } from 'react'
import { Image, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from '../components/Button'
import Input from '../components/Input'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS, images } from '../constants'
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'

const initialState = {
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false,
}

const Register = ({ navigation }) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState)
    const [isPending, startTransition] = useTransition()

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result, inputValue })
        },
        [dispatchFormState]
    )

    const register = useCallback(async () => {
        if (!formState.formIsValid) {
            return ToastAndroid.show('Formulário inválido!', ToastAndroid.BOTTOM)
        }

        startTransition(() => {
            fetch('http://10.3.152.15:8080/api/auth/signup', {
                method: 'post',
                body: JSON.stringify(formState.inputValues),
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(async (r) => {
                    const user = await r.json()
                    if (r.ok) {
                        ToastAndroid.show(user.message ?? 'Conta criada com sucesso!', ToastAndroid.BOTTOM)
                        user?.data?.user && await AsyncStorage.setItem('user', JSON.stringify(user?.data?.user))
                        navigation.navigate('Home')
                    }

                    ToastAndroid.show(user.message ?? 'Erro ao realizar o cadastro', ToastAndroid.BOTTOM)
                })
                .catch((e) => {
                    console.log(e)
                    ToastAndroid.show('Erro ao realizar o cadastro', ToastAndroid.BOTTOM)
                })
        })
    }, [formState.formIsValid, formState.inputValues, navigation])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            marginHorizontal: 22,
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={images.logo}
                            resizeMode="contain"
                            style={{
                                tintColor: COLORS.primary,
                                marginVertical: 22,
                            }}
                        />

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{ ...FONTS.h1, color: COLORS.primary }}
                            >
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
                            <Text
                                style={{ ...FONTS.h1, color: COLORS.primary }}
                            >
                                Donate
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
                                placeholder="Informe seu nome completo"
                            />
                            <Input
                                icon="email"
                                iconPack={MaterialIcons}
                                id="email"
                                onInputChanged={inputChangedHandler}
                                errorText={formState.inputValidities['email']}
                                placeholder="Informe seu e-mail"
                                keyboardType="email-address"
                            />
                            <Input
                                icon="lock"
                                iconPack={FontAwesome}
                                id="password"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['password']
                                }
                                autoCapitalize="none"
                                placeholder="Informe sua senha"
                                secureTextEntry
                            />
                            <Input
                                icon="phone"
                                iconPack={FontAwesome}
                                id="phoneNumber"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['phoneNumber']
                                }
                                placeholder="Informe seu telefone"
                            />

                            <Input
                                icon="blood-drop"
                                iconPack={Fontisto}
                                id="bloodType"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['bloodType']
                                }
                                placeholder="Informe seu tipo sanguíneo"
                            />

                            <Input
                                icon="location-on"
                                iconPack={MaterialIcons}
                                id="location"
                                onInputChanged={inputChangedHandler}
                                errorText={
                                    formState.inputValidities['location']
                                }
                                placeholder="Informe sua localização"
                            />
                        </View>
                        <Button
                            title="REGISTRAR"
                            filled
                            onPress={() => register(navigation)}
                            style={{
                                width: '100%',
                            }}
                            isLoading={isPending}
                        />

                        <View
                            style={{
                                marginVertical: 20,
                                flexDirection: 'row',
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3,
                                    color: COLORS.black,
                                }}
                            >
                                Já possui uma conta?{' '}
                            </Text>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                            >
                                <Text
                                    style={{
                                        ...FONTS.body3,
                                        color: COLORS.primary,
                                    }}
                                >
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Register
