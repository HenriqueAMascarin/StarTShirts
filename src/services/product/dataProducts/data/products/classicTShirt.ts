import whiteTShirtImg from '@src/assets/products/classicTShirt/images/white_tshirt.webp';
import blueTShirtImg from '@src/assets/products/classicTShirt/images/blue_tshirt.webp';
import redTShirtImg from '@src/assets/products/classicTShirt/images/red_tshirt.webp';
import { makeProductsArray } from '@src/services/product/dataProducts/data/utils/makeProductArray';
import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';

export const productTitle: ProductObjectType['title'] = 'Classic T-shirt';

export const productPrice: ProductObjectType['price'] = 100.00;

export const productWithAllColors: ProductObjectType['productWithAllColors'] = [
  {
    color: 'white',
    urlImage: whiteTShirtImg,
    colorId: '001',
  },
  {
    color: 'red',
    urlImage: redTShirtImg,
    colorId: '002',
  },
  {
    color: 'blue',
    urlImage: blueTShirtImg,
    colorId: '003',
  },
];

export const productType: ProductObjectType['type'] = 'tShirt';

export const productDetails: ProductObjectType['details'] = {
  info: 'The Classic T-shirt is for the lovers of a good T-shirt that always want to be well-dressed.',
  list: ['100% polyester', 'Imported'],
};

export const productSizes: ProductObjectType['sizes'] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

export const productUniqueIds: ProductObjectType['productWithUniqueIds'] = {
  xs: { white: '00010011', red: '00010021', blue: '00010031' },
  s: { white: '00010012', red: '00010022', blue: '00010032' },
  m: { white: '00010013', red: '00010023', blue: '00010033' },
  l: { white: '00010014', red: '00010024', blue: '00010034' },
  xl: { white: '00010015', red: '00010025', blue: '00010035' },
  xxl: { white: '00010016', red: '00010026', blue: '00010036' },
};

export const productsClassicTShirt = makeProductsArray({
  dataProduct: {
    productTitle,
    productPrice,
    productDetails,
    productType,
  },
  productWithAllColors,
  productSizes,
  productUniqueIds,
});
