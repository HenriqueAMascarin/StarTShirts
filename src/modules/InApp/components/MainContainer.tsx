import { ReactNode } from 'react';
import { View } from 'react-native';

export default function MainContainer({ children }: { children: ReactNode }) {
    return (
        <View style={{ paddingTop: 49 }}>
            {children}
        </View>
    );
}
