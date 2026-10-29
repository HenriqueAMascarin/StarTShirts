import { TypePropsRoutesNavigate, TypeSimpleRoutesList } from '@src/routes/AppRoutes';
import { signOutAccount } from '@src/utils/signOutAccount';
import { SvgProps } from 'react-native-svg';
import { FC } from 'react';
import HomeSVG from '@src/assets/svgs/home.svg';
import CartSVG from '@src/assets/svgs/cart.svg';
import UserMiniSVG from '@src/assets/svgs/user_mini.svg';
import HeartSVG from '@src/assets/svgs/heart.svg';
import PurchasesSVG from '@src/assets/svgs/purchases.svg';
import SignOutSVG from '@src/assets/svgs/signOut.svg';
import { TextStyle, TouchableOpacity, View } from 'react-native';
import TextDefault from '@src/components/texts/default/TextDefault';
import { stylesMenuItems } from '@src/modules/InApp/More/components/item/styles/stylesMenuItems';
import { appColors } from '@src/utils/appColors';

type TypeMenu = {
  textProps: { title: string; customTextStyle?: TextStyle };
  IconSVG: FC<SvgProps>;
  navigation: { url?: keyof TypeSimpleRoutesList; customNavigateFn?: Function };
};

interface TypeMenuItem extends TypeMenu {
  navigateHookFn: TypePropsRoutesNavigate;
}

type TypeMenusList = TypeMenu[];

const mainMenus: TypeMenusList = [
  { textProps: { title: 'Home' }, IconSVG: HomeSVG, navigation: { url: 'home' } },
  {
    textProps: { title: 'Wishlist' },
    IconSVG: HeartSVG,
    navigation: { url: 'home/wishlist' },
  },
  {
    textProps: { title: 'Cart' },
    IconSVG: CartSVG,
    navigation: {
      url: 'home/cart',
    },
  },
  {
    textProps: { title: 'Purchases' },
    IconSVG: PurchasesSVG,
    navigation: {
      url: 'home/purchases',
    },
  },
];

const securityMenus: TypeMenusList = [
  { textProps: { title: 'Account' }, IconSVG: UserMiniSVG, navigation: { url: 'home/account' } },
  {
    textProps: { title: 'Sign Out', customTextStyle: stylesMenuItems.signOutText },
    IconSVG: SignOutSVG,
    navigation: { customNavigateFn: signOutAccount },
  },
];

function navigateToSimpleUrl({
  navigateHookFn,
  url,
}: {
  navigateHookFn: TypePropsRoutesNavigate;
  url: TypeMenu['navigation']['url'];
}) {
  if (url != undefined) {
    navigateHookFn(url);
  }
}

function MenuItem({ textProps, navigation, IconSVG, navigateHookFn }: TypeMenuItem) {
  return (
    <TouchableOpacity
      onPressIn={() =>
        navigation?.customNavigateFn != undefined
          ? navigation.customNavigateFn(navigateHookFn)
          : navigateToSimpleUrl({ navigateHookFn, url: navigation?.url })
      }
      style={stylesMenuItems.menuBtn}
    >
      <IconSVG fill={appColors.black} width={28} height={'100%'} />

      <TextDefault style={[stylesMenuItems.textMenuBtn, textProps.customTextStyle]}>
        {textProps.title}
      </TextDefault>
    </TouchableOpacity>
  );
}

export default function MenuItems({ navigateHookFn }: { navigateHookFn: TypePropsRoutesNavigate }) {
  return (
    <View>
      <View style={stylesMenuItems.containerMenus}>
        {mainMenus.map((props, menuKey) => (
          <MenuItem {...props} navigateHookFn={navigateHookFn} key={menuKey} />
        ))}
      </View>

      <View style={stylesMenuItems.containerMenus}>
        {securityMenus.map((props, menuKey) => (
          <MenuItem {...props} navigateHookFn={navigateHookFn} key={menuKey} />
        ))}
      </View>
    </View>
  );
}
