import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
// import {SvgXml} from 'react-native-svg';
// import {blackcross} from '../../assets/images/blackcross';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/native';
// import {Logout_api, Profile_api, OneSignalUserid_api} from '../Screen/Api/Api';

// import {DrawerActions} from '@react-navigation/native';
// import OneSignal from 'react-native-onesignal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import {Icon, Avatar} from 'react-native-elements';
// import styles from '../Sidebar/styles';
import {Avatar, Icon} from 'react-native-elements';
import {Aboutus} from '../../../assets/images/Aboutus';
import {Contactus} from '../../../assets/images/Contactus';
import {PrivacyPolicyIcon} from '../../../assets/images/PrivacyPolicy';
import ContactUs from '../ContactUs/ContactUs';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import {SvgXml} from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView
      style={{
        marginBottom: hp('1%'),
        marginTop: hp('1%'),
        paddingHorizontal: wp(2),
        width: '100%',
      }}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          marginTop: hp(5),
          // height: hp(25),
          paddingVertical: hp(3),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Avatar
          size={110}
          rounded
          containerStyle={{
            backgroundColor: 'white',
          }}
          source={require('../../../assets/images/young.png')}
        />
        <Text
          style={{
            color: '#DFA72C',
            fontFamily: 'Raleway',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          WELCOME!
        </Text>
        <Text
          style={{
            color: '#06192C',
            fontFamily: 'Raleway',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Waseem Khan
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AboutUS')}
        style={{
          width: '100%',

          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: wp(5),
          paddingVertical: hp(2),
          backgroundColor: '#F6F0EA',
          borderRadius: 16,
        }}>
        <View style={{width: '15%'}}>
          <SvgXml width="20" xml={Aboutus} />
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            width: '75%',
            fontFamily: 'Montserrat',
            color: '#06192C',
          }}>
          About Us
        </Text>
        <Icon name={'right'} type={'antdesign'} size={wp(7)} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ContactUs')}
        style={{
          width: '100%',
          marginTop: hp(2),
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: wp(5),
          paddingVertical: hp(2),
          backgroundColor: '#F6F0EA',
          borderRadius: 16,
        }}>
        <View style={{width: '15%'}}>
          <SvgXml width="20" xml={Contactus} />
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            width: '75%',
            fontFamily: 'Montserrat',
            color: '#06192C',
          }}>
          Contact Us
        </Text>
        <Icon name={'right'} type={'antdesign'} size={wp(7)} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PrivacyPolicy')}
        style={{
          width: '100%',
          marginTop: hp(2),
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: wp(5),
          paddingVertical: hp(2),
          backgroundColor: '#F6F0EA',
          borderRadius: 16,
        }}>
        <View style={{width: '15%'}}>
          <SvgXml width="20" xml={PrivacyPolicyIcon} />
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            width: '75%',
            fontFamily: 'Montserrat',
            color: '#06192C',
          }}>
          Privacy Policy
        </Text>
        <Icon name={'right'} type={'antdesign'} size={wp(7)} color={'black'} />
      </TouchableOpacity>

      <View style={{marginTop: hp(30)}}>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.removeItem('api_token');
            navigation.navigate('Welcome');
          }}
          style={[styles.btnSign_in]}>
          <Text style={styles.btnSign_text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

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
