import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
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
import {DrawerActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {REACT_APP_API_URL} from '../../Services/APIs/auth';
import {bath} from '../../../assets/images/Bath';
import {bedroom} from '../../../assets/images/Bed_room';
const buy = (props: any) => {
  const navigation = useNavigation();
  const ListingArray = useSelector(
    state => state?.ListingReducer?.Listing_Data,
  );
  const ArrayForRentOnly = ListingArray.filter(obj => {
    return obj.Decider === 'Sell';
  });
  const [mapingArray, setmapingArray] = useState(ArrayForRentOnly);

  const [heartVisible, setheartVisible] = useState(true);
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
        <View style={[styles.headerView]}>
          <View style={{flex: 0.2}}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.dispatch(DrawerActions.openDrawer())
              }>
              <SvgXml
                style={[styles.slide_img]}
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

        <View style={[styles.searchField]}>
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
          <TouchableOpacity
            style={[styles.searchFilter]}
            onPress={() => navigation.navigate('PropertyTypePriceMonthly')}>
            <SvgXml
              style={styles.filter_img}
              width="29"
              height="20"
              xml={filter}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tabFlex}>
          <View style={styles.tabContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.tabText_All}>All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabContainer}>
            <TouchableOpacity>
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
        {/* Propety Container */}
        {mapingArray.map(obj => {
          return (
            <View style={[styles.propertyContainer]}>
              <View style={styles.propertyImg}>
                <View>
                  <Image
                    style={styles.property_icon}
                    source={{
                      uri: `${REACT_APP_API_URL}/${obj?.ListingData?.featureImg}`,
                    }}
                  />
                </View>
              </View>
              <View style={styles.property_flex}>
                <View>
                  <Text style={styles.propertyPrice}>
                    For Sale {obj?.ListingData?.downPayment}
                  </Text>
                </View>
                <View>
                  <Text style={styles.propertyArea}>
                    House Available for Rent in {obj?.ListingData?.place}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <SvgXml
                    style={styles.map_img}
                    width="18"
                    height="18"
                    xml={map}
                  />
                  <Text style={styles.propertyLocationtext}>
                    {obj?.ListingData?.place}
                  </Text>
                </View>
              </View>
              <View style={styles.propertyDetail}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 70,
                  }}>
                  <View>
                    <TouchableOpacity
                      onPress={() => setheartVisible(!heartVisible)}>
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
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    width: 160,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',

                      marginRight: 10,
                    }}>
                    <SvgXml
                      style={styles.bath_img}
                      width="29"
                      height="20"
                      xml={bath}
                    />
                    <Text style={styles.aparttext}>
                      {' '}
                      {obj?.ListingData?.baths}
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <SvgXml
                      style={styles.bedroom_img}
                      width="29"
                      height="20"
                      xml={bedroom}
                    />
                    <Text style={styles.aparttext}>
                      {obj?.ListingData?.beds}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </KeyboardAwareScrollView>
    </View>
  );
};
export default buy;
