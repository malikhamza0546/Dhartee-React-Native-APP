import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
const PreviewHeader = (props: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: hp(9),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: '15%',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Icon
          style={{width: wp(10)}}
          name={'left'}
          type={'antdesign'}
          size={wp(7)}
          color={'#DFA72C'}
        />
      </TouchableOpacity>
      <View
        style={{
          width: '85%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#DFA72C',
            fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: 20,
          }}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};
export default PreviewHeader;
