import TextDefault from '@src/components/texts/default/TextDefault';
import { TouchableOpacity, View } from 'react-native';
import { stylesQuantityChanger } from './styles/stylesQuantityChanger';

export type TypeQuantityChanger = {
  quantity: number;
  changeQuantityFn: ({ removeFromCart }: { removeFromCart?: boolean }) => {};
};

export function QuantityChanger({ quantity, changeQuantityFn }: TypeQuantityChanger) {
  return (
    <View style={stylesQuantityChanger.container}>
      <TouchableOpacity onPressIn={() => changeQuantityFn({ removeFromCart: true })}>
        <TextDefault style={stylesQuantityChanger.symbol}>-</TextDefault>
      </TouchableOpacity>

      <TextDefault style={stylesQuantityChanger.quantity}>{quantity}</TextDefault>

      <TouchableOpacity onPressIn={() => changeQuantityFn({})}>
        <TextDefault style={stylesQuantityChanger.symbol}>+</TextDefault>
      </TouchableOpacity>
    </View>
  );
}
