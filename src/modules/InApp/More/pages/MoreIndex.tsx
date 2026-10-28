import MainContainer from '@src/modules/InApp/components/containers/main/MainContainer.tsx';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import ManagementPagesContainer from '@src/modules/InApp/components/containers/ManagementPages/ManagementPagesContainer.tsx';
import { TouchableOpacity, View } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import ArrowSVG from '@src/assets/svgs/arrow.svg';
import MenuItems from '@src/modules/InApp/More/components/item/MenuItems';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '@src/routes/AppRoutes';
import UserSVG from '@src/assets/svgs/user.svg';
import { useCallback, useState } from 'react';
import { getLoggedUser } from '@src/services/user/login/methods/getLoggedUser';
import { useFocusEffect } from '@react-navigation/native';
import LoadingPageScreen from '@src/components/suspense/loading/LoadingPageScreen';
import { UserLoggedType } from '@src/services/user/login/types/genericTypes';
import TextTitleH3 from '@src/components/texts/h3/TextTitleH3';
import { stylesMoreIndex } from '@src/modules/InApp/More/styles/stylesMoreIndex';

type PropsMoreIndex = BottomTabScreenProps<RootStackParamList, 'home/more'>;

type TypeMoreIndexContent = PropsMoreIndex & { userData: UserLoggedType };

function MoreIndexContent({ navigation, userData }: TypeMoreIndexContent) {
  function redirectToAccount() {
    navigation.navigate('home/account');
  }

  return (
    <MainContainer>
      <PaddingContainer>
        <ManagementPagesContainer>
          <View style={stylesMoreIndex.userContainer}>
            <UserSVG width={'80'} height={'80'} />

            <View>
              <TextTitleH3 style={stylesMoreIndex.firstName}>{userData?.firstName}</TextTitleH3>

              <TouchableOpacity onPressIn={redirectToAccount} style={stylesMoreIndex.accountBtn}>
                <TextDefault style={stylesMoreIndex.accountText}>My account</TextDefault>

                <ArrowSVG width={'7'} height={'10'} style={stylesMoreIndex.arrowIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <MenuItems navigateHookFn={navigation.navigate} />
        </ManagementPagesContainer>
      </PaddingContainer>
    </MainContainer>
  );
}

export default function MoreIndex(props: PropsMoreIndex) {
  const [accountData, changeAccountData] = useState<null | Awaited<
    ReturnType<typeof getLoggedUser>
  >>(null);

  async function setEditData() {
    const accountData = await getLoggedUser();

    changeAccountData(accountData);
  }

  useFocusEffect(
    useCallback(() => {
      setEditData();
    }, []),
  );

  return (
    <>
      {accountData ? <MoreIndexContent {...props} userData={accountData} /> : <LoadingPageScreen />}
    </>
  );
}
