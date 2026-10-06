import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TextDefault from '@src/components/texts/default/TextDefault';
import { RootStackParamList } from '@src/routes/AppRoutes';
import { Animated, TouchableOpacity } from 'react-native';
import HomeSVG from '@src/assets/svgs/home.svg';
import CartSVG from '@src/assets/svgs/cart.svg';
import UserMiniSVG from '@src/assets/svgs/user_mini.svg';
import HamgurguerMenuSVG from '@src/assets/svgs/hamburguer_menu.svg';
import { stylesNavigationItems } from '@src/modules/InApp/components/navigation/items/styles/stylesNavigationItems';
import { appColors } from '@src/utils/appColors';
import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

type TypeRoutesToShow = {
  [key in keyof RootStackParamList]?: {
    url: keyof RootStackParamList;
    label: string;
    IconSvg: Animated.AnimatedComponent<FC<SvgProps>>;
  };
};

const routesToShow: TypeRoutesToShow = {
  home: {
    label: 'Home',
    url: 'home',
    IconSvg: Animated.createAnimatedComponent(HomeSVG),
  },
  'home/cart': {
    label: 'Cart',
    url: 'home/cart',
    IconSvg: Animated.createAnimatedComponent(CartSVG),
  },
  'home/account': {
    label: 'Account',
    url: 'home/account',
    IconSvg: Animated.createAnimatedComponent(UserMiniSVG),
  },
  'home/more': {
    label: 'More',
    url: 'home/more',
    IconSvg: Animated.createAnimatedComponent(HamgurguerMenuSVG),
  },
};

export default function NavigationItems({
  stateRoutes,
  navigationState,
}: {
  stateRoutes: BottomTabBarProps['state'];
  navigationState: BottomTabBarProps['navigation'];
}) {
  const filteredRoutes = stateRoutes.routes.flatMap((route, keyRoute) => {
    const routeToShowObject = routesToShow?.[route?.name as keyof RootStackParamList];

    if (routeToShowObject != null) {
      return [{ ...routeToShowObject, keyRoute }];
    } else {
      return [];
    }
  });

  function onNavigate({ url }: { url: keyof RootStackParamList }) {
    navigationState.navigate(url);
  }

  function interpolateActiveValue({
    animatedIsActiveValue,
    defaultColor = appColors.black,
    activeColor,
  }: {
    animatedIsActiveValue: Animated.Value;
    defaultColor?: string;
    activeColor: string;
  }) {
    const interpolation = animatedIsActiveValue.interpolate({
      inputRange: [0, 1],
      outputRange: [defaultColor, activeColor],
    });

    return interpolation;
  }

  return (
    <>
      {filteredRoutes.map(({ IconSvg, keyRoute, url, label }) => {
        // 1 is for true, 0 is for false
        const animatedIsActiveValue = new Animated.Value(keyRoute == stateRoutes?.index ? 1 : 0);

        const animatedColorBrown = interpolateActiveValue({
          animatedIsActiveValue,
          activeColor: appColors.brown,
        });

        const animatedColorBackgroundIcon = interpolateActiveValue({
          animatedIsActiveValue,
          defaultColor: appColors.white,
          activeColor: appColors.yellow,
        });

        return (
          <TouchableOpacity
            key={keyRoute}
            style={stylesNavigationItems.btn}
            onPressIn={() => onNavigate({ url })}
          >
            <Animated.View
              style={[
                stylesNavigationItems.iconContainer,
                { backgroundColor: animatedColorBackgroundIcon },
              ]}
            >
              <IconSvg color={animatedColorBrown} />
            </Animated.View>

            <TextDefault style={{ color: animatedColorBrown }}>{label}</TextDefault>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
