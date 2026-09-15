import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MiniStarSVG from '@src/assets/svgs/star_mini.svg';
import SearchSVG from '@src/assets/svgs/search.svg';
import InputDefault from '@src/components/inputs/Default/InputDefault';
import PaddingContainer from '@src/components/containers/PaddingContainer';
import { useNavigation } from '@react-navigation/native';
import { stylesHeaderIndex } from '@src/modules/InApp/components/header/styles/stylesHeaderIndex';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const headerHeight = 49;

export default function HeaderIndex() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  function goToHomeRoute() {
    navigation.navigate('home');
  }

  return (
    <View
      style={[stylesHeaderIndex.container, { top: insets.top }]}
    >
      <View style={stylesHeaderIndex.headerContainer}>
        <PaddingContainer>
          <View style={stylesHeaderIndex.flexContainer}>
            <TouchableOpacity onPressIn={goToHomeRoute}>
              <MiniStarSVG width={'31'} height={'29'} />
            </TouchableOpacity>

            <View style={stylesHeaderIndex.seachInputContainer}>
              <InputDefault
                placeholder="Search the best t-shirts"
                style={stylesHeaderIndex.searchInput}
              />

              <TouchableOpacity style={{ position: 'absolute', left: 10 }}>
                <SearchSVG width={'16'} height={'15'} />
              </TouchableOpacity>
            </View>
          </View>
        </PaddingContainer>
      </View>
    </View>
  );
}
