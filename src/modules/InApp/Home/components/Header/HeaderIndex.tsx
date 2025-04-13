import React, { useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import MiniStarSVG from '@src/assets/svgs/star_mini.svg';
import SearchSVG from '@src/assets/svgs/search.svg';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import { stylesHeaderIndex } from '@src/modules/InApp/Home/components/Header/stylesHeaderIndex';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import { DrawerModal } from '@src/components/modal/drawer/DrawerModal';
import TextDefault from '@src/components/texts/TextDefault';
import { stylesMenuDrawerModal } from '@src/modules/InApp/Home/components/Header/stylesMenuDrawerModal';
import { stylesGlobalModal } from '@src/components/modal/stylesGlobalModal';
import { useRoute } from '@react-navigation/native';

type TypeMenuDrawerModal = {
    stateDrawerModal: boolean,
    changeStateDrawerModal: React.Dispatch<React.SetStateAction<boolean>>
}

function MenuDrawerModal({ stateDrawerModal, changeStateDrawerModal }: TypeMenuDrawerModal) {

    const { path } = useRoute();

    const links = [
        { label: 'Home', active: path?.includes('home'), textAnimatedOpacity: new Animated.Value(0) },
        { label: 'WishList', active: path?.includes('WishList'), textAnimatedOpacity: new Animated.Value(0) },
        { label: 'Cart', active: path?.includes('Cart'), textAnimatedOpacity: new Animated.Value(0) },
        { label: 'Purchases', active: path?.includes('Purchases'), textAnimatedOpacity: new Animated.Value(0) },
        { label: 'Account', active: path?.includes('Account'), textAnimatedOpacity: new Animated.Value(0) },
    ];

    const renderLinkMenu = ({ label, active, textAnimatedOpacity }: typeof links[0]) => {

        Animated.timing(textAnimatedOpacity, {
            toValue: active ? 1 : 0,
            delay: 0,
            duration: 200,
            useNativeDriver: true,
        });

        return (
            <TouchableOpacity style={[stylesMenuDrawerModal.touchableBtn, stylesGlobalModal.bottomLine]}>
                <TextDefault style={[{ opacity: textAnimatedOpacity }]}>{label}</TextDefault>
            </TouchableOpacity>
        );
    };

    return (
        <>
            {stateDrawerModal &&
                <DrawerModal title={'Menu'} position="flex-end" visibleStates={{ visible: stateDrawerModal, changeVisibleState: changeStateDrawerModal }}>
                    <View style={stylesMenuDrawerModal.flexContainer}>
                        {links.map(renderLinkMenu)};

                        <TouchableOpacity style={[stylesMenuDrawerModal.touchableBtn, stylesGlobalModal.bottomLine]}><TextDefault style={stylesMenuDrawerModal.exitText}>Sign Out</TextDefault></TouchableOpacity>
                    </View>
                </DrawerModal>
            }
        </>
    );
}

export default function HeaderIndex() {

    function onSearch() {

    }

    function openDrawerModal() {
        changeDrawerModalState(!drawerModalState);
    }

    const [drawerModalState, changeDrawerModalState] = useState(false);


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

            <MenuDrawerModal stateDrawerModal={drawerModalState} changeStateDrawerModal={changeDrawerModalState} />

        </View>
    );
}
