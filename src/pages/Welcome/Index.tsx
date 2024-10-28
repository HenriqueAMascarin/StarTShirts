import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import InputDefault from "@App/components/inputs/InputDefault";
import { useSchema } from "@App/pages/Welcome/useSchema";
import TextDefault from "@App/components/Texts/TextDefault";

export default function Welcome() {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(useSchema) });

    return (
        <View>
            <TextDefault>Sign up</TextDefault>

            <View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputDefault
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            label="First name"
                        />
                    )}
                    name="firstName"
                />


            </View>
        </View>
    )
}