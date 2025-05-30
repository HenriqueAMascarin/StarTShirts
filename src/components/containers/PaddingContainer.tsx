import { ReactNode } from 'react';
import { View } from 'react-native';

export default function PaddingContainer({children}: { children: ReactNode }) {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            {children}
        </View>
    );
}
