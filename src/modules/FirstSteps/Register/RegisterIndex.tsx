import { ScrollView, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import {
  useRegisterSchema,
  typeRegisterSchema,
} from '@src/modules/FirstSteps/Register/useRegisterSchema';
import React from 'react';
import TextTitleH1 from '@src/components/texts/h1/TextTitleH1';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import { globalStyles } from '@src/modules/FirstSteps/globalStyles';
import InputPassword from '@src/components/inputs/Password/InputPassword';
import ButtonDefault from '@src/components/buttons/ButtonDefault';
import LineObject from '@src/components/objects/line/LineObject';
import { postUser } from '@src/services/user/methods/postUser';
import { useNavigation } from '@react-navigation/native';
import StarIconTopIndex from '@src/modules/FirstSteps/components/StarIconTop/StarIconTopIndex';
import BottomContainer from '@src/components/containers/BottomContainer';

export default function RegisterIndex() {
  const {
    control: registerControl,
    handleSubmit: registerHandleSubmit,
    formState: { errors: registerErrors },
  } = useForm<typeRegisterSchema>({ resolver: zodResolver(useRegisterSchema), mode: 'onSubmit' });

  const navigation = useNavigation();

  async function onRegisterSubmit(formValues: typeRegisterSchema) {
    const payload = { ...formValues };

    const userResponse = await postUser({
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      password: payload.password,
    });

    if (userResponse.messageSuccess) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'home' }],
      });
    }
  }

  function changeBtnMethod() {
    navigation.navigate('login');
  }

  return (
    <ScrollView>
      <StarIconTopIndex />

      <PaddingContainer>
        <BottomContainer>
          <View style={{ marginBottom: 20 }}>
            <TextTitleH1>Sign up</TextTitleH1>
          </View>

          <View>
            <View style={globalStyles.containerInputs}>
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
                    testID="firstNameInput"
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
                    testID="lastNameInput"
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
                    testID="emailInput"
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
                    testID="passwordInput"
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
                    testID="confirmPasswordInput"
                  />
                )}
              />
            </View>

            <View style={{ marginTop: 10 }}>
              <ButtonDefault
                title="Create account"
                onPressIn={registerHandleSubmit(onRegisterSubmit)}
              />

              <LineObject text="or" />

              <ButtonDefault title="Login" onPressIn={changeBtnMethod} borderType={true} />
            </View>
          </View>
        </BottomContainer>
      </PaddingContainer>
    </ScrollView>
  );
}
