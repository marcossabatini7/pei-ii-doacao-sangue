import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import OTPTextInput from 'react-native-otp-textinput'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from '../components/Button'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'

const OTPVerification = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 22,
                    }}
                >
                    <View>
                        <OTPTextInput
                            textInputStyle={{
                                backgroundColor: COLORS.secondaryWhite,
                                borderColor: COLORS.secondaryWhite,
                                borderWidth: 1,
                                borderRadius: 6,
                                borderBottomWidth: 1,
                            }}
                            inputCount={4}
                            tintColor={COLORS.primary}
                        />
                        <TouchableOpacity
                            style={{
                                marginVertical: 10,
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3,
                                    color: COLORS.primary,
                                    textAlign: 'right',
                                }}
                            >
                                Reenviar código
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Button
                        title="VERIFICAR"
                        filled
                        onPress={() =>
                            navigation.navigate('SuccessVerification')
                        }
                        style={{
                            width: '100%',
                            marginVertical: 12,
                        }}
                    />
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default OTPVerification
