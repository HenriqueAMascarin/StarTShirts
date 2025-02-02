import { ScrollView, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import InputDefault from "@src/components/inputs/InputDefault";
import { typeResetRequestSchema, useResetRequestSchema } from "@src/modules/FirstSteps/ResetRequest/useResetRequestSchema";

import TextTitleH1 from "@src/components/texts/TextTitleH1";
import PaddingContainer from "@src/components/containers/PaddingContainer";
import { globalStyles } from "@src/modules/FirstSteps/globalStyles";
import ButtonDefault from "@src/components/buttons/ButtonDefault";
import LineWithText from "@src/components/objects/lines/LineWithText";
import { useNavigation } from "@react-navigation/native";
import StarIconTop from "@src/modules/FirstSteps/components/StarIconTop";
import { postResetRequests } from "@src/services/user/passwordReset/methods/postResetRequests";

export default function ResetRequestIndex() {
    const {
        control: resetRequestControl,
        handleSubmit: resetRequestHandleSubmit,
        formState: { errors: resetRequestErrors },
    } = useForm<typeResetRequestSchema>({ resolver: zodResolver(useResetRequestSchema), mode: "onSubmit" });

    const navigation = useNavigation();

    async function onResetSubmit(formValues: typeResetRequestSchema) {
        let payload = { ...formValues };

        const response = await postResetRequests(payload);

        if (response.messageSuccess && response.data) {
            navigation.navigate("password-reset", { generatedUrl: response.data.generatedUrl });
        }
    }

    function changeBtnMethod() {
        navigation.navigate("login");
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
                            control={resetRequestControl}
                            name="email"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputDefault
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    label="E-mail"
                                    inputMode="email"
                                    errors={resetRequestErrors.email}
                                />
                            )}
                        />
                    </View>


                    <View style={{ marginTop: 10 }}>
                        <ButtonDefault title="Send e-mail" onPress={resetRequestHandleSubmit(onResetSubmit)} />

                        <LineWithText text="or" />

                        <ButtonDefault title="Login" onPress={changeBtnMethod} borderType={true} />
                    </View>

                </View>
            </PaddingContainer>
        </ScrollView>
    )
}