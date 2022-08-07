import React from 'react';
import {Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const HorizantalLine = () => {
  return (
    <View
      style={{
        borderWidth: 0.5,
        borderColor: '#EDEDED',
        marginTop: hp(2),
      }}></View>
  );
};
export default HorizantalLine;
