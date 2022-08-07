import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {lock} from '../../../assets/images/lock';
import {SvgXml} from 'react-native-svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
const ManagePassword = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: hp(2),
        flexDirection: 'column',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: hp(5),
        }}>
        <Text style={{color: '#DFA72C', fontSize: 17}}>Manage Password</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: hp(5),
        }}>
        <SvgXml width="90" height="90" xml={lock} />
      </View>
      <View style={{marginTop: hp(4)}}>
        <Text
          style={{
            fontFamily: 'Montserrat',
            fontSize: 16,
            color: '#555568',
          }}>
          Enter Password
        </Text>
        <TextInput
          placeholder=""
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
      <View style={{marginTop: hp(4)}}>
        <Text
          style={{
            fontFamily: 'Montserrat',
            fontSize: 16,
            color: '#555568',
          }}>
          Confirm Password
        </Text>
        <TextInput
          placeholder=""
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
      <View style={{marginTop: hp(4)}}>
        <ButtonBottom
          name="Update Profile"
          onPress={() => console.log('Hello World')}
        />
      </View>
    </View>
  );
};
export default ManagePassword;
