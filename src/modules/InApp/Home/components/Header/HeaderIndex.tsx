import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import StarSVG from '@src/assets/svgs/star.svg';
import SearchSVG from '@src/assets/svgs/search.svg';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import { stylesHeaderIndex } from '@src/modules/InApp/Home/components/Header/stylesHeaderIndex';
import PaddingContainer from '@src/components/containers/PaddingContainer';

export default function HeaderIndex() {

    function onSearch(){

    }

    return (
        <View style={stylesHeaderIndex.container}>
            <PaddingContainer>
                <View style={stylesHeaderIndex.flexContainer}>
                    <StarSVG width={'43'} height={'33'} />

                    <View style={stylesHeaderIndex.seachInputContainer}>
                        <InputDefault placeholder="Search the best t-shirts" style={stylesHeaderIndex.searchInput } />

                        <TouchableOpacity style={{position: 'absolute', left: 5}} onPressIn={onSearch}><SearchSVG /></TouchableOpacity>
                    </View>

                    <View style={stylesHeaderIndex.flexHamburguer}>
                        <View style={stylesHeaderIndex.padsHamburguer} />
                        <View style={stylesHeaderIndex.padsHamburguer} />
                        <View style={stylesHeaderIndex.padsHamburguer} />
                    </View>
                </View>
            </PaddingContainer>
        </View>
    );
}
