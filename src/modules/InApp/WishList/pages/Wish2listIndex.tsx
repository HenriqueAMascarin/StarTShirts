import PaddingContainer from '@src/components/containers/PaddingContainer';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import MainContainer from '@src/modules/InApp/components/containers/main/MainContainer';
import TextTitleH2 from '@src/components/texts/h2/TextTitleH2';
import { getWishlistProducts } from '@src/services/wishlist/methods/getWishlistProducts';
import WishlistProductCard from '@src/modules/InApp/Wishlist/components/wishlistProduct/WishlistProductCard';
import { stylesWishlistProductsContent } from '@src/modules/InApp/Wishlist/styles/stylesWishlistProductsContent';
import TextDefault from '@src/components/texts/default/TextDefault';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import { stylesWishlistIndex } from '@src/modules/InApp/Wishlist/styles/stylesWishlistIndex';
import { stylesListIsEmptyMessages } from '@src/modules/InApp/Wishlist/styles/stylesListIsEmptyMessages';
import ManagementPagesContainer from '@src/modules/InApp/components/containers/ManagementPages/ManagementPagesContainer';
import { useNavigation } from '@react-navigation/native';

function ListIsEmptyMessages() {
  const navigation = useNavigation();

  function onShopNow() {
    navigation.navigate('home');
  }

  return (
    <View style={stylesListIsEmptyMessages.container}>
      <View>
        <TextDefault>Your list is empty.</TextDefault>

        <TextDefault>Add items to your list by shopping the site.</TextDefault>
      </View>

      <DefaultButton
        title="Shop now"
        style={stylesListIsEmptyMessages.shopBtn}
        onPressIn={onShopNow}
      />
    </View>
  );
}

function ProductsContent() {
  const [productsWishlist, changeProductsWishlist] = useState<null | Awaited<
    ReturnType<typeof getWishlistProducts>
  >>(null);

  async function getWishlistProductsAndSetToState() {
    const newProductsWishlist = await getWishlistProducts({});

    changeProductsWishlist(newProductsWishlist);
  }

  useEffect(() => {
    getWishlistProductsAndSetToState();
  }, []);

  return (
    <View style={stylesWishlistProductsContent.container}>
      {productsWishlist != null && productsWishlist?.length > 0 ? (
        productsWishlist?.map((wishlistProduct, wishlistKeyProduct) => {
          return <WishlistProductCard {...wishlistProduct} key={wishlistKeyProduct} getWishlistProductsAndSet={getWishlistProductsAndSetToState}/>;
        })
      ) : productsWishlist != null ? (
        <ListIsEmptyMessages />
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
}

export default function WishlistIndex() {
  return (
    <MainContainer>
      <PaddingContainer>
        <ManagementPagesContainer>
          <TextTitleH2 style={stylesWishlistIndex.title}>Wishlist</TextTitleH2>

          <ProductsContent />
        </ManagementPagesContainer>
      </PaddingContainer>
    </MainContainer>
  );
}
