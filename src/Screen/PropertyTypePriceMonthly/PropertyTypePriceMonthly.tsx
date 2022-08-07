import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SvgXml} from 'react-native-svg';
import {filter} from '../../../assets/images/Filter';
import {useNavigation} from '@react-navigation/native';
import RangeSlider from '../../Component/Button/RangeSlider/RangeSlider';
import CheckBox from 'react-native-check-box';
import Accordain from '../../Component/Button/Accordain/Accordain';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
import FilterArray from '../../Component/Button/FiltersArray/FiltersArray';
import HorizantalLine from '../../Component/Button/HorizantalLine/HorizantalLine';
import CustomizaCounter from '../../Component/Button/CustomizaConter/CustomizaCounter';
import {Dropdown} from '../../Component/Button/DropDown/DropDown';
import {Value} from 'react-native-reanimated';
import FiltersAccordain from '../FiltersAccordain/FiltersAccordain';
const PropertyTypePriceMonthly = () => {
  const navigation = useNavigation();
  const [checkboxStatus, setCheckBoxStatus] = useState(false);
  const [checkboxforPhoto, setCheckboxforPhoto] = useState(false);
  const [isInvest, setIsInvest] = useState('Rent');
  const [bedsCounter, setBedsCounter] = useState(0);
  const [bathsCounter, setBathsCounter] = useState(0);
  const PropertyType = [
    {value: 'Flat', selected: false},
    {value: 'Penthouse', selected: false},
    {value: 'House', selected: true},
    {value: 'Farm House', selected: false},
  ];
  const Agencies = ['Property Nama', 'Hadi Developers', 'Zimarg Developers'];
  const BedsCounterHandler = value => {
    setBedsCounter(value);
  };
  const BathsCounterHandler = value => {
    setBathsCounter(value);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{}}>
        <View
          style={{
            borderColor: 'red',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Image
            style={{borderWidth: 1, width: wp(7), height: hp(5)}}
            source={require('../../../assets/images/cross_button.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '25%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <SvgXml width="29" height="23" xml={filter} />

            <Text
              style={{
                fontFamily: 'Montserrat',
                fontSize: 14,
                color: '#DFA72C',
                fontWeight: '600',
              }}>
              Filters
            </Text>
          </View>

          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 14,
              fontWeight: '500',
              textDecorationLine: 'underline',
            }}>
            Reset Filters
          </Text>
        </View>
        <FilterArray
          onButtonPressed={value => {
            setIsInvest(value.value);
          }}
        />
        {isInvest === 'Buy' && (
          <View>
            <View style={{marginTop: hp(3)}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                }}>
                Property Type
              </Text>
            </View>
            <View style={[styles.tabFlex]}>
              <View style={[styles.tabContainer, {marginLeft: 0}]}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text
                    style={[
                      styles.tabText_All,
                      {textDecorationLine: 'underline', color: '#D5A72C'},
                    ]}>
                    Homes
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
                  <Text style={styles.tabText_All}>Plots</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabContainer}>
                <TouchableOpacity>
                  <Text style={styles.tabText_All}>Commercials</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                marginTop: hp(2),
              }}>
              {PropertyType.map((obj, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      paddingVertical: hp(1.5),
                      paddingHorizontal: wp(6),
                      marginRight: wp(3),
                      borderRadius: 14,
                      borderWidth: 1,
                      borderColor: '#DCE1E5',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: obj.selected ? '#DFA72C' : '#fff',
                    }}>
                    <Text
                      style={{
                        color: obj.selected ? '#fff' : '#77838F',
                        fontSize: 14,
                        fontFamily: 'Montserrat',
                      }}>
                      {obj.value}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <HorizantalLine />
            <View
              style={{
                marginTop: hp(2),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                }}>
                Price Monthly
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  color: '#DFA72C',
                }}>
                PKR 2,500 - PKR 10,000
              </Text>
            </View>
            <View style={{marginTop: hp(3)}}>
              <RangeSlider />
            </View>
            <HorizantalLine />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <View style={[styles.tabFlex, {width: '45%', marginTop: 0}]}>
                <View style={[styles.tabContainer, {marginLeft: 0}]}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text
                      style={[
                        styles.tabText_All,
                        {textDecorationLine: 'underline', color: '#D5A72C'},
                      ]}>
                      Marla
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
                    <Text style={styles.tabText_All}>Feet</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>
                  <TouchableOpacity>
                    <Text style={styles.tabText_All}>Kanal</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  color: '#DFA72C',
                }}>
                0 Marla - 50 Marla
              </Text>
            </View>
            <View style={{marginTop: hp(3)}}>
              <RangeSlider />
            </View>
            <HorizantalLine />
            <CustomizaCounter
              name="Beds"
              BedsCounterHandler={() => {
                BedsCounterHandler(bedsCounter);
              }}
            />
            <HorizantalLine />
            <CustomizaCounter name="Baths" />
            <HorizantalLine />
            <View style={{flexDirection: 'row', marginTop: hp(2)}}>
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CheckBox
                  style={{padding: 10, paddingLeft: 0}}
                  isChecked={checkboxStatus}
                  checkBoxColor={'#DFA72C'}
                  uncheckedCheckBoxColor="#DCE1E5"
                  onClick={() => {
                    setCheckBoxStatus(!checkboxStatus);
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    color: '#1E2022',
                  }}>
                  With Videos
                </Text>
              </View>
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderLeftWidth: 1,
                  borderLeftColor: '#EDEDED',
                }}>
                <CheckBox
                  style={{padding: 10, paddingLeft: 0}}
                  isChecked={checkboxforPhoto}
                  checkBoxColor={'#DFA72C'}
                  uncheckedCheckBoxColor="#DCE1E5"
                  onClick={() => {
                    setCheckboxforPhoto(!checkboxforPhoto);
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    color: '#1E2022',
                  }}>
                  With Photos
                </Text>
              </View>
            </View>
            <HorizantalLine />
            <Dropdown tags={Agencies} title="Search Agencies" />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#EDEDED',
                marginTop: hp(2),
              }}
            />
            <ButtonBottom
              name="Show Properties"
              onPress={() => console.log('Hamza')}
            />
            <HorizantalLine />
          </View>
        )}
        {isInvest === 'All' && (
          <View>
            <View style={{marginTop: hp(3)}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                }}>
                Property Type
              </Text>
            </View>
            <View style={[styles.tabFlex]}>
              <View style={[styles.tabContainer, {marginLeft: 0}]}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text
                    style={[
                      styles.tabText_All,
                      {textDecorationLine: 'underline', color: '#D5A72C'},
                    ]}>
                    Homes
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
                  <Text style={styles.tabText_All}>Plots</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabContainer}>
                <TouchableOpacity>
                  <Text style={styles.tabText_All}>Commercials</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                marginTop: hp(2),
              }}>
              {PropertyType.map((obj, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      paddingVertical: hp(1.5),
                      paddingHorizontal: wp(6),
                      marginRight: wp(3),
                      borderRadius: 14,
                      borderWidth: 1,
                      borderColor: '#DCE1E5',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: obj.selected ? '#DFA72C' : '#fff',
                    }}>
                    <Text
                      style={{
                        color: obj.selected ? '#fff' : '#77838F',
                        fontSize: 14,
                        fontFamily: 'Montserrat',
                      }}>
                      {obj.value}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <HorizantalLine />
            <View
              style={{
                marginTop: hp(2),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                }}>
                Price Monthly
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  color: '#DFA72C',
                }}>
                PKR 2,500 - PKR 10,000
              </Text>
            </View>
            <View style={{marginTop: hp(3)}}>
              <RangeSlider />
            </View>
            <HorizantalLine />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <View style={[styles.tabFlex, {width: '45%', marginTop: 0}]}>
                <View style={[styles.tabContainer, {marginLeft: 0}]}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text
                      style={[
                        styles.tabText_All,
                        {textDecorationLine: 'underline', color: '#D5A72C'},
                      ]}>
                      Marla
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
                    <Text style={styles.tabText_All}>Feet</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>
                  <TouchableOpacity>
                    <Text style={styles.tabText_All}>Kanal</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  color: '#DFA72C',
                }}>
                0 Marla - 50 Marla
              </Text>
            </View>
            <View style={{marginTop: hp(3)}}>
              <RangeSlider />
            </View>
            <HorizantalLine />
            <CustomizaCounter name="Beds" />
            <HorizantalLine />
            <CustomizaCounter name="Baths" />
            <HorizantalLine />
            <View style={{flexDirection: 'row', marginTop: hp(2)}}>
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CheckBox
                  style={{padding: 10, paddingLeft: 0}}
                  isChecked={checkboxStatus}
                  checkBoxColor={'#DFA72C'}
                  uncheckedCheckBoxColor="#DCE1E5"
                  onClick={() => {
                    setCheckBoxStatus(!checkboxStatus);
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    color: '#1E2022',
                  }}>
                  With Videos
                </Text>
              </View>
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderLeftWidth: 1,
                  borderLeftColor: '#EDEDED',
                }}>
                <CheckBox
                  style={{padding: 10, paddingLeft: 0}}
                  isChecked={checkboxforPhoto}
                  checkBoxColor={'#DFA72C'}
                  uncheckedCheckBoxColor="#DCE1E5"
                  onClick={() => {
                    setCheckboxforPhoto(!checkboxforPhoto);
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    color: '#1E2022',
                  }}>
                  With Photos
                </Text>
              </View>
            </View>
            <HorizantalLine />
            <Dropdown tags={Agencies} title="Search Agencies" />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#EDEDED',
                marginTop: hp(2),
              }}
            />
            <ButtonBottom
              name="Show Properties"
              onPress={() => console.log('Hello')}
            />
            <HorizantalLine />
          </View>
        )}
        {isInvest === 'Rent' && (
          <View>
            <View style={{marginTop: hp(3)}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                }}>
                Property Type
              </Text>
            </View>
            <View style={[styles.tabFlex]}>
              <View style={[styles.tabContainer, {marginLeft: 0}]}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text
                    style={[
                      styles.tabText_All,
                      {textDecorationLine: 'underline', color: '#D5A72C'},
                    ]}>
                    Homes
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
                  <Text style={styles.tabText_All}>Plots</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tabContainer}>
                <TouchableOpacity>
                  <Text style={styles.tabText_All}>Commercials</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 1,
                marginTop: hp(2),
              }}>
              {PropertyType.map((obj, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      paddingVertical: hp(1.5),
                      paddingHorizontal: wp(6),
                      marginRight: wp(3),
                      borderRadius: 14,
                      borderWidth: 1,
                      borderColor: '#DCE1E5',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: obj.selected ? '#DFA72C' : '#fff',
                    }}>
                    <Text
                      style={{
                        color: obj.selected ? '#fff' : '#77838F',
                        fontSize: 14,
                        fontFamily: 'Montserrat',
                      }}>
                      {obj.value}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <HorizantalLine />
            <View
              style={{
                marginTop: hp(2),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                }}>
                Price Monthly
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  color: '#DFA72C',
                }}>
                PKR 2,500 - PKR 10,000
              </Text>
            </View>
            <View style={{marginTop: hp(3)}}>
              <RangeSlider />
            </View>
            <HorizantalLine />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <View style={[styles.tabFlex, {width: '45%', marginTop: 0}]}>
                <View style={[styles.tabContainer, {marginLeft: 0}]}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text
                      style={[
                        styles.tabText_All,
                        {textDecorationLine: 'underline', color: '#D5A72C'},
                      ]}>
                      Marla
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
                    <Text style={styles.tabText_All}>Feet</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.tabContainer}>
                  <TouchableOpacity>
                    <Text style={styles.tabText_All}>Kanal</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  color: '#DFA72C',
                }}>
                0 Marla - 50 Marla
              </Text>
            </View>
            <View style={{marginTop: hp(3)}}>
              <RangeSlider />
            </View>
            <HorizantalLine />
            <CustomizaCounter
              name="Beds"
              BedsCounterHandler={BedsCounterHandler}
            />
            <HorizantalLine />
            <CustomizaCounter
              name="Baths"
              BathsCounterHandler={BathsCounterHandler}
            />
            <HorizantalLine />
            <View style={{flexDirection: 'row', marginTop: hp(2)}}>
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CheckBox
                  style={{padding: 10, paddingLeft: 0}}
                  isChecked={checkboxStatus}
                  checkBoxColor={'#DFA72C'}
                  uncheckedCheckBoxColor="#DCE1E5"
                  onClick={() => {
                    setCheckBoxStatus(!checkboxStatus);
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    color: '#1E2022',
                  }}>
                  With Videos
                </Text>
              </View>
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderLeftWidth: 1,
                  borderLeftColor: '#EDEDED',
                }}>
                <CheckBox
                  style={{padding: 10, paddingLeft: 0}}
                  isChecked={checkboxforPhoto}
                  checkBoxColor={'#DFA72C'}
                  uncheckedCheckBoxColor="#DCE1E5"
                  onClick={() => {
                    setCheckboxforPhoto(!checkboxforPhoto);
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    color: '#1E2022',
                  }}>
                  With Photos
                </Text>
              </View>
            </View>
            <HorizantalLine />
            <Dropdown tags={Agencies} title="Search Agencies" />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#EDEDED',
                marginTop: hp(2),
              }}
            />
            <ButtonBottom
              name="Show Properties"
              onPress={() => console.log('Hello')}
            />
            <HorizantalLine />
          </View>
        )}
        {isInvest === 'Invest' && <FiltersAccordain />}
      </View>
    </ScrollView>
  );
};
export default PropertyTypePriceMonthly;
