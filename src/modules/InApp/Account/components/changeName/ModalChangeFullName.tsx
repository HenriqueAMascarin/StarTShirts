import SimpleModal from '@src/components/modal/simple/SimpleModal';
import React, { useEffect } from 'react';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputPassword from '@src/components/inputs/Password/InputPassword';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import { putUser } from '@src/services/user/methods/putUser';
import TextTitleH3 from '@src/components/texts/h3/TextTitleH3';
import { View } from 'react-native';
import { stylesGeneralAccountComponents } from '@src/modules/InApp/Account/components/generalStyles/stylesGeneralAccountComponents';
import { signOutAccount } from '@src/utils/signOutAccount';
import { useNavigation } from '@react-navigation/native';
import { typeModalChanges } from '@src/modules/InApp/Account/components/utils/typeModalChanges';
import {
  typeChangeFullNameSchema,
  useChangeFullNameSchema,
} from '@src/modules/InApp/Account/components/changeName/schema/useChangeFullNameSchema';

export default function ModalChangeFullName({ statesSimpleModal, userId }: typeModalChanges) {
  const navigation = useNavigation();

  async function onChangeFullName(formValues: typeChangeFullNameSchema) {
    const rawFormValues = { ...formValues };

    let payload = {
      id: userId,
      firstName: rawFormValues.firstName,
      lastName: rawFormValues.lastName,
      currentPassword: rawFormValues.currentPassword,
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
    control: fullNameFormControl,
    handleSubmit: fullNameFormHandleSubmit,
    formState: { errors: fullNameFormErrors },
    reset: fullNameFormReset,
  } = useForm<typeChangeFullNameSchema>({
    resolver: zodResolver(useChangeFullNameSchema),
    mode: 'onSubmit',
    defaultValues: {},
  });

  useEffect(() => {
    if (!statesSimpleModal.simpleModalState) {
      fullNameFormReset();
    }
  }, [statesSimpleModal.simpleModalState]);

  return (
    <SimpleModal
      visibleStates={{
        visible: statesSimpleModal.simpleModalState,
        changeVisibleState: statesSimpleModal.changeSimpleModalState,
      }}
    >
      <View style={stylesGeneralAccountComponents.containerForm}>
        <TextTitleH3 style={stylesGeneralAccountComponents.title}>Change full name</TextTitleH3>

        <Controller
          control={fullNameFormControl}
          name="firstName"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputDefault
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="New first name"
              errors={fullNameFormErrors.firstName}
              testID="newFirstNameInput"
              required
            />
          )}
        />

        <Controller
          control={fullNameFormControl}
          name="lastName"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputDefault
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="New last name"
              errors={fullNameFormErrors.lastName}
              testID="newLastNameInput"
              required
            />
          )}
        />

        <Controller
          control={fullNameFormControl}
          name="currentPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputPassword
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Current password"
              errors={fullNameFormErrors.currentPassword}
              testID="currentPasswordInput"
              required
            />
          )}
        />

        <DefaultButton
          title="Change full name"
          onPressIn={fullNameFormHandleSubmit(onChangeFullName)}
          style={stylesGeneralAccountComponents.submitFormBtn}
          testID="changeFullNameBtn"
        />
      </View>
    </SimpleModal>
  );
}
