import { ScrollView, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePasswordResetSchema, typePasswordResetSchema } from '@src/modules/FirstSteps/PasswordReset/usePasswordResetSchema';
import React from 'react';
import TextTitleH1 from '@src/components/texts/TextTitleH1';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import { globalStyles } from '@src/modules/FirstSteps/globalStyles';
import ButtonDefault from '@src/components/buttons/ButtonDefault';
import InputPassword from '@src/components/inputs/Password/InputPassword';
import StarIconTopIndex from '@src/modules/FirstSteps/components/StarIconTop/StarIconTopIndex';
import { RootStackParamList } from '@src/routes/AppRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useRef } from 'react';
import { getResetRequests } from '@src/services/user/passwordReset/methods/getResetRequests';
import { resetRequestsDataType } from '@src/services/user/passwordReset/types/genericTypes';
import { putUser } from '@src/services/user/methods/putUser';
import { useNavigation } from '@react-navigation/native';
import { setLoginData } from '@src/services/user/login/postLoginUser';

export type PropsPasswordResetIndex = NativeStackScreenProps<RootStackParamList, 'password-reset'>;

export default function PasswordResetIndex({ route }: PropsPasswordResetIndex) {

    const { generatedUrl } = route.params;

    const navigation = useNavigation();

    const resetRequestData = useRef<resetRequestsDataType>(undefined);

    useEffect(() => {
        (async () => {
            const resetRequestResponse = await getResetRequests(generatedUrl);

            resetRequestData.current = resetRequestResponse;
        })();
    }, [generatedUrl]);

    const {
        control: passwordResetControl,
        handleSubmit: passwordResetHandleSubmit,
        formState: { errors: passwordResetErrors },
    } = useForm<typePasswordResetSchema>({ resolver: zodResolver(usePasswordResetSchema), mode: 'onSubmit' });

    async function onPasswordReset(formValues: typePasswordResetSchema) {
        const requestsData = resetRequestData.current?.[0];

        if (requestsData) {
            let payload = { password: formValues.password, id: requestsData.userId };

            const responseEditUser = await putUser(payload);

            const dataEditUser = responseEditUser.data;

            if (responseEditUser.messageSuccess && dataEditUser && typeof dataEditUser.id !== 'undefined') {
                await setLoginData({ ...dataEditUser });

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'home' }],
                });
            }
        }

    }

    return (
        <ScrollView>
            <StarIconTopIndex />

            <PaddingContainer>
                <View style={{ marginBottom: 20 }}>
                    <TextTitleH1>Reset password</TextTitleH1>
                    <TextTitleH1>{generatedUrl}</TextTitleH1>
                </View>

                <View>
                    <View style={globalStyles.containerInputs}>
                        <Controller
                            control={passwordResetControl}
                            name="password"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputPassword
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Password"
                                    errors={passwordResetErrors.password}
                                    testID='passwordInput'
                                />
                            )}
                        />

                        <Controller
                            control={passwordResetControl}
                            name="confirmPassword"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputPassword
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Confirm password"
                                    errors={passwordResetErrors.confirmPassword}
                                    testID='confirmPasswordInput'
                                />
                            )}
                        />
                    </View>


                    <View style={{ marginTop: 10 }}>
                        <ButtonDefault title="Reset password" onPress={passwordResetHandleSubmit(onPasswordReset)} testID="resetBtn" />
                    </View>

                </View>
            </PaddingContainer>
        </ScrollView>
    );
}
