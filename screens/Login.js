import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useEffect, useReducer, useTransition } from 'react'
import { Image, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
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

const Login = ({ navigation }) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState)
    const [isPending, startTransition] = useTransition()

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result, inputValue })
        },
        [dispatchFormState]
    )

    const login = useCallback(async () => {
        if (!formState.formIsValid) {
            return ToastAndroid.show('Formulário inválido!', ToastAndroid.BOTTOM)
        }

        startTransition(() => {
            fetch('http://10.3.152.15:8080/api/v1/auth/login', {
                method: 'post',
                body: JSON.stringify({
                    email: formState?.inputValues?.email,
                    password: formState?.inputValues?.password
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(async (r) => {
                    const { data: { user }, message } = await r.json()

                    if (r.ok) {
                        await AsyncStorage.setItem('user', JSON.stringify(user))
                        ToastAndroid.show(message ?? 'Login realizado com sucesso!', ToastAndroid.BOTTOM)
                        navigation.navigate('Home')
                    }

                    ToastAndroid.show(message, ToastAndroid.BOTTOM)
                })
                .catch((e) => {
                    console.log(e)
                    ToastAndroid.show('Erro ao realizar o login', ToastAndroid.BOTTOM)
                })
        })
    }, [formState.formIsValid, formState.inputValues])

    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            console.log({ user })
            if (user) {
                navigation.navigate('Home')
            }
        })
        // navigation.navigate('Home')
    }, [navigation])

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
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
                        resizeMode="contain"
                        style={{
                            tintColor: COLORS.primary,
                            marginVertical: 48,
                        }}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h1,
                                color: COLORS.black,
                                marginHorizontal: 8,
                            }}
                        >
                            Doe
                        </Text>
                        <Text style={{ ...FONTS.h1, color: COLORS.primary }}>
                            Sangue
                        </Text>
                    </View>

                    <View style={{ marginVertical: 20 }}>
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
                            errorText={formState.inputValidities['password']}
                            autoCapitalize="none"
                            placeholder="Informe sua senha"
                            secureTextEntry
                        />
                    </View>
                    <Button
                        title="LOGIN"
                        filled
                        onPress={login}
                        style={{
                            width: '100%',
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ResetPassword')}
                    >
                        <Text
                            style={{
                                ...FONTS.body3,
                                color: COLORS.primary,
                                marginVertical: 12,
                            }}
                        >
                            Esqueci Minha Senha
                        </Text>
                    </TouchableOpacity>

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
                            Não possui conta?{' '}
                        </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register')}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3,
                                    color: COLORS.primary,
                                }}
                            >
                                Registrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Login
