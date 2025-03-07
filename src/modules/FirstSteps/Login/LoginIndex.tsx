import { ScrollView, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputDefault from '@src/components/inputs/InputDefault';
import { useLoginSchema, typeLoginSchema } from '@src/modules/FirstSteps/Login/useLoginSchema';
import React from 'react';
import TextTitleH1 from '@src/components/texts/TextTitleH1';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import { globalStyles } from '@src/modules/FirstSteps/globalStyles';
import InputPassword from '@src/components/inputs/InputPassword';
import ButtonDefault from '@src/components/buttons/ButtonDefault';
import LineWithText from '@src/components/objects/lines/LineWithText';

import Checkbox from '@src/components/checkbox/Checkbox';
import StarIconTop from '@src/modules/FirstSteps/components/StarIconTop';
import { postLoginUser } from '@src/services/user/methods/postLoginUser';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function LoginIndex() {
    const {
        control: loginControl,
        handleSubmit: loginHandleSubmit,
        formState: { errors: loginErrors },
    } = useForm<typeLoginSchema>({ resolver: zodResolver(useLoginSchema), mode: 'onSubmit' });

    const navigation = useNavigation();

    const [checkboxState, changeCheckboxState] = useState(true);

    async function onLoginSubmit(formValues: typeLoginSchema) {
        let payload = { ...formValues, rememberMe: checkboxState };

        const response = await postLoginUser(payload);

        if (response.messageSuccess) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'home' }],
            });
        }
    }

    function changeBtnMethod() {
        navigation.navigate('register');
    }

    function forgotPasswordFunction() {
        navigation.navigate('request-reset');
    }

    return (
        <ScrollView>
            <StarIconTop />

            <PaddingContainer>
                <View style={{ marginBottom: 20 }}>
                    <TextTitleH1>Welcome back</TextTitleH1>
                </View>

                <View>
                    <View style={globalStyles.containerInputs}>
                        <Controller
                            control={loginControl}
                            name="email"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputDefault
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    label="E-mail"
                                    inputMode="email"
                                    errors={loginErrors.email}
                                    testID="emailInput"
                                />
                            )}
                        />

                        <Controller
                            control={loginControl}
                            name="password"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputPassword
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Password"
                                    errors={loginErrors.password}
                                    forgotPassword={{ hasForgotBtn: true, function: forgotPasswordFunction }}
                                    testID="passwordInput"
                                />
                            )}
                        />
                    </View>


                    <View style={{ marginTop: 10 }}>
                        <Checkbox stateValue={checkboxState} changeStateValueFn={changeCheckboxState} label="Remember me" style={{ marginBottom: 8 }} />

                        <ButtonDefault title="Login" onPress={loginHandleSubmit(onLoginSubmit)} />

                        <LineWithText text="or" />

                        <ButtonDefault title="Create account" onPress={changeBtnMethod} borderType={true} />
                    </View>

                </View>
            </PaddingContainer>
        </ScrollView>
    )
}