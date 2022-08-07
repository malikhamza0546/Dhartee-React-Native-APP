import React, {useState, useEffect, useRef} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {white} from 'react-native-paper/lib/typescript/styles/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
interface ICounter {
  name: string;
  BedsCounterHandler: Function;
  bedsCounter: number;
}
const CustomizaCounter = (props: any) => {
  const {name, BedsCounterHandler, bedsCounter} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: hp(2),

        justifyContent: 'space-between',
        paddingRight: hp(2),
      }}>
      <Text
        style={{
          fontFamily: 'Raleway',
          fontWeight: '600',
          fontSize: 14,
          paddingTop: hp(2.5),
        }}>
        {name}
      </Text>
      <View
        style={{
          width: '65%',
          marginLeft: wp(16),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            if (name === 'Beds') {
              if (bedsCounter == 0) {
                BedsCounterHandler(0);
              } else {
                BedsCounterHandler(bedsCounter - 1);
              }
            }
            if (name === 'Baths') {
              if (bedsCounter == 0) {
                BedsCounterHandler(0);
              } else {
                BedsCounterHandler(bedsCounter - 1);
              }
            }
          }}
          style={{
            borderWidth: 1,
            borderRadius: 6,
            borderColor: '#DCE1E5',
            width: '23%',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              paddingVertical: wp(2),
              fontSize: 20,
              fontFamily: 'Montserrat',
            }}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 6,
            borderColor: '#DCE1E5',
            width: '23%',
            backgroundColor: '#DFA72C',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              paddingVertical: wp(2),
              fontSize: 20,
              fontFamily: 'Montserrat',
              color: 'white',
            }}>
            {name === 'Beds' && bedsCounter}
            {name === 'Baths' && bedsCounter}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (name === 'Beds') {
              {
                BedsCounterHandler(bedsCounter + 1);
              }
            }
            if (name === 'Baths') {
              {
                BedsCounterHandler(bedsCounter + 1);
              }
            }
          }}
          style={{
            borderWidth: 1,
            borderRadius: 6,
            borderColor: '#DCE1E5',
            width: '23%',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              paddingVertical: wp(2),
              fontSize: 20,
              fontFamily: 'Montserrat',
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomizaCounter;
