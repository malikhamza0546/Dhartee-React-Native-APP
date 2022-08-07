import React from 'react';
import {
  StyleProp,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  btnSign_in: {
    backgroundColor: '#DFA72C',
    padding: 14,
    width: '100%',
    borderRadius: 16,
  },
  btnSign_text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
});
interface IBottom {
  name: string;
  onPress: Function;
  ButtonLoader?: Boolean;
}
const ButtonBottom = (props: IBottom) => {
  const {name, onPress, ButtonLoader} = props;
  const navigation = useNavigation();
  console.log(ButtonLoader, 'ButtonLoader');
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnSign_in]}
      disabled={ButtonLoader === true ? true : false}>
      {ButtonLoader ? (
        // <Text style={styles.btnSign_text}>Loading</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 4,
          }}>
          <ActivityIndicator size="small" color="white" />
        </View>
      ) : (
        <Text style={styles.btnSign_text}>{name}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonBottom;
