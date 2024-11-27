import { Dispatch } from '@reduxjs/toolkit';
import { SuccessAlert } from '@src/components/alerts/alerts';
import { genericResponse } from '@src/services/user/genericTypes';
import { addElement } from '@src/store/features/instantiableElements/instantiableElements-slice';
import { globalStore } from '@src/store/globalStore';
import React from 'react';

export async function apiManagement(response: genericResponse) {
  console.log('response1');

  console.log('response2', response);

  globalStore.dispatch(addElement({ Element: SuccessAlert, props: {message: "User created with success!"} }))

  return response;
}
