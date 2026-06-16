import React, { ReactNode } from 'react';
import { stylesManagementPagesContainerWithTitle } from '@src/modules/InApp/components/containers/ManagementPagesWithTitle/styles/stylesManagementPagesContainerWithTitle';
import TextTitleH2 from '@src/components/texts/h2/TextTitleH2';
import ManagementPagesContainer from '@src/modules/InApp/components/containers/ManagementPages/ManagementPagesContainer';

export default function ManagementPagesContainerWithTitle({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <ManagementPagesContainer>
      <TextTitleH2 style={stylesManagementPagesContainerWithTitle.title}>{title}</TextTitleH2>
      {children}
    </ManagementPagesContainer>
  );
}
