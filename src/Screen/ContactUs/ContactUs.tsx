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
import {mappin} from '../../../assets/images/mappin';
import {OpenletterIcon} from '../../../assets/images/OpenletterIcon';
import PreviewHeader from '../../Component/Button/PreviewHeader/PreviewHeader';
const ContactUs = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <PreviewHeader name="Contact Us" />
      <View
        style={{
          paddingHorizontal: wp(2),
        }}>
        <View style={{paddingHorizontal: wp(2)}}>
          <Text style={{marginTop: hp(3)}}>
            Fill out the form below and we will soon be in touch.
          </Text>
          <View style={{marginTop: hp(2)}}>
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontSize: 16,
                color: '#555568',
              }}>
              Full Name*
            </Text>
            <TextInput
              placeholder="Enter your name"
              style={{
                borderWidth: 1,
                marginTop: hp(0.5),
                borderRadius: 16,
                borderColor: '#979BB5',
                color: 'black',
                paddingLeft: wp(3),
              }}
            />
          </View>
          <View style={{marginTop: hp(2)}}>
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontSize: 16,
                color: '#555568',
              }}>
              Phone Number*
            </Text>
            <TextInput
              placeholder="Enter your Phone Number"
              style={{
                borderWidth: 1,
                marginTop: hp(0.5),
                borderRadius: 16,
                borderColor: '#979BB5',
                color: 'black',
                paddingLeft: wp(3),
              }}
            />
          </View>
          <View style={{marginTop: hp(2)}}>
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontSize: 16,
                color: '#555568',
              }}>
              Email*
            </Text>
            <TextInput
              keyboardType="number-pad"
              placeholder="Enter your Email"
              style={{
                borderWidth: 1,
                marginTop: hp(0.5),
                borderRadius: 16,
                borderColor: '#979BB5',
                color: 'black',
                paddingLeft: wp(3),
              }}
            />
          </View>
          <View style={{marginTop: hp(2)}}>
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontSize: 16,
                color: '#555568',
              }}>
              Message*
            </Text>
            <View
              style={{
                height: hp(20),
                borderColor: '#979BB5',
                borderWidth: 1,
                borderRadius: 16,
                backgroundColor: '#f7f7f9',
              }}>
              <TextInput
                placeholder="Description"
                placeholderTextColor={'#77838F'}
                multiline={true}
                style={{
                  backgroundColor: '#f7f7f9',
                  borderRadius: 16,
                  width: '100%',
                  paddingLeft: wp(4),
                }}
              />
            </View>
          </View>
          <View style={{marginTop: hp(2)}}>
            <ButtonBottom name="Submit" onPress={() => console.log('Submit')} />
          </View>
          <Text style={{marginTop: hp(2), fontWeight: 'bold'}}>Address:</Text>
          <View
            style={{
              marginTop: hp(2),
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View style={{width: '10%'}}>
              <SvgXml width="20" height="20" xml={OpenletterIcon} />
            </View>
            <Text style={{color: '#555568', width: '90%'}}>
              info@gharbaar.com
            </Text>
          </View>
          <View
            style={{
              marginTop: hp(2),
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View style={{width: '10%'}}>
              <SvgXml width="20" height="20" xml={mappin} />
            </View>
            <Text style={{color: '#555568', width: '90%'}}>
              3rd Floor, One Expressway, Gulberg Greens, Islamabad.
            </Text>
          </View>
          <View
            style={{
              marginTop: hp(2),
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View style={{width: '10%'}}>
              <SvgXml width="20" height="20" xml={mappin} />
            </View>
            <Text style={{color: '#555568', width: '90%'}}>
              16th Floor Tower B, Centaurus Mall, F-8, Islamabad.
            </Text>
          </View>
          <View style={{marginTop: hp(3), height: hp(70)}}>
            <Image
              style={{width: '98%'}}
              source={require('../../../assets/images/mapdirectionwithlogo.png')}
            />
          </View>
          <View style={{marginTop: hp(2)}}></View>
        </View>
      </View>
    </ScrollView>
  );
};
export default ContactUs;
