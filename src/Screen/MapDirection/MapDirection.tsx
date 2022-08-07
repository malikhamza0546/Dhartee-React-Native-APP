import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {turnleft} from '../../../assets/images/turnleft';
import {curvearrow} from '../../../assets/images/curvearrow';
import {mappin} from '../../../assets/images/mappin';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
import HorizantalLine from '../../Component/Button/HorizantalLine/HorizantalLine';
const MapDirection = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        width: wp(100),
      }}>
      <View style={{height: hp(70)}}>
        <Image
          style={{height: hp(70)}}
          source={require('../../../assets/images/mapDirection.png')}
        />
      </View>
      <View style={{paddingHorizontal: wp(2)}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(2),
          }}>
          <View
            style={{
              width: '55%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View style={{width: '15%'}}>
              <SvgXml width="20" height="20" xml={mappin} />
            </View>
            <Text style={{fontSize: 14, color: '#77838F'}}>
              Ghouri Town, Rawalpindi
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#DFA72C',
              paddingHorizontal: wp(10),
              paddingVertical: hp(1.5),
              borderRadius: 16,
            }}>
            <Text style={{color: '#fff'}}>Start</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: '#1E2022',
            marginTop: hp(3),
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          About 22 min - 9.4 Km
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(2),
          }}>
          <View
            style={{
              width: '55%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View style={{width: '15%'}}>
              <SvgXml width="20" height="20" xml={curvearrow} />
            </View>
            <Text style={{fontSize: 14, color: '#77838F'}}>
              Ghouri Town, Rawalpindi
            </Text>
          </View>
          <Text style={{color: '#DFA72C', marginTop: hp(2)}}>100 m</Text>
        </View>
        <HorizantalLine />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: hp(1),
          }}>
          <View
            style={{
              width: '65%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View style={{width: '15%'}}>
              <SvgXml width="20" height="20" xml={turnleft} />
            </View>
            <Text style={{fontSize: 14, color: '#77838F'}}>
              Turn left onto the service road Pass by Arham Auto Workshop
            </Text>
          </View>
          <Text style={{color: '#DFA72C', marginTop: hp(2)}}>100 m</Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default MapDirection;
