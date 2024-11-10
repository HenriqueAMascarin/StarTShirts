import { ScrollView, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import InputDefault from "@App/components/inputs/InputDefault";
import { useSchema, TypeFormSchema } from "@App/pages/Welcome/useSchema";
import TextTitleH1 from "@App/components/texts/TextTitleH1";
import PaddingContainer from "@App/components/containers/PaddingContainer";
import { styles } from "@App/pages/Welcome/styles";
import InputPassword from "@App/components/inputs/InputPassword";
import ButtonDefault from "@App/components/buttons/ButtonDefault";
import LineWithText from "@App/components/objects/lines/LineWithText";
import StarSvg from "@App/assets/images/star.svg";

export default function Welcome() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<TypeFormSchema>({ resolver: zodResolver(useSchema), mode: "onSubmit" });

    function onSubmit() {
        console.log('salveee')
    }

    function changeMethod() {

    }

    return (
        <ScrollView style={{ marginBottom: 56 }}>
            <View style={{ height: 150, marginBottom: 20 }}><StarSvg style={{ position: 'absolute', top: -68, left: -60, transform: [{ rotate: "15deg" }] }} /></View>
            <PaddingContainer>
                <TextTitleH1 style={{ paddingBottom: 30 }}>Sign up</TextTitleH1>

                <View>
                    <View style={styles.container}>
                        <Controller
                            control={control}
                            name="firstName"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputDefault
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    label="First name"
                                    errors={errors.firstName}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="lastName"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputDefault
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Last name"
                                    errors={errors.lastName}
                                />
                            )}
                        />


                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputDefault
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    label="E-mail"
                                    inputMode="email"
                                    errors={errors.email}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputPassword
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Password"
                                    errors={errors.password}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <InputPassword
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    label="Confirm password"
                                    errors={errors.confirmPassword}
                                />
                            )}
                        />
                    </View>

                    <View>
                        <ButtonDefault title="Create account" onPress={handleSubmit(onSubmit)} />

                        <LineWithText text="or" />

                        <ButtonDefault title="Login" onPress={changeMethod} borderType={true} />
                    </View>


                </View>
            </PaddingContainer>
        </ScrollView>
    )
}