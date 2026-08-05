import PaddingContainer from '@src/components/containers/PaddingContainer';
import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import LoadingScreen from '@src/components/suspense/loading/LoadingScreen';
import MainContainer from '@src/modules/InApp/components/containers/main/MainContainer';
import ManagementPagesContainerWithTitle from '@src/modules/InApp/components/containers/ManagementPagesWithTitle/ManagementPagesContainerWithTitle';
import ListIsEmptyMessages from '@src/modules/InApp/components/emptyList/ListIsEmptyMessages';
import { stylesCartProductsContent } from '@src/modules/InApp/Cart/styles/stylesCartProductsContent';
import CartProductCard from '@src/modules/InApp/Cart/components/cartProduct/CartProductCard';
import { getCartProducts } from '@src/services/product/cart/methods/getCartProducts';
import TextDefault from '@src/components/texts/default/TextDefault';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import { formatCurrency } from '@src/utils/formatCurrency';

function ProductsCartContent() {
  const [cartProducts, changeCartProducts] = useState<Awaited<ReturnType<typeof getCartProducts>>>({
    total: 0,
    cartWithProducts: [],
  });

  async function getCartProductsAndSetToState() {
    const reponseCartProductsData = await getCartProducts();

    changeCartProducts(reponseCartProductsData);
  }

  useEffect(() => {
    getCartProductsAndSetToState();
  }, []);

  const hasSomeCartProduct = useMemo(
    () => cartProducts?.cartWithProducts != null && cartProducts?.cartWithProducts?.length > 0,
    [cartProducts],
  );

  return (
    <View style={stylesCartProductsContent.container}>
      {hasSomeCartProduct ? (
        <View>
          <View style={stylesCartProductsContent.containerProducts}>
            {cartProducts?.cartWithProducts?.map((cartProduct, cartKeyProduct) => {
              return (
                <CartProductCard
                  {...cartProduct}
                  key={cartKeyProduct}
                  index={cartKeyProduct}
                  getCartProductsAndSetToState={getCartProductsAndSetToState}
                />
              );
            })}
          </View>

          <View style={stylesCartProductsContent.containerPrice}>
            <TextDefault style={stylesCartProductsContent.containerPriceText}>Total</TextDefault>

            <TextDefault style={stylesCartProductsContent.containerPriceText}>
              {formatCurrency(cartProducts?.total)}
            </TextDefault>
          </View>

          <DefaultButton
            title="Checkout"
            textProps={{ style: stylesCartProductsContent.checkoutBtn }}
          />
        </View>
      ) : cartProducts != null ? (
        <ListIsEmptyMessages
          title="Your cart is empty."
          subtitle="Add items to your cart by shopping the site."
        />
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
}

export default function CartIndex() {
  return (
    <MainContainer>
      <PaddingContainer>
        <ManagementPagesContainerWithTitle title={'Your cart'}>
          <ProductsCartContent />
        </ManagementPagesContainerWithTitle>
      </PaddingContainer>
    </MainContainer>
  );
}
