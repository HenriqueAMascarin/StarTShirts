import { View } from 'react-native';
import StarSVG from '@src/assets/svgs/star.svg';
import { appColors } from '@src/utils/styleVariables';
import React from 'react';

export default function StarIconTopIndex() {
    return (
        <View style={{ height: 100, backgroundColor: appColors.white, marginBottom: 20 }}>
            <View style={
                { position: 'absolute', top: -78, left: -54, transform: [{ rotate: "10deg" }] }}>
                <StarSVG width={'183'} height={'173'} />
            </View>
        </View>
    );
}
