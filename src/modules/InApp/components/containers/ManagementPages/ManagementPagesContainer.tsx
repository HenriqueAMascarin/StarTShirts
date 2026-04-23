import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { stylesManagementPagesContainer } from '@src/modules/InApp/components/containers/ManagementPages/styles/stylesManagementPagesContainer';

export default function ManagementPagesContainer({ children }: { children: ReactNode }) {
  return <View style={stylesManagementPagesContainer.container}>{children}</View>;
}
