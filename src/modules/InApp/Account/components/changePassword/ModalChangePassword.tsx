import SimpleModal from '@src/components/modal/simple/SimpleModal';
import React from 'react';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import { useForm, Controller } from 'react-hook-form';
import {
  typeChangeEmailSchema,
  useChangeEmailSchema,
} from '@src/modules/InApp/Account/components/changeEmail/schema/useChangeEmailSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import InputPassword from '@src/components/inputs/Password/InputPassword';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import { putUser } from '@src/services/user/methods/putUser';
import TextTitleH3 from '@src/components/texts/h3/TextTitleH2';
import { View } from 'react-native';
import { stylesGeneralAccountComponents } from '@src/modules/InApp/Account/components/generalStyles/stylesGeneralAccountComponents';
import { signOutAccount } from '@src/utils/signOutAccount';
import { useNavigation } from '@react-navigation/native';
import {
  typeChangePasswordSchema,
  useChangePasswordSchema,
} from '@src/modules/InApp/Account/components/changePassword/schema/useChangePasswordSchema';
import { typeModalChanges } from '@src/modules/InApp/Account/components/utils/typeModalChanges';

export default function ModalChangeEmail({ statesSimpleModal, userId }: typeModalChanges) {
  const navigation = useNavigation();

  async function onChangePassword(formValues: typeChangePasswordSchema) {
    const rawFormValues = { ...formValues };

    let payload = {
      id: userId,
      currentPassword: rawFormValues.currentPassword,
      password: formValues.password,
    };

    const response = await putUser(payload);

    if (response?.messageSuccess) {
      statesSimpleModal.changeSimpleModalState(false);

      if (navigation?.navigate) {
        signOutAccount(navigation?.navigate);
      }
    }
  }

  const {
    control: passwordFormControl,
    handleSubmit: passwordFormHandleSubmit,
    formState: { errors: passwordFormErrors },
  } = useForm<typeChangePasswordSchema>({
    resolver: zodResolver(useChangePasswordSchema),
    mode: 'onSubmit',
  });

  return (
    <SimpleModal
      visibleStates={{
        visible: statesSimpleModal.simpleModalState,
        changeVisibleState: statesSimpleModal.changeSimpleModalState,
      }}
    >
      <View style={stylesGeneralAccountComponents.containerForm}>
        <TextTitleH3 style={stylesGeneralAccountComponents.title}>Change password</TextTitleH3>

        <Controller
          control={passwordFormControl}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputPassword
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="New password"
              errors={passwordFormErrors.password}
              testID="newPasswordInput"
              required
            />
          )}
        />

        <Controller
          control={passwordFormControl}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputPassword
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Confirm password"
              errors={passwordFormErrors.confirmPassword}
              testID="confirmPasswordInput"
              required
            />
          )}
        />

        <Controller
          control={passwordFormControl}
          name="currentPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputPassword
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Current password"
              errors={passwordFormErrors.currentPassword}
              testID="currentPasswordInput"
              required
            />
          )}
        />

        <DefaultButton
          title="Change password"
          onPressIn={passwordFormHandleSubmit(onChangePassword)}
          style={stylesGeneralAccountComponents.submitFormBtn}
          testID="changePasswordBtn"
        />
      </View>
    </SimpleModal>
  );
}
