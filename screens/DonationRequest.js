import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import DonationCard from '../components/DonationCard'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import { donationRequests } from '../constants/data'

const DonationRequest = ({ navigation }) => {
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
                <Text style={{ ...FONTS.h4 }}>Requisição de Doação</Text>
            </View>
        )
    }

    function renderContent() {
        return (
            <ScrollView>
                {donationRequests.map((donationRequest) => (
                    <DonationCard
                        key={donationRequest.name}
                        name={donationRequest.name}
                        location={donationRequest.location}
                        postedDate={donationRequest.postedDate}
                    />
                ))}
            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View
                    style={{
                        marginHorizontal: 22,
                    }}
                >
                    {renderHeader()}
                    {renderContent()}
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default DonationRequest
