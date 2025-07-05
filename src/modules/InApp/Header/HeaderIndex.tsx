import React, { MutableRefObject, useRef, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import MiniStarSVG from '@src/assets/svgs/star_mini.svg';
import SearchSVG from '@src/assets/svgs/search.svg';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import { stylesHeaderIndex } from '@src/modules/InApp/Header/styles/stylesHeaderIndex';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import DrawerModal from '@src/components/modal/drawer/DrawerModal';
import TextDefault from '@src/components/texts/TextDefault';
import { stylesMenuDrawerModal } from '@src/modules/InApp/Header/styles/stylesMenuDrawerModal';
import { stylesGlobalModal } from '@src/components/modal/stylesGlobalModal';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@src/routes/AppRoutes';
import { keysLocalStorage } from '@src/utils/localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useDrawerModalHook from '@src/components/modal/drawer/hooks/useDrawerModalHook';

type TypeMenuDrawerModal = {
    stateDrawerModal: boolean,
    changeStateDrawerModal: React.Dispatch<React.SetStateAction<boolean>>
};

type TypeLinks = {
    label: string;
    routeName: keyof RootStackParamList;
    textAnimatedOpacity: MutableRefObject<Animated.Value>;
    keyItem: number;
}[];

function MenuDrawerModal({ stateDrawerModal, changeStateDrawerModal }: TypeMenuDrawerModal) {

    const navigation = useNavigation();

    const links: TypeLinks = [
        { label: 'Home', routeName: 'home', textAnimatedOpacity: useRef(new Animated.Value(0.6)), keyItem: 0 },
        { label: 'Wish List', routeName: 'home/wishList', textAnimatedOpacity: useRef(new Animated.Value(0.6)), keyItem: 1 },
        { label: 'Cart', routeName: 'home/cart', textAnimatedOpacity: useRef(new Animated.Value(0.6)), keyItem: 2 },
        { label: 'Purchases', routeName: 'home/purchases', textAnimatedOpacity: useRef(new Animated.Value(0.6)), keyItem: 3 },
        { label: 'Account', routeName: 'home/account', textAnimatedOpacity: useRef(new Animated.Value(0.6)), keyItem: 4 },
    ];

    function setupListenerNavigation() {
        navigation.removeListener('state', () => { });

        navigation.addListener('state', ({ data }) => {

            if (data?.state?.routes) {
                const currentlyRoute = data?.state?.routes?.[data?.state?.routes?.length - 1];

                if (currentlyRoute) {
                    for (let index = 0; index < links.length; index++) {
                        Animated.timing(links[index].textAnimatedOpacity.current, {
                            toValue: currentlyRoute?.name.includes(links[index].routeName) ? 1 : 0.6,
                            delay: 0,
                            duration: 200,
                            useNativeDriver: true,
                        }).start();
                    }
                }
            }
        });
    }
    setupListenerNavigation();

    const navigateFn = (route: keyof RootStackParamList) => {
        navigation.navigate(route as never);

        changeStateDrawerModal(!stateDrawerModal);
    };

    const renderLinkMenu = ({ label, textAnimatedOpacity, routeName, keyItem }: typeof links[0]) => {

        const onNavigate = () => {
            navigateFn(routeName);
        };

        return (
            <TouchableOpacity style={[stylesMenuDrawerModal.touchableBtn, stylesGlobalModal.bottomLine]} key={keyItem} onPressIn={onNavigate}>
                <View style={stylesGlobalModal.paddingContainer}>
                    <TextDefault style={[stylesMenuDrawerModal.textMenu, { opacity: textAnimatedOpacity.current }]}>{label}</TextDefault>
                </View>
            </TouchableOpacity>
        );
    };

    async function exitAccount() {
        await AsyncStorage.removeItem(keysLocalStorage.loggedUserKey);

        navigateFn('login');
    }

    return (
        <>
            {stateDrawerModal ?
                <DrawerModal title={'Menu'} position="flex-end" visibleStates={{ visible: stateDrawerModal, changeVisibleState: changeStateDrawerModal }}>
                    <View style={stylesMenuDrawerModal.flexContainer}>
                        {links ? links.map(renderLinkMenu) : null}

                        <TouchableOpacity style={[stylesMenuDrawerModal.touchableBtn, stylesGlobalModal.bottomLine]} onPressIn={exitAccount}>
                            <View style={stylesGlobalModal.paddingContainer}>
                                <TextDefault style={[stylesMenuDrawerModal.exitText, stylesMenuDrawerModal.textMenu]}>Sign Out</TextDefault>
                            </View>
                        </TouchableOpacity>
                    </View>
                </DrawerModal>
                :
                null
            }
        </>
    );
}

export default function HeaderIndex() {

    const navigation = useNavigation();

    function onSearch() {

    }

    const {drawerModalState, changeDrawerModalState} = useDrawerModalHook();

    function openDrawerModal() {
        changeDrawerModalState(!drawerModalState);
    }


    function goToHomeRoute(){
        navigation.navigate('home');
    }

    return (
        <View style={stylesHeaderIndex.container}>
            <View style={stylesHeaderIndex.headerContainer}>
                <PaddingContainer>
                    <View style={stylesHeaderIndex.flexContainer}>
                        <TouchableOpacity onPressIn={goToHomeRoute}>
                            <MiniStarSVG width={'31'} height={'29'} />
                        </TouchableOpacity>

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
