import { ProductObjectType } from 'src/services/product/dataProducts/types/genericTypes';
import whiteTShirtImg from '@src/assets/products/classicTShirt/images/white_tshirt.webp';
import blueTShirtImg from '@src/assets/products/classicTShirt/images/blue_tshirt.webp';
import redTShirtImg from '@src/assets/products/classicTShirt/images/red_tshirt.webp';

const productTitle = 'Classic T-shirt';

const productPrice = 100.0;

const productWithColors = {
  white: {
    color: 'white',
    urlImage: whiteTShirtImg,
    colorId: '001',
  },
  red: {
    color: 'red',
    urlImage: redTShirtImg,
    colorId: '002',
  },
  blue: {
    color: 'blue',
    urlImage: blueTShirtImg,
    colorId: '003',
  },
};

const productId = '0001';

const productType = 'tShirt';

const productDetails = {
  info: 'The Classic T-shirt is for the lovers of a good T-shirt that always want to be well-dressed.',
  list: ['100% polyester', 'Imported', 'item #0001'],
};

const productSizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

const productUniqueIds = {
  xs: { white: '00010011', red: '00010021', blue: '00010031' },
  s: { white: '00010012', red: '00010022', blue: '00010032' },
  m: { white: '00010013', red: '00010023', blue: '00010033' },
  l: { white: '00010014', red: '00010024', blue: '00010034' },
  xl: { white: '00010015', red: '00010025', blue: '00010035' },
  xxl: { white: '00010016', red: '00010026', blue: '00010036' },
};

const productColors: ['white', 'blue', 'red'] = ['white', 'blue', 'red'];

export const productsClassicTShirt = makeProductArray()
