import TextDefault from '@src/components/texts/default/TextDefault';
import DefaultButton from '@src/components/buttons/default/DefaultButton';
import { stylesListIsEmptyMessages } from '@src/modules/InApp/components/emptyList/styles/stylesListIsEmptyMessages';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

type listIsEmptyMessagesType = {
  title: string;
  subtitle: string;
};

export default function ListIsEmptyMessages({ title, subtitle }: listIsEmptyMessagesType) {
  const navigation = useNavigation();

  function onShopNow() {
    navigation.navigate('home');
  }

  return (
    <View style={stylesListIsEmptyMessages.container}>
      <View>
        <TextDefault>{title}</TextDefault>

        <TextDefault>{subtitle}</TextDefault>
      </View>

      <DefaultButton
        title="Shop now"
        style={stylesListIsEmptyMessages.shopBtn}
        onPressIn={onShopNow}
      />
    </View>
  );
}
