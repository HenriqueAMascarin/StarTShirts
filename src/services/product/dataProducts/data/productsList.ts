import { ProductObjectType } from 'src/services/product/dataProducts/types/genericTypes';

export const productsList: ProductObjectType[] = [
  {
    title: 'Classic T-shirt',
    price: 100.0,
    colors: [
      { color: 'white', urlImage: '@src/assets/tshirt/images/white_tshirt.webp' },
      { color: 'blue', urlImage: '@src/assets/tshirt/images/blue_tshirt.webp' },
      {color: 'red', urlImage: '@src/assets/tshirt/images/red_tshirt.webp'}
    ],
    id: 345225,
    element3DPath: '@src/assets/products3D/archives/classicTShirt.glb',
    details: {
      info: 'The Classic T-shirt is for the lovers of a good t-shirt that always want to be well-dressed.',
      list: ['100% polyester', 'Imported'],
    },
  },
];
