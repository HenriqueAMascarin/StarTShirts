import SimpleModal from '@src/components/modal/simple/SimpleModal';
import React from 'react';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import { useForm, Controller } from 'react-hook-form';
import {
  typeChangeEmailSchema,
  useChangeEmailSchema,
} from '@src/modules/InApp/Account/components/changeEmail/useChangeEmailSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import InputPassword from '@src/components/inputs/Password/InputPassword';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import { putUser } from '@src/services/user/methods/putUser';
import TextTitleH3 from '@src/components/texts/h3/TextTitleH2';
import { View } from 'react-native';
import { stylesGeneralAccountComponents } from '@src/modules/InApp/Account/components/generalStyles/stylesGeneralAccountComponents';

type typeModalChangeEmail = {
  statesSimpleModal: {
    simpleModalState: boolean;
    changeSimpleModalState: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default function ModalChangeEmail({ statesSimpleModal }: typeModalChangeEmail) {
  const {
    control: emailFormControl,
    handleSubmit: emailFormHandleSubmit,
    formState: { errors: emailFormErrors },
  } = useForm<typeChangeEmailSchema>({
    resolver: zodResolver(useChangeEmailSchema),
    mode: 'onSubmit',
  });

  async function onChangeEmail(formValues: typeChangeEmailSchema) {
    const payload = { ...formValues };

    const response = await putUser(payload);

    if (response?.messageSuccess) {
      statesSimpleModal.changeSimpleModalState(false);
    }
  }

  return (
    <SimpleModal
      visibleStates={{
        visible: statesSimpleModal.simpleModalState,
        changeVisibleState: statesSimpleModal.changeSimpleModalState,
      }}
      customModalContainerStyles={stylesGeneralAccountComponents.customModalContainerStyles}
    >
      <View style={stylesGeneralAccountComponents.containerForm}>
        <TextTitleH3>Change e-mail</TextTitleH3>
        
        <Controller
          control={emailFormControl}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputDefault
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="New e-mail"
              errors={emailFormErrors.email}
              required
            />
          )}
        />

        <Controller
          control={emailFormControl}
          name="confirmEmail"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputDefault
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Confirm new e-mail"
              errors={emailFormErrors.confirmEmail}
              required
            />
          )}
        />

        <Controller
          control={emailFormControl}
          name="currentPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputPassword
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label="Current password"
              errors={emailFormErrors.currentPassword}
              required
            />
          )}
        />

        <DefaultButton
          title="Change e-mail"
          onPressIn={emailFormHandleSubmit(onChangeEmail)}
          style={stylesGeneralAccountComponents.submitFormBtn}
        />
      </View>
    </SimpleModal>
  );
}
