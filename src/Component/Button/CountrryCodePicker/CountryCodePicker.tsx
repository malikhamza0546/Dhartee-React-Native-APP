import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {styles} from './CountryCodePickerStyle';
import Modal from 'react-native-modal';
import {Countries} from '../../../appConstants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import {IPhonePicker} from './interface';
export const PhoneNumberPicker = (props: IPhonePicker) => {
  const {onChange, isError, errorMsg} = props;
  const [isModal, setIsModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    dial_code: '+92',
    code: 'US',
    preferred: true,
    flag: ':us:',
  });
  return (
    <View style={[styles.sectionContainer]}>
      <Text
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 'normal',
          fontSize: 16,
          color: '#555568',
          paddingBottom: hp(1),
        }}>
        Enter Phone number<Text style={{color: '#FD0707'}}>*</Text>
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 1,
          marginTop: 5,
          borderRadius: 16,
          borderColor: '#979BB5',
        }}>
        <TouchableOpacity
          style={{
            paddingLeft: wp(2),
            flexDirection: 'row',
            alignItems: 'center',
            width: '24%',
            borderColor: 'grey',
            justifyContent: 'space-between',
          }}
          onPress={() => setIsModal(true)}>
          <Text style={{fontSize: wp(5), paddingLeft: wp(3)}}>
            {selectedCountry.dial_code + '  '}
          </Text>
          <View
            style={{
              width: wp(0.5),
              height: hp(5),
              backgroundColor: '#C0C2D0',
            }}></View>
          {/* <Icon name="line" size={wp(4)} style={{borderWidth: 1}} /> */}
        </TouchableOpacity>
        <TextInput
          placeholder="3 - -    - - - -    - - -"
          placeholderTextColor="#979BB5"
          style={{
            width: '75%',
            fontSize: wp(5.5),
            fontFamily: 'Montserrat',
            fontWeight: 'normal',
            paddingLeft: wp(3),
            borderColor: '#979BB5',
            color: 'black',
            ...Platform.select({
              ios: {
                paddingHorizontal: wp(2),
                paddingVertical: hp(1.3),
              },
              android: {},
            }),
          }}
          onChangeText={text => {
            try {
              onChange(selectedCountry, text);
            } catch (e) {
              console.log(e);
            }
          }}
          keyboardType={'number-pad'}
        />
      </View>
      {isError && <Text style={{color: 'red'}}>{errorMsg}</Text>}
      {!isError && <Text style={{color: 'red'}}>{errorMsg}</Text>}
      <Modal
        isVisible={isModal}
        onBackButtonPress={() => setIsModal(false)}
        onBackdropPress={() => setIsModal(false)}>
        <View
          style={{
            width: wp(90),
            height: hp(70),
            backgroundColor: 'white',
            borderRadius: wp(2),
            padding: wp(5),
          }}>
          <ScrollView>
            {Countries.map((d: any, i: any) => {
              return (
                <View style={{backgroundColor: 'white'}}>
                  <TouchableOpacity
                    style={{marginVertical: hp(1), flexDirection: 'row'}}
                    onPress={() => {
                      setSelectedCountry(d);
                      setIsModal(false);
                    }}>
                    <Text>{d.flag + ' ' + d.name}</Text>
                  </TouchableOpacity>
                  <View
                    style={{height: hp(0.1), backgroundColor: 'lightgrey'}}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};
export const PhoneNumberPickerUI = (props: IPhonePicker) => {
  const {onChange, containerStyle} = props;
  const [isModal, setIsModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    dial_code: '+1',
    code: 'US',
    preferred: true,
    flag: ':us:',
  });
  return (
    <View style={[styles.sectionContainer, containerStyle]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            width: '30%',
            borderColor: 'grey',
            justifyContent: 'space-between',
          }}
          onPress={() => setIsModal(true)}>
          <Text style={{fontSize: wp(4.5)}}>
            {selectedCountry.flag + ' ' + selectedCountry.dial_code + '  '}
          </Text>
          <Icon name="caretdown" size={wp(4)} />
        </TouchableOpacity>
        <TextInput
          placeholder="phone number"
          style={{
            width: '65%',
            fontSize: wp(4),
            borderBottomWidth: 1,
            borderColor: 'grey',
            ...Platform.select({
              ios: {
                paddingHorizontal: wp(2),
                paddingVertical: hp(1.3),
              },
              android: {},
            }),
          }}
          onChangeText={text => {
            try {
              onChange(selectedCountry, text);
            } catch (e) {
              console.log(e);
            }
          }}
          keyboardType={'number-pad'}
        />
      </View>
      <Modal
        isVisible={isModal}
        onBackButtonPress={() => setIsModal(false)}
        onBackdropPress={() => setIsModal(false)}>
        <View
          style={{
            width: wp(90),
            height: hp(70),
            backgroundColor: 'white',
            borderRadius: wp(2),
            padding: wp(5),
          }}>
          <ScrollView>
            {Countries.map((d: any, i: any) => {
              return (
                <View style={{backgroundColor: 'white'}}>
                  <TouchableOpacity
                    style={{marginVertical: hp(1), flexDirection: 'row'}}
                    onPress={() => {
                      setSelectedCountry(d);
                      setIsModal(false);
                    }}>
                    <Text>{d.flag + ' ' + d.name}</Text>
                  </TouchableOpacity>
                  <View
                    style={{height: hp(0.1), backgroundColor: 'lightgrey'}}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};
