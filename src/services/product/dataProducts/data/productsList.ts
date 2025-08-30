import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import whiteTShirtImg from '@src/assets/tshirt/images/white_tshirt.webp';
import blueTShirtImg from '@src/assets/tshirt/images/blue_tshirt.webp';
import redTShirtImg from '@src/assets/tshirt/images/red_tshirt.webp';

export const productsList: ProductObjectType[] = [
  {
    title: 'Classic T-shirt',
    price: 100.00,
    colors: [
      {
        color: 'white',
        urlImage: whiteTShirtImg,
        isSelected: false,
      },
      {
        color: 'blue',
        urlImage: blueTShirtImg,
        isSelected: false,
      },
      {
        color: 'red',
        urlImage: redTShirtImg,
        isSelected: false,
      },
    ],
    id: 345225,
    element3DPath: '@src/assets/products3D/archives/classicTShirt.glb',
    details: {
      info: 'The Classic T-shirt is for the lovers of a good t-shirt that always want to be well-dressed.',
      list: ['100% polyester', 'Imported', 'item #345225'],
    },
  },
];
