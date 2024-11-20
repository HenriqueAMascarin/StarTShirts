import { Animated, ScrollView, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import InputDefault from "@App/components/inputs/InputDefault";
import { useRegisterSchema, TypeRegisterFormSchema } from "@App/pages/Welcome/schemas/useRegisterSchema";
import { useLoginSchema, TypeLoginFormSchema } from "@App/pages/Welcome/schemas/useLoginSchema";
import { useResetFirstSchema, TypeResetFirstFormSchema } from "@App/pages/Welcome/schemas/useResetFirstSchema";
import { useResetSecondSchema, TypeResetSecondFormSchema } from "@App/pages/Welcome/schemas/useResetSecondSchema";

import TextTitleH1 from "@App/components/texts/TextTitleH1";
import PaddingContainer from "@App/components/containers/PaddingContainer";
import { styles } from "@App/pages/Welcome/styles";
import InputPassword from "@App/components/inputs/InputPassword";
import ButtonDefault from "@App/components/buttons/ButtonDefault";
import LineWithText from "@App/components/objects/lines/LineWithText";
import StarSvg from "@App/assets/svgs/star.svg";
import { useEffect, useMemo, useRef, useState } from "react";
import TextDefault from "@App/components/texts/TextDefault";
import Checkbox from "@App/components/checkbox/Checkbox";

type pagesWelcome = "register" | "login" | "resetFirst" | "resetSecond";

type typeStarPositions =
    {
        translateX: Animated.Value;
        rotate: {
            animatedValue: Animated.Value;
            interpolatedValue: string | Animated.AnimatedInterpolation<string | number>;
        };
    };


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

    const {
        control: resetFirstControl,
        handleSubmit: resetFirstHandleSubmit,
        formState: { errors: resetFirstErrors },
    } = useForm<TypeResetFirstFormSchema>({ resolver: zodResolver(useResetFirstSchema), mode: "onSubmit" });

    const {
        control: resetSecondControl,
        handleSubmit: resetSecondHandleSubmit,
        formState: { errors: resetSecondErrors },
    } = useForm<TypeResetSecondFormSchema>({ resolver: zodResolver(useResetSecondSchema), mode: "onSubmit" });

    const [currentPage, changeCurrentPage] = useState<pagesWelcome>("register");

    function onResetFirstSubmit() {
        changeCurrentPage('resetSecond');
    }

    function onResetSecondSubmit() {

    }

    function onLoginSubmit() {

    }

    function onRegisterSubmit() {

    }

    const pagesChanges = useMemo(() => {
        const registerPage = currentPage == 'register';
        const loginPage = currentPage == 'login';
        const resetFirstPage = currentPage == 'resetFirst';
        const resetSecondPage = currentPage == 'resetSecond';

        return {
            pages: {
                registerPage,
                loginPage,
                resetFirstPage,
                resetSecondPage
            },
            title: registerPage ? 'Sign up' : loginPage ? 'Welcome back' : 'Reset password',
            description: resetFirstPage ? 'Please enter your e-mail and we will send a link to reset your password.' : null,
            firstButton:
            {
                title: registerPage ? 'Create account' : loginPage ? 'Login' : resetFirstPage ? 'Send e-mail' : 'Reset password',
                function: registerPage ? registerHandleSubmit(onRegisterSubmit) : loginPage ? loginHandleSubmit(onLoginSubmit) : resetFirstPage ? resetFirstHandleSubmit(onResetFirstSubmit) : resetSecondHandleSubmit(onResetSecondSubmit)
            },
            secondButton:
            {
                title: registerPage ? 'Login' : loginPage ? 'Create account' : resetFirstPage ? 'Login' : null,
            },
        }

    }, [currentPage])

    const starPositions = useRef<typeStarPositions>({ translateX: new Animated.Value(-80), rotate: { animatedValue: new Animated.Value(0), interpolatedValue: "0deg" } });

    starPositions.current.rotate.interpolatedValue = starPositions.current.rotate.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['45deg', '360deg']
    })

    useEffect(() => {
   
            Animated.parallel(
                [
                    Animated.timing(starPositions.current.translateX, {
                        toValue: pagesChanges.pages.registerPage ? -80 : 300,
                        duration: 500,
                        delay: 20,
                        useNativeDriver: false,
                    }),
                    Animated.timing(starPositions.current.rotate.animatedValue, {
                        toValue: pagesChanges.pages.registerPage ? 0 : 1,
                        duration: 400,
                        delay: 100,
                        useNativeDriver: false,
                    }),
                ]
            ).start();

    }, [pagesChanges.pages])

    function changeBtnMethod() {
        if (!pagesChanges.pages.loginPage) {
            changeCurrentPage('login');
        } else {
            changeCurrentPage('register');
        }
    }

    function forgotPasswordFunction() {
        changeCurrentPage('resetFirst');
    }

    return (
        <ScrollView contentContainerStyle={{ marginBottom: 30 }}>
            <View style={{ height: 130, marginBottom: 8 }}>
                <Animated.View style={
                    { position: 'absolute', top: -84, transformOrigin: 'right bottom 200px', transform: [{ rotate: starPositions.current.rotate.interpolatedValue }, { translateX: starPositions.current.translateX }] }}>
                    <StarSvg />
                </Animated.View>
            </View>
            <PaddingContainer>
                <View style={{ marginBottom: 20 }}>
                    <TextTitleH1 >{pagesChanges.title}</TextTitleH1>
                    {pagesChanges.description && <TextDefault>{pagesChanges.description}</TextDefault>}
                </View>


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
                                    forgotPassword={{ hasForgotBtn: true, function: forgotPasswordFunction }}
                                />
                            )}
                        />



                    </View>}

                    {currentPage == 'resetFirst' &&
                        <View style={styles.containerInputs}>
                            <Controller
                                control={resetFirstControl}
                                name="email"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputDefault
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="E-mail"
                                        inputMode="email"
                                        errors={resetFirstErrors.email}
                                    />
                                )}
                            />
                        </View>
                    }

                    {currentPage == 'resetSecond' &&
                        <View style={styles.containerInputs}>
                            <Controller
                                control={resetSecondControl}
                                name="password"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputPassword
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="Password"
                                        errors={resetSecondErrors.password}
                                    />
                                )}
                            />

                            <Controller
                                control={resetSecondControl}
                                name="confirmPassword"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputPassword
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="Confirm password"
                                        errors={resetSecondErrors.confirmPassword}
                                    />
                                )}
                            />
                        </View>
                    }

                    <View style={{ marginTop: 10 }}>
                        {pagesChanges.pages.loginPage && <Checkbox label="Remember me" style={{ marginBottom: 8 }} />}

                        <ButtonDefault title={pagesChanges.firstButton.title}
                            onPress={pagesChanges.firstButton.function} />

                        {!pagesChanges.pages.resetSecondPage && <LineWithText text="or" />}

                        {pagesChanges.secondButton.title && <ButtonDefault title={pagesChanges.secondButton.title} onPress={changeBtnMethod} borderType={true} />}
                    </View>


                </View>
            </PaddingContainer>
        </ScrollView>
    )
}