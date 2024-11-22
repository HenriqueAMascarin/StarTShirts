import { Animated, ScrollView, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import InputDefault from "@App/components/inputs/InputDefault";
import { useRegisterSchema, typeRegisterSchema } from "@App/pages/Welcome/schemas/useRegisterSchema";
import { useLoginSchema, typeLoginSchema } from "@App/pages/Welcome/schemas/useLoginSchema";
import { useFirstPasswordSchema, typeFirstPasswordSchema } from "@App/pages/Welcome/schemas/useFirstPasswordSchema";
import { useSecondPasswordSchema, typeSecondPasswordSchema } from "@App/pages/Welcome/schemas/useSecondPasswordSchema";

import TextTitleH1 from "@App/components/texts/TextTitleH1";
import PaddingContainer from "@App/components/containers/PaddingContainer";
import { styles } from "@App/pages/Welcome/styles";
import InputPassword from "@App/components/inputs/InputPassword";
import ButtonDefault from "@App/components/buttons/ButtonDefault";
import LineWithText from "@App/components/objects/lines/LineWithText";
import StarSvg from "@App/assets/svgs/star.svg";
import { useEffect, useMemo, useState } from "react";
import TextDefault from "@App/components/texts/TextDefault";
import Checkbox from "@App/components/checkbox/Checkbox";

type pagesWelcome = "register" | "login" | "resetFirst" | "resetSecond";

export default function Welcome() {
    const {
        control: registerControl,
        handleSubmit: registerHandleSubmit,
        formState: { errors: registerErrors, isDirty: registerIsDirty },
        reset: registerReset,
    } = useForm<typeRegisterSchema>({ resolver: zodResolver(useRegisterSchema), mode: "onSubmit" });

    const {
        control: loginControl,
        handleSubmit: loginHandleSubmit,
        formState: { errors: loginErrors, isDirty: loginIsDirty },
        reset: loginReset
    } = useForm<typeLoginSchema>({ resolver: zodResolver(useLoginSchema), mode: "onSubmit" });

    const {
        control: firstPasswordControl,
        handleSubmit: firstPasswordHandleSubmit,
        formState: { errors: firstPasswordErrors, isDirty: firstPasswordIsDirty },
        reset: firstPasswordReset
    } = useForm<typeFirstPasswordSchema>({ resolver: zodResolver(useFirstPasswordSchema), mode: "onSubmit" });

    const {
        control: secondPasswordControl,
        handleSubmit: secondPasswordHandleSubmit,
        formState: { errors: secondPasswordErrors, isDirty: secondPasswordIsDirty },
        reset: secondPasswordReset
    } = useForm<typeSecondPasswordSchema>({ resolver: zodResolver(useSecondPasswordSchema), mode: "onSubmit" });

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
                function: registerPage ? registerHandleSubmit(onRegisterSubmit) : loginPage ? loginHandleSubmit(onLoginSubmit) : resetFirstPage ? firstPasswordHandleSubmit(onResetFirstSubmit) : secondPasswordHandleSubmit(onResetSecondSubmit)
            },
            secondButton:
            {
                title: registerPage ? 'Login' : loginPage ? 'Create account' : resetFirstPage ? 'Login' : null,
            },
        }

    }, [currentPage]);

    useEffect(() => {
        const arrayDirty = [
            { resetFunction: registerReset, isDirty: registerIsDirty },
            { resetFunction: loginReset, isDirty: loginIsDirty },
            { resetFunction: firstPasswordReset, isDirty: firstPasswordIsDirty },
            { resetFunction: secondPasswordReset, isDirty: secondPasswordIsDirty }
        ]

        for(let keyForm in arrayDirty){
            if(arrayDirty[keyForm].isDirty){
                arrayDirty[keyForm].resetFunction();
            }
        }
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

            <View style={{ height: 100, marginBottom: 20 }}>
                <Animated.View style={
                    { position: 'absolute', top: -78, left: -54, transform: [{ rotate: "10deg" }] }}>
                    <StarSvg width={"183"} height={"173"} />
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
                                control={firstPasswordControl}
                                name="email"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputDefault
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="E-mail"
                                        inputMode="email"
                                        errors={firstPasswordErrors.email}
                                    />
                                )}
                            />
                        </View>
                    }

                    {currentPage == 'resetSecond' &&
                        <View style={styles.containerInputs}>
                            <Controller
                                control={secondPasswordControl}
                                name="password"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputPassword
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="Password"
                                        errors={secondPasswordErrors.password}
                                    />
                                )}
                            />

                            <Controller
                                control={secondPasswordControl}
                                name="confirmPassword"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputPassword
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        label="Confirm password"
                                        errors={secondPasswordErrors.confirmPassword}
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