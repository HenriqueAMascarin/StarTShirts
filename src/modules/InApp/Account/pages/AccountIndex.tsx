import UserSVG from '@src/assets/svgs/user.svg';
import LoadingPageScreen from '@src/components/suspense/loading/LoadingPageScreen';
import TextTitleH2 from '@src/components/texts/h2/TextTitleH2';
import { getLoggedUser } from '@src/services/user/login/methods/getLoggedUser';
import { UserLoggedType } from '@src/services/user/login/types/genericTypes';
import { Suspense, useMemo, useState } from 'react';
import { View } from 'react-native';
import MainContainer from '@src/modules/InApp/components/containers/main/MainContainer';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import TextDefault from '@src/components/texts/default/TextDefault';
import LineObject from '@src/components/objects/line/LineObject';
import UnderlineTextButton from '@src/components/buttons/underlineText/UnderlineTextButton';
import useSimpleModalHook from '@src/components/modal/simple/hooks/useSimpleModalHook';
import ModalChangeEmail from '@src/modules/InApp/Account/components/changeEmail/ModalChangeEmail';
import TextTitleH3 from '@src/components/texts/h3/TextTitleH2';
import { stylesAccountIndex } from '@src/modules/InApp/Account/styles/stylesAccountIndex';

function AccountContent(accountData: UserLoggedType) {
  const userName = useMemo(() => `${accountData?.firstName}'s account`, [accountData?.firstName]);

  const {
    simpleModalState: simpleEmailModalState,
    changeSimpleModalState: changeEmailSimpleModalState,
  } = useSimpleModalHook();

  function onOpenModalChangeEmail() {
    changeEmailSimpleModalState(true);
  }

  return (
    <>
      <ModalChangeEmail
        statesSimpleModal={{
          simpleModalState: simpleEmailModalState,
          changeSimpleModalState: changeEmailSimpleModalState,
        }}
      />

      <Suspense fallback={<LoadingPageScreen />}>
        <MainContainer>
          <PaddingContainer>
            <View style={stylesAccountIndex.containerUserPicture}>
              <UserSVG width={'170'} height={'170'} />

              <TextTitleH2>{userName}</TextTitleH2>
            </View>

            <View>
              <TextTitleH3>Sign-in info</TextTitleH3>

              <View>
                <TextDefault>E-mail</TextDefault>

                <TextDefault>{accountData?.email}</TextDefault>

                <UnderlineTextButton title="Change e-mail" onPressIn={onOpenModalChangeEmail} />
              </View>

              <View>
                <TextTitleH3>Password</TextTitleH3>

                <UnderlineTextButton title="Change password" />
              </View>
            </View>

            <LineObject />

            <View>
              <TextTitleH3>Personal info</TextTitleH3>

              <View>
                <TextDefault>Name</TextDefault>

                <TextDefault>{accountData?.firstName}</TextDefault>

                <UnderlineTextButton title="Change name" />
              </View>
            </View>

            <LineObject />

            <View>
              <TextTitleH3>Security</TextTitleH3>

              <View>
                <TextDefault>Log out of your account</TextDefault>

                <UnderlineTextButton title="Sign out" />
              </View>
            </View>
          </PaddingContainer>
        </MainContainer>
      </Suspense>
    </>
  );
}

export default function AccountIndex() {
  const [accountData, changeAccountData] = useState<null | Awaited<
    ReturnType<typeof getLoggedUser>
  >>(null);

  (async function setEditData() {
    const accountData = await getLoggedUser();

    changeAccountData(accountData);
  })();

  return <>{accountData && <AccountContent {...accountData} />}</>;
}
