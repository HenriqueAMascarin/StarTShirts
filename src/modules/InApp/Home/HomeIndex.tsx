import AsyncStorage from '@react-native-async-storage/async-storage';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import TextDefault from '@src/components/texts/TextDefault';
import TextTitleH1 from '@src/components/texts/TextTitleH1';
import { keysLocalStorage } from '@src/utils/localStorage';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

export default function HomeIndex() {
    const [users, changeUsers] = useState<string | null>(null);
    const [logged, changeLogged] = useState<string | null>(null);
    const [resetRequests, changeResetRequests] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            changeUsers(await AsyncStorage.getItem(keysLocalStorage.usersKey));
            changeLogged(await AsyncStorage.getItem(keysLocalStorage.loggedUserKey));
            changeResetRequests(await AsyncStorage.getItem(keysLocalStorage.resetRequestsKey));
        })();
    }, []);

    return (
        <ScrollView>
            <PaddingContainer>
                <TextTitleH1>
                    Home
                </TextTitleH1>

                <TextDefault>
                    USERS: {users}
                </TextDefault>
                <TextDefault style={{ marginTop: 5 }}>
                    LOGGED USER: {logged}
                </TextDefault>
                <TextDefault style={{ marginTop: 5 }}>
                    RESET REQUESTS: {resetRequests}
                </TextDefault>
            </PaddingContainer>
        </ScrollView>
    );
}
