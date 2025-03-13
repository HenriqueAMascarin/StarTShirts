import React from 'react';
import { View } from 'react-native';
import StarSVG from '@src/assets/svgs/star.svg';
import SearchSVG from '@src/assets/svgs/search.svg';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import { stylesHeaderIndex } from '@src/modules/InApp/Home/components/Header/stylesHeaderIndex';

export default function HeaderIndex() {
    return (
        <View style={{ display: 'flex', gap: 2, flexDirection: 'row' }}>
            <StarSVG width={'43'} height={'33'} />

            <InputDefault placeholder="Search the best t-shirts" style={{ flexGrow: 1 }}>
                <SearchSVG width={'33'} height={'23'} style={{ position: 'absolute', left: 0 }} />
            </InputDefault>

            <View style={{display: 'flex', gap: 2, flexDirection: 'column'}}>
                <View style={stylesHeaderIndex.padsHamburguer} />
                <View style={stylesHeaderIndex.padsHamburguer} />
                <View style={stylesHeaderIndex.padsHamburguer} />
            </View>
        </View>
    );
}
