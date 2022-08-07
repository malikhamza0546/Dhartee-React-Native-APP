import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {SvgXml} from 'react-native-svg';
import {slide} from '../../../assets/images/Slide';
import {filter} from '../../../assets/images/Filter';
import {appart} from '../../../assets/images/Appartment';
import {bed} from '../../../assets/images/bed';
import {map} from '../../../assets/images/map';
import {fillHeart} from '../../../assets/images/fill_heart';
import {unfillHeart} from '../../../assets/images/unfill_heart';
import {Icon, Avatar} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../Welcome/Welcome';
import {DrawerActions} from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const homeScreen = (props: any) => {
  const navigation = useNavigation();
  const [heartVisible, setheartVisible] = useState(true);
  const [TogglerForSell, setTogglerForSell] = useState(false);
  const [TogglerForRent, setTogglerForRent] = useState(false);
  const [Decider, setDecider] = useState(false);
  const [distance, setdistance] = useState('25km');
  const [distanceSelected, setdistanceSelected] = useState([
    {
      name: '25km',
      value: '25km ',
    },
    {
      name: '50km',
      value: '50km ',
    },
    {
      name: '75km',
      value: '75km',
    },
    {
      name: '100km',
      value: '100km',
    },
  ]);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.headerView}>
          <View style={{flex: 0.2}}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.dispatch(DrawerActions.openDrawer())
              }>
              <SvgXml
                style={styles.slide_img}
                width="29"
                height="20"
                xml={slide}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.8}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Avatar
                size={45}
                rounded
                containerStyle={{
                  alignSelf: 'flex-end',
                  top: 15,
                }}
                source={{
                  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchField}>
          <View style={styles.searchIcon}>
            <Icon
              style={styles.emailIcon}
              name="search-outline"
              type="ionicon"
              color="#000"
              containerStyle={{opacity: 3}}
            />
          </View>
          <View style={styles.searchText}>
            <TextInput
              style={styles.formInput_email}
              placeholder="Rawalpindi"
            />
          </View>
          <View style={styles.searchDropdown}>
            <Picker
              mode="dropdown"
              style={{
                color: 'black',
                height: 50,
                width: 110,
                left: 5,
              }}
              selectedValue={distance}
              onValueChange={item => {
                setdistance(item);
              }}>
              {distanceSelected.map((item, key) => {
                return (
                  <Picker.Item label={item.name} value={item.value} key={key} />
                );
              })}
            </Picker>
          </View>
          <View style={styles.searchFilter}>
            <SvgXml
              style={styles.filter_img}
              width="29"
              height="20"
              xml={filter}
            />
          </View>
        </View>
        <View style={styles.tabFlex}>
          <View style={styles.tabContainer}>
            <TouchableOpacity>
              <Text
                style={styles.tabText_All}
                adjustsFontSizeToFit={true}
                allowFontScaling={true}>
                All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
              <Text style={styles.tabText_Buy}>Buy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Rent')}>
              <Text style={styles.tabText_Rent}>Rent</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Invest')}>
              <Text style={styles.tabText_Invest}>Invest</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.propertyText}>Property List</Text>
        </View>
        <ScrollView style={[styles.propertyContainer]}>
          <View style={[styles.propertyImg]}>
            <Image
              style={[styles.property_icon]}
              source={require('../../../assets/images/Grouph9365.png')}
            />
          </View>
          <View style={styles.property_flex}>
            <View>
              <Text style={styles.propertyPrice}>PKR 17 crore</Text>
            </View>
            <View>
              <Text style={styles.propertyArea}>
                16 Marla Plaza For Sale in Ghouri Garden
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <SvgXml style={styles.map_img} width="18" height="18" xml={map} />
              <Text style={styles.propertyLocationtext}>
                Ghauri Town, Rawalpindi
              </Text>
            </View>
          </View>
          <View style={styles.propertyDetail}>
            <View>
              <TouchableOpacity onPress={() => setheartVisible(!heartVisible)}>
                <SvgXml
                  style={styles.heart_img}
                  width="29"
                  height="20"
                  xml={heartVisible ? fillHeart : unfillHeart}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 5}}>
              <Icon
                style={styles.locationIcon}
                name="logo-whatsapp"
                type="ionicon"
                color="#2AF598"
                // containerStyle={{opacity: 3}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <SvgXml
                style={styles.heart_img}
                width="29"
                height="20"
                xml={appart}
              />
              <Text style={styles.aparttext}>40 Appartments</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <SvgXml
                style={styles.heart_img}
                width="29"
                height="20"
                xml={bed}
              />
              <Text style={styles.aparttext}>120 Shops</Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            height: hp(13.5),
            marginHorizontal: 12,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CameraImplmentation', {
                obj: {
                  Decider: 'Sell',
                },
              });
              setTogglerForSell(true);
              setTogglerForRent(false);
              setDecider(false);
            }}
            style={{
              borderWidth: 1,
              borderRadius: 14,
              paddingHorizontal: wp(13),
              paddingVertical: hp(1.5),
              borderColor: '#DCE1E5',
              backgroundColor: TogglerForSell ? '#DFA72C' : 'white',
            }}>
            <Text style={{color: '#77838F', fontFamily: 'Montserrat'}}>
              Sell
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CameraImplmentation', {
                obj: {
                  Decider: 'Rent',
                },
              });
              setTogglerForSell(false);
              setTogglerForRent(true);
              setDecider(true);
            }}
            style={{
              borderWidth: 1,
              borderRadius: 14,
              paddingHorizontal: wp(13),
              paddingVertical: hp(1.5),
              borderColor: '#DCE1E5',
              backgroundColor: TogglerForRent ? '#DFA72C' : 'white',
            }}>
            <Text style={{color: '#77838F', fontFamily: 'Montserrat'}}>
              Rent
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default homeScreen;
