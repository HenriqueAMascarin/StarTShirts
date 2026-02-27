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
import LineObject from '@src/components/objects/line/LineObject';
import { postUser } from '@src/services/user/methods/postUser';
import { useNavigation } from '@react-navigation/native';
import StarIconTopIndex from '@src/modules/FirstSteps/components/StarIconTop/StarIconTopIndex';
import BottomContainer from '@src/components/containers/BottomContainer';
import BorderButton from '@src/components/buttons/border/BorderButton';
import DefaultButton from '@src/components/buttons/default/DefaultButton';

export default function RegisterIndex() {
  const {
    control: registerControl,
    handleSubmit: registerHandleSubmit,
    formState: { errors: registerErrors },
  } = useForm<typeRegisterSchema>({
    resolver: zodResolver(useRegisterSchema),
    mode: 'onSubmit',
    defaultValues: {},
  });

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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
                  />
                )}
              />
            </View>

            <View style={{ marginTop: 10 }}>
              <DefaultButton
                title="Create account"
                onPressIn={registerHandleSubmit(onRegisterSubmit)}
                testID="registerButton"
              />

              <LineObject text="or" />

              <BorderButton title="Login" onPressIn={changeBtnMethod} />
            </View>
          </View>
        </BottomContainer>
      </PaddingContainer>
    </ScrollView>
  );
}
