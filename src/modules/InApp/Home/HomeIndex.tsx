import PaddingContainer from '@src/components/containers/PaddingContainer';
import TextDefault from '@src/components/texts/TextDefault';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { stylesSlogan } from '@src/modules/InApp/Home/styles/stylesSlogan';
import { stylesMainContent } from '@src/modules/InApp/Home/styles/stylesMainContent';

function SloganTShirt() {

    return (
        <View style={stylesSlogan.container}>
            <Image source={require('@src/assets/tshirt/images/white_tshirt.webp')} />

            <TextDefault style={stylesSlogan.text}>Most purchased t-shirt</TextDefault>
        </View>
    );
}

function MainContent() {
    return (
        <View style={stylesMainContent.container}>
            <PaddingContainer>
                <View>
                    
                </View>
            </PaddingContainer>
        </View>
    );
}

export default function HomeIndex() {

    return (
        <ScrollView>
            <SloganTShirt />

            <MainContent />
        </ScrollView>
    );
}
