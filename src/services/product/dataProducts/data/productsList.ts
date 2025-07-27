import { ProductObjectType } from 'src/services/product/dataProducts/types/genericTypes';

export const productsList: ProductObjectType[] = [
  {
    title: 'Classic T-shirt',
    price: 100.0,
    colors: [
      {
        color: 'white',
        urlImage: require('@src/assets/tshirt/images/white_tshirt.webp'),
        isSelected: false,
      },
      {
        color: 'blue',
        urlImage: require('@src/assets/tshirt/images/blue_tshirt.webp'),
        isSelected: false,
      },
      {
        color: 'red',
        urlImage: require('@src/assets/tshirt/images/red_tshirt.webp'),
        isSelected: false,
      },
    ],
    id: 345225,
    element3DPath: '@src/assets/products3D/archives/classicTShirt.glb',
    details: {
      info: 'The Classic T-shirt is for the lovers of a good t-shirt that always want to be well-dressed.',
      list: ['100% polyester', 'Imported'],
    },
  },
];
