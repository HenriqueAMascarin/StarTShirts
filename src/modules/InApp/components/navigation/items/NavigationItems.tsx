import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TextDefault from '@src/components/texts/default/TextDefault';
import { RootStackParamList } from '@src/routes/AppRoutes';
import { TouchableOpacity } from 'react-native';
import HomeSVG from '@src/assets/svgs/home.svg';
import CartSVG from '@src/assets/svgs/cart.svg';
import UserMiniSVG from '@src/assets/svgs/user_mini.svg';
import HamgurguerMenuSVG from '@src/assets/svgs/hamburguer_menu.svg';
import { FC } from 'react';
import { SvgProps } from 'react-native-svg';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { stylesNavigationItems } from '@src/modules/InApp/components/navigation/items/styles/stylesNavigationItems';

type TypeRoutesToShow = {
  [key in keyof RootStackParamList]?: {
    url: keyof RootStackParamList;
    label: string;
    IconSVG: FC<SvgProps>;
  };
};

const routesToShow: TypeRoutesToShow = {
  home: { label: 'Home', url: 'home', IconSVG: HomeSVG },
  'home/cart': { label: 'Cart', url: 'home/cart', IconSVG: CartSVG },
  'home/account': { label: 'Account', url: 'home/account', IconSVG: UserMiniSVG },
  'home/more': { label: 'More', url: 'home/more', IconSVG: HamgurguerMenuSVG },
};

export default function NavigationItems({
  stateRoutes,
}: {
  stateRoutes: BottomTabBarProps['state'];
}) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const filteredRoutes = stateRoutes.routes.flatMap((route, keyRoute) => {
    const routeToShowObject = routesToShow?.[route?.name as keyof RootStackParamList];

    if (routeToShowObject != null) {
      return [{ ...routeToShowObject, keyRoute }];
    } else {
      return [];
    }
  });

  function onNavigate({ url }: { url: keyof RootStackParamList }) {
    navigation.navigate(url);
  }

  return (
    <>
      {filteredRoutes.map(({ IconSVG, keyRoute, url, label }) => {
        // const isActive = stateRoutes.index == keyRoute;

        return (
          <TouchableOpacity
            key={keyRoute}
            style={stylesNavigationItems.btn}
            onPressIn={() => onNavigate({ url })}
          >
            <IconSVG />

            <TextDefault>{label}</TextDefault>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
