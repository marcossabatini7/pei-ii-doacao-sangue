import React from 'react'
import { Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from '../components/Button'
import PageContainer from '../components/PageContainer'
import { images } from '../constants'

// Let's validate the forms
const SuccessVerification = ({ navigation }) => {
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
                    <Image
                        source={images.success}
                        resizeMode="contain"
                        style={{
                            marginBottom: 40,
                        }}
                    />
                    <Button
                        title="FINALIZAR"
                        filled
                        onPress={() =>
                            navigation.navigate('BottomTabNavigation')
                        }
                        style={{
                            width: '100%',
                        }}
                    />
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default SuccessVerification
