import TextDefault from '@src/components/texts/default/TextDefault';
import { TouchableOpacity, View } from 'react-native';

export type TypeQuantityChanger = {
  quantity: number;
  changeQuantityFn: ({ removeFromCart }: { removeFromCart?: boolean }) => {};
};

export function QuantityChanger({ quantity, changeQuantityFn }: TypeQuantityChanger) {
  return (
    <View>
      <TouchableOpacity onPressIn={() => changeQuantityFn({ removeFromCart: true })}>-</TouchableOpacity>

      <TextDefault>{quantity}</TextDefault>

      <TouchableOpacity onPressIn={() => changeQuantityFn({})}>+</TouchableOpacity>
    </View>
  );
}
