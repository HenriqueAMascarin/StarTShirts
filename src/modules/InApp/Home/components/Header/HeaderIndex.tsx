import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import MiniStarSVG from '@src/assets/svgs/star_mini.svg';
import SearchSVG from '@src/assets/svgs/search.svg';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import { stylesHeaderIndex } from '@src/modules/InApp/Home/components/Header/stylesHeaderIndex';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import { DrawerModal } from '@src/components/modal/drawer/DrawerModal';

export default function HeaderIndex() {

    const [drawerModalState, changeDrawerModalState] = useState(false);

    function onSearch() {

    }

    function openDrawerModal() {
        changeDrawerModalState(!drawerModalState);
    }

    return (
        <View style={stylesHeaderIndex.container}>
            <View style={stylesHeaderIndex.headerContainer}>
                <PaddingContainer>
                    <View style={stylesHeaderIndex.flexContainer}>
                        <MiniStarSVG width={'31'} height={'29'} />

                        <View style={stylesHeaderIndex.seachInputContainer}>
                            <InputDefault placeholder="Search the best t-shirts" style={stylesHeaderIndex.searchInput} />

                            <TouchableOpacity style={{ position: 'absolute', left: 10 }} onPressIn={onSearch}><SearchSVG width={'16'} height={'15'} /></TouchableOpacity>
                        </View>

                        <TouchableOpacity style={stylesHeaderIndex.flexHamburguer} onPressIn={openDrawerModal}>
                            <View style={stylesHeaderIndex.padsHamburguer} />
                            <View style={stylesHeaderIndex.padsHamburguer} />
                            <View style={stylesHeaderIndex.padsHamburguer} />
                        </TouchableOpacity>
                    </View>
                </PaddingContainer>
            </View>
            {
                drawerModalState &&
                <DrawerModal title={'Menu'} position="flex-end" visibleStates={{ visible: drawerModalState, changeVisibleState: changeDrawerModalState }}>
                    <View></View>
                </DrawerModal>
            }
        </View>
    );
}
