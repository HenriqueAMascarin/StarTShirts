import { ProductObjectType } from '@src/services/product/dataProducts/types/genericTypes';
import { productsClassicTShirt } from './products/classicTShirt/productsClassicTShirt';

// example of uniqueIdsBySize = 0001 the product id, 001 the color id, 6 the size id = 00010016
export const productsList: ProductObjectType[] = [...productsClassicTShirt];
