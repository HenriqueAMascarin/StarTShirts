import { Animated, ScrollView, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import InputDefault from "@App/components/inputs/InputDefault";
import { useRegisterSchema, TypeRegisterFormSchema } from "@App/pages/Welcome/schemas/useRegisterSchema";
import TextTitleH1 from "@App/components/texts/TextTitleH1";
import PaddingContainer from "@App/components/containers/PaddingContainer";
import { styles } from "@App/pages/Welcome/styles";
import InputPassword from "@App/components/inputs/InputPassword";
import ButtonDefault from "@App/components/buttons/ButtonDefault";
import LineWithText from "@App/components/objects/lines/LineWithText";
import StarSvg from "@App/assets/images/star.svg";
import { useState } from "react";
import { useLoginSchema, TypeLoginFormSchema } from "@App/pages/Welcome/schemas/useLoginSchema";

import TextDefault from "@App/components/texts/TextDefault";

type pagesWelcome = "register" | "login";

export default function Welcome() {
    const {
        control: registerControl,
        handleSubmit: registerHandleSubmit,
        formState: { errors: registerErrors },
    } = useForm<TypeRegisterFormSchema>({ resolver: zodResolver(useRegisterSchema), mode: "onSubmit" });

    const {
        control: loginControl,
        handleSubmit: loginHandleSubmit,
        formState: { errors: loginErrors },
    } = useForm<TypeLoginFormSchema>({ resolver: zodResolver(useLoginSchema), mode: "onSubmit" });

    const [currentPage, changeCurrentPage] = useState<pagesWelcome>("register");

    function onLoginSubmit() {

    }

    function onRegisterSubmit() {

    }

    function changeMethod() {
        if (currentPage == 'register') {
            changeCurrentPage('login');
        } else {
            changeCurrentPage('register');
        }
    }

    return (
        <ScrollView contentContainerStyle={{ marginBottom: 30 }}>
            <View style={{ height: 130, marginBottom: 8 }}>
                <Animated.View style={
                    { position: 'absolute', top: -84, transform: [{ rotate: "5deg" }, { translateX: -80 }] }}>
                    <StarSvg />
                </Animated.View>
            </View>
            <PaddingContainer>
                <TextTitleH1 style={{ paddingBottom: 14 }}>{currentPage == 'register' ? 'Sign up' : 'Welcome back'}</TextTitleH1>

                <View>
                    {currentPage == 'register' &&
                        <View style={styles.containerInputs}>
                            <Controller
                                control={registerControl}
                                name="firstName"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputDefault
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="First name"
                                        errors={registerErrors.firstName}
                                    />
                                )}
                            />

                            <Controller
                                control={registerControl}
                                name="lastName"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputDefault
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="Last name"
                                        errors={registerErrors.lastName}
                                    />
                                )}
                            />


                            <Controller
                                control={registerControl}
                                name="email"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputDefault
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="E-mail"
                                        inputMode="email"
                                        errors={registerErrors.email}
                                    />
                                )}
                            />

                            <Controller
                                control={registerControl}
                                name="password"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputPassword
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="Password"
                                        errors={registerErrors.password}
                                    />
                                )}
                            />

                            <Controller
                                control={registerControl}
                                name="confirmPassword"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputPassword
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="Confirm password"
                                        errors={registerErrors.confirmPassword}
                                    />
                                )}
                            />
                        </View>
                    }

                    {currentPage == 'login' && <View style={styles.containerInputs}>
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
                                />
                            )}
                        />

                        <TouchableOpacity><TextDefault style={styles.forgotPasswordText}>Forgot password?</TextDefault></TouchableOpacity>

                    </View>}

                    <View>
                        <ButtonDefault title="Create account"
                            onPress={currentPage == 'register'
                                ? registerHandleSubmit(onRegisterSubmit)
                                : loginHandleSubmit(onLoginSubmit)} />

                        <LineWithText text="or" />

                        <ButtonDefault title={currentPage == 'register' ? 'Login' : 'Register'} onPress={changeMethod} borderType={true} />
                    </View>


                </View>
            </PaddingContainer>
        </ScrollView>
    )
}