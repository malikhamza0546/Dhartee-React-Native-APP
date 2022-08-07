import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Slider = () => {
  const [Images] = useState([
    require('../../../../assets/images/propertyDetail.png'),
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?tree', // Network image
  ]);
  return (
    <View
      style={{
        borderWidth: 1,
        height: hp(44),
      }}>
      <SliderBox
        images={Images}
        sliderBoxHeight={400}
        dotColor="#DFA72C"
        inactiveDotColor="#FEFCFF"
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          marginHorizontal: 0,
          marginBottom: 7,
          padding: 0,
          margin: 0,
        }}
      />
    </View>
  );
};
export default Slider;
