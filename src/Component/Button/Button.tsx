import React, {ReactElement} from 'react';
import {StyleProp, View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
interface Props {
  btnStyle: any;
  onSubmit: Function;
  textStyle: any;
  text: string;
  logo?: any;
  navigation?: any;
}

export const Button = (Props: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={Props.btnStyle}
      onPress={() => {
        () => Props.onSubmit();
      }}>
      <Text style={Props.textStyle}>{Props.text}</Text>
    </TouchableOpacity>
  );
};
