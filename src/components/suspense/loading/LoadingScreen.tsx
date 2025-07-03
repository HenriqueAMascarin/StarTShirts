import { View } from 'react-native';
import TextTitleH1 from '@src/components/texts/h1/TextTitleH1';
import React from 'react';

export default function LoadingScreen(){
    return (
        <View>
            <TextTitleH1>
                Loading...
            </TextTitleH1>
        </View>
    );
}
