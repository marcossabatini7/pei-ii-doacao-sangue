import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const bloodIcons = {
    'a+': icons.aplusIcon,
    'a-': icons.aminusIcon,
    'b+': icons.bplusIcon,
    'b-': icons.bminusIcon,
    'ab+': icons.abplusIcon,
    'ab-': icons.abminusIcon,
    'o+': icons.oplusIcon,
    'o-': icons.ominusIcon,
}

const DonationCard = (props) => {
    return (
        <View
            style={{
                width: SIZES.width - 44,
                height: 115,
                borderRadius: SIZES.padding,
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding,
                marginVertical: 4,
                borderColor: COLORS.secondaryWhite,
                borderWidth: 1,
                elevation: 2,
                shadowColor: COLORS.secondaryWhite,
                shadowRadius: 3,
            }}
        >
            <View
                style={{
                    flexDirection: 'column',
                }}
            >
                <Text
                    style={{
                        fontSize: 14,
                        color: COLORS.secondaryBlack,
                        marginVertical: 2,
                    }}
                >
                    Nome
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: COLORS.black,
                        fontWeight: 500,
                    }}
                >
                    {props.name}
                </Text>
                {props?.location ? <>
                    <Text
                        style={{
                            fontSize: 14,
                            color: COLORS.secondaryBlack,
                            marginVertical: 2,
                        }}
                    >
                        Local
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: COLORS.black,
                            fontWeight: 500,
                            marginVertical: 2,
                        }}
                    >
                        {props.location}
                    </Text>
                </> : null}
            </View>

            <View
                style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Image
                    source={bloodIcons[props.bloodType]}
                    resizeMode="contain"
                    style={{
                        marginBottom: 32,
                    }}
                />

                <TouchableOpacity onPress={props.onPress}>
                    <Text
                        style={{
                            ...FONTS.h4,
                            color: COLORS.primary,
                        }}
                    >
                        Solicitar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DonationCard
