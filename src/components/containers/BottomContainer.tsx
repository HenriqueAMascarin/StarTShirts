import React, { ReactNode } from 'react';
import { View } from 'react-native';

export default function BottomContainer({children}: { children: ReactNode }) {
    return (
        <View style={{ paddingBottom: 100 }}>
            {children}
        </View>
    );
}
