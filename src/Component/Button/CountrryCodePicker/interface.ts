import {ViewStyle} from 'react-native';
export interface IPhonePicker {
  containerStyle?: ViewStyle;
  errorMsg?: string;
  // title: string;
  onChange?: Function;
  isError?: boolean;
}
