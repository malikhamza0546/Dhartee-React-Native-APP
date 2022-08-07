import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
import HorizantalLine from '../../Component/Button/HorizantalLine/HorizantalLine';
import {OpenletterIcon} from '../../../assets/images/OpenletterIcon';
import PreviewHeader from '../../Component/Button/PreviewHeader/PreviewHeader';
import {Facebookicon} from '../../../assets/images/Facebookicon';
import {Twitter} from '../../../assets/images/Twitter';
import {Youtube} from '../../../assets/images/Youtube';
import {letterwithorangecolor} from '../../../assets/images/letterwithorangecolor';
import {Instagram} from '../../../assets/images/instagram';
const Guide = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <PreviewHeader name="Guide" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: hp(2),
          width: '100%',
        }}>
        <Text
          style={{
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: '700',
            marginTop: hp(4),
            width: '80%',
          }}>
          Real-world guidance for real estate industry
        </Text>
        <Text
          style={{
            fontWeight: '500',
            color: '#06192C',
            fontFamily: 'Montserrat',
            fontSize: 12,
          }}>
          Our mission is to show self-motivated people like you how to make
          great money from real estate, while helping others, minimizing risk,
          and creating more time for the things that matter.
        </Text>
        <Text
          style={{
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: '700',
            marginTop: hp(4),
            width: '80%',
          }}>
          Subscribe to our news letter
        </Text>
        <View
          style={{
            backgroundColor: '#F0F4FA',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 16,
            marginTop: 20,
            borderWidth: 1,
            width: '100%',
            borderColor: '#979BB5',
          }}>
          <View
            style={{
              width: '15%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SvgXml height="15" xml={OpenletterIcon} />
          </View>
          <TextInput
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 'normal',
              fontSize: 14,
              color: '#555568',

              width: '70%',
            }}
            placeholder="Codistan45@gmail.com"
            editable={true}
          />
        </View>
        <View style={{marginTop: hp(2)}}>
          <ButtonBottom name="Subscribe" onPress={() => console.log('Hamza')} />
        </View>
        <Text
          style={{
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: '700',
            marginTop: hp(4),
            width: '80%',
            fontFamily: 'Raleway',
          }}>
          Join our growing community
        </Text>
        <View
          style={{
            paddingBottom: hp(2),
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              height: hp(15),
              width: '48%',
              elevation: 7,
              backgroundColor: '#fff',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: hp(2),
            }}>
            <SvgXml height="30" xml={Facebookicon} />
            <Text style={{fontWeight: '700'}}>Facebook</Text>
            <Text style={{fontWeight: '700'}}>3500</Text>
          </View>
          <View
            style={{
              marginTop: hp(2),
              height: hp(15),
              width: '48%',
              elevation: 7,
              backgroundColor: '#fff',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SvgXml height="30" xml={letterwithorangecolor} />
            <Text style={{fontWeight: '700'}}>Subscriber</Text>
            <Text style={{fontWeight: '700'}}>4500</Text>
          </View>
          <View
            style={{
              height: hp(15),
              width: '48%',
              elevation: 7,
              backgroundColor: '#fff',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: hp(2),
            }}>
            <SvgXml height="30" xml={Twitter} />
            <Text style={{fontWeight: '700'}}>Subscriber</Text>
            <Text style={{fontWeight: '700'}}>4500</Text>
          </View>
          <View
            style={{
              marginTop: hp(2),
              height: hp(15),
              width: '48%',
              elevation: 7,
              backgroundColor: '#fff',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SvgXml height="30" xml={Youtube} />
            <Text style={{fontWeight: '700'}}>Subscriber</Text>
            <Text style={{fontWeight: '700'}}>4500</Text>
          </View>
          <View
            style={{
              marginTop: hp(2),
              marginRight: 153,
              height: hp(15),
              width: '48%',
              elevation: 7,
              backgroundColor: '#fff',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SvgXml height="30" xml={Instagram} />
            <Text style={{fontWeight: '700'}}>Subscriber</Text>
            <Text style={{fontWeight: '700'}}>4500</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Guide;
