import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import InputDefault from "@App/components/inputs/InputDefault";
import { useSchema } from "@App/pages/Welcome/useSchema";
import TextDefault from "@App/components/texts/TextDefault";
import PaddingContainer from "@App/components/containers/PaddingContainer";
import { useEffect } from "react";
import { styles } from "@App/pages/Welcome/styles";

export default function Welcome() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(useSchema), mode: "onChange" });

    useEffect(() => console.log(errors))

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

                </View>
            </PaddingContainer>
        </View>
    )
}