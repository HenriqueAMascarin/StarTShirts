import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import StarSVG from '@src/assets/svgs/star.svg';
import SearchSVG from '@src/assets/svgs/search.svg';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import { stylesHeaderIndex } from '@src/modules/InApp/Home/components/Header/stylesHeaderIndex';
import PaddingContainer from '@src/components/containers/PaddingContainer';

export default function HeaderIndex () {
    return (
        <View style={stylesHeaderIndex.container}>
            <PaddingContainer>
                <View style={stylesHeaderIndex.flexContainer}>
                    <StarSVG width={'43'} height={'33'} />

                    <InputDefault placeholder="Search the best t-shirts" style={{ flexGrow: 1 }} />

                    <View style={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
                        <View style={stylesHeaderIndex.padsHamburguer} />
                        <View style={stylesHeaderIndex.padsHamburguer} />
                        <View style={stylesHeaderIndex.padsHamburguer} />
                    </View>
                </View>
            </PaddingContainer>
        </View>
    );
}
