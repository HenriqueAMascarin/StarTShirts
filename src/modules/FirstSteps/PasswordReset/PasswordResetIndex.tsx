import { ScrollView, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { usePasswordResetSchema, typePasswordResetSchema } from "@src/modules/FirstSteps/PasswordReset/usePasswordResetSchema";

import TextTitleH1 from "@src/components/texts/TextTitleH1";
import PaddingContainer from "@src/components/containers/PaddingContainer";
import { globalStyles } from "@src/modules/FirstSteps/globalStyles";
import ButtonDefault from "@src/components/buttons/ButtonDefault";
import InputPassword from "@src/components/inputs/InputPassword";
import StarIconTop from "@src/modules/FirstSteps/components/StarIconTop";
import { RootStackParamList } from "@src/routes/AppRoutes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useRef } from "react";
import { getResetRequests } from "@src/services/user/passwordReset/methods/getResetRequests";
import { resetRequestsDataType } from "@src/services/user/passwordReset/types/genericTypes";

type Props = NativeStackScreenProps<RootStackParamList, 'password-reset'>;

export default function PasswordResetIndex({ route }: Props) {

    const { generatedUrl } = route.params;

    const resetRequestData = useRef<resetRequestsDataType>(undefined);

    useEffect(() => { 
        (async () => {
            const resetRequestResponse = await getResetRequests(generatedUrl);

            resetRequestData.current = resetRequestResponse;
        })()
    }, [])

    const {
        control: passwordResetControl,
        handleSubmit: passwordResetHandleSubmit,
        formState: { errors: passwordResetErrors },
    } = useForm<typePasswordResetSchema>({ resolver: zodResolver(usePasswordResetSchema), mode: "onSubmit" });

    async function onPasswordReset(formValues: typePasswordResetSchema) {
        let payload = { ...formValues };

        resetRequestData.current;
    }

    return (
        <ScrollView>
            <StarIconTop />

            <PaddingContainer>
                <View style={{ marginBottom: 20 }}>
                    <TextTitleH1>Reset password</TextTitleH1>
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
                                />
                            )}
                        />
                    </View>


                    <View style={{ marginTop: 10 }}>
                        <ButtonDefault title="Reset password" onPress={passwordResetHandleSubmit(onPasswordReset)} />
                    </View>

                </View>
            </PaddingContainer>
        </ScrollView>
    )
}