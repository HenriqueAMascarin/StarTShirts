import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TextDefault from '@src/components/texts/default/TextDefault';
import { RootStackParamList } from '@src/routes/AppRoutes';
import { appColors } from '@src/utils/appColors';
import { TouchableOpacity } from 'react-native';

type TypeRoutesToShow = {
  [key in keyof RootStackParamList]?: { url: keyof RootStackParamList; label: string };
};

const routesToShow: TypeRoutesToShow = {
  home: { label: 'Home', url: 'home' },
  'home/cart': { label: 'Cart', url: 'home/cart' },
  'home/account': { label: 'Account', url: 'home/account' },
  'home/more': { label: 'More', url: 'home/more' },
};

export default function NavigationItems({
  stateRoutes,
}: {
  stateRoutes: BottomTabBarProps['state'];
}) {
  const filteredRoutes = stateRoutes.routes.flatMap((route, keyRoute) => {
    const routeToShowObject = routesToShow?.[route?.name as keyof RootStackParamList];

    if (routeToShowObject != null) {
      return [{ ...routeToShowObject, keyRoute }];
    } else {
      return [];
    }
  });

  return (
    <>
      {filteredRoutes.map((route) => {
        const isActive = stateRoutes.index == route?.keyRoute;

        console.log(filteredRoutes);
        return (
          <TouchableOpacity key={route?.keyRoute} style={{backgroundColor: appColors.red}}>
            <TextDefault>{route?.label}</TextDefault>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
