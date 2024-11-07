import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import InputDefault from "@App/components/inputs/InputDefault";
import { useSchema, TypeFormSchema } from "@App/pages/Welcome/useSchema";
import TextDefault from "@App/components/texts/TextDefault";
import PaddingContainer from "@App/components/containers/PaddingContainer";
import { styles } from "@App/pages/Welcome/styles";
import InputPassword from "@App/components/inputs/InputPassword";
import ButtonDefault from "@App/components/buttons/ButtonDefault";

export default function Welcome() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<TypeFormSchema>({ resolver: zodResolver(useSchema), mode: "onSubmit" });

    function onSubmit(){
        console.log('salveee')
    }

    return (
        <View>
            <PaddingContainer>
                <TextDefault style={{ fontSize: 30 }}>Sign up</TextDefault>

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

                    <ButtonDefault title="Submit" onPress={handleSubmit(onSubmit)}/>

                </View>
            </PaddingContainer>
        </View>
    )
}