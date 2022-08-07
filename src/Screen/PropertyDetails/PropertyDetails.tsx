import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Slider from '../../Component/Button/Slider/Slider';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {fillHeart} from '../../../assets/images/fill_heart';
import {unfillHeart} from '../../../assets/images/unfill_heart';
import {backarrowforPropertyDetail} from '../../../assets/images/backarrow';
import {forSale} from '../../../assets/images/forSale';
import {share} from '../../../assets/images/share';
import {Phoneicon} from '../../../assets/images/Phoneicon';
import {lettericon} from '../../../assets/images/lettericon';
import {traingle} from '../../../assets/images/traingle';
import {telephonewithoutbg} from '../../../assets/images/telephonewithoutbg';
import {propertydetailicons} from '../../../assets/images/propertydetailicons';
import {Icon, Avatar} from 'react-native-elements';
import styles from './styles';
import {map} from '../../../assets/images/map';
import HorizantalLine from '../../Component/Button/HorizantalLine/HorizantalLine';
import {appart} from '../../../assets/images/Appartment';
import {bed} from '../../../assets/images/bed';
import * as Progress from 'react-native-progress';
import RangeSlider from '../../Component/Button/RangeSlider/RangeSlider';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
import {flag} from '../../../assets/images/flag';
import {priceindex} from '../../../assets/images/priceindex';
import {TextInput} from 'react-native-gesture-handler';
import {chat} from '../../../assets/images/chat';
import {rewind} from '../../../assets/images/rew';
const PropertyDetails = () => {
  const navigation = useNavigation();
  const [heartVisible, setheartVisible] = useState(true);
  const [heartVisibleforCard, setheartVisibleforCard] = useState(true);
  const MonthType = [
    {value: 'January', selected: false},
    {value: 'February', selected: false},
    {value: 'March', selected: true},
    {value: 'April', selected: false},
    {value: 'May', selected: false},
    {value: 'June', selected: false},
    {value: 'July', selected: false},
    {value: 'August', selected: false},
    {value: 'September', selected: false},
    {value: 'October', selected: false},
    {value: 'November', selected: false},
    {value: 'December', selected: false},
  ];
  const [itemsforLocal, setItemsforLocal] = useState([
    {
      Image: require('../../../assets/images/school.png'),
      mainHeading: 'Map View',
      description: 'Explore the area around Ghouri Town',
    },
    {
      Image: require('../../../assets/images/school.png'),
      mainHeading: 'Map View',
      description: 'Explore the area around Ghouri Town',
    },
    {
      Image: require('../../../assets/images/school.png'),
      mainHeading: 'Map View',
      description: 'Explore the area around Ghouri Town',
    },
  ]);
  const [itemsforSimilarProperties, setItemsforSimilarProperties] = useState([
    {
      Image: require('../../../assets/images/islamabad.png'),
      mainHeading: '7 Marla Plaza For Sale in Ghouri Garden',
      description: 'Ghauri Town, Rawalpindi',
    },
    {
      Image: require('../../../assets/images/islamabad.png'),
      mainHeading: '7 Marla Plaza For Sale in Ghouri Garden',
      description: 'Ghauri Town, Rawalpindi',
    },
    {
      Image: require('../../../assets/images/islamabad.png'),
      mainHeading: '7 Marla Plaza For Sale in Ghouri Garden',
      description: 'Ghauri Town, Rawalpindi',
    },
  ]);
  const [tableValues, setTableValues] = useState([
    {
      Rank: '1',
      Locality: 'Ghori Town',
      progress: 0.6,
      Performance: 'No Change',
    },
    {
      Rank: '2',
      Locality: 'Marglla Town',
      progress: 0.8,
      Performance: 'No Change',
    },
    {
      Rank: '3',
      Locality: 'Ghori Town',
      progress: 0.4,
      Performance: 'Changed',
    },
  ]);

  const renderList = ({item}) => {
    return (
      <View
        style={{
          marginTop: hp(2),
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 17,
          marginRight: wp(2),
          elevation: 4,
          marginBottom: hp(1),
          paddingTop: hp(0.55),
          width: wp(60),
          paddingHorizontal: wp(0.8),
        }}>
        <Image
          style={{
            // flex: 1,
            width: '100%',
            // height: '0%',
            alignSelf: 'center',
            resizeMode: 'stretch',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
          source={item.Image}></Image>
        <View style={{paddingLeft: wp(2)}}>
          <Text
            style={{
              color: '#DFA72C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(0.5),
            }}>
            {item.mainHeading}
          </Text>
          <Text
            style={{
              color: '#06192C',
              fontWeight: '500',
              fontFamily: 'Raleway',
              fontSize: 16,
            }}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const renderListforSimilarProperty = ({item}) => {
    return (
      <View
        style={{
          marginTop: hp(2),
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 17,
          marginRight: wp(3),

          marginBottom: hp(1),
          // paddingTop: hp(0.7),
          width: wp(85),
          // paddingHorizontal: 4,
          elevation: 2,
          backgroundColor: '#F0F4FA',
        }}>
        <Image
          style={{
            // flex: 1,
            width: '100%',
            // height: '0%',
            borderWidth: 1,
            alignSelf: 'center',
            resizeMode: 'stretch',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={item.Image}></Image>
        <View style={{paddingLeft: wp(2)}}>
          <Text
            style={{
              color: '#DFA72C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 14,
              marginTop: hp(0.5),
            }}>
            {item.mainHeading}
          </Text>

          <View
            style={[
              styles.property_flex,
              {
                width: '90%',
                flexDirection: 'row',
              },
            ]}>
            <SvgXml style={[styles.map_img]} width="18" height="18" xml={map} />
            <Text style={[styles.propertyLocationtext]}>
              {item.description}
            </Text>
          </View>
          <HorizantalLine />
        </View>
        <View style={[styles.propertyDetail]}>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => setheartVisibleforCard(!heartVisibleforCard)}>
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
            <SvgXml style={styles.heart_img} width="29" height="20" xml={bed} />
            <Text style={styles.aparttext}>120 Shops</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          height: hp(9),
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          zIndex: 2,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <SvgXml
            width="50"
            height="50"
            style={{}}
            xml={backarrowforPropertyDetail}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '50%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Montserrat',
              fontWeight: '600',
              fontSize: 20,
            }}>
            Property Detail
          </Text>
        </View>
        <View
          style={{
            width: '25%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => setheartVisible(!heartVisible)}>
            <SvgXml
              width="29"
              height="20"
              xml={heartVisible ? fillHeart : unfillHeart}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{bottom: hp(9), width: '100%'}}>
        <Slider />
        <Image
          style={{
            // resizeMode: 'contain',
            marginTop: hp(-2),
            borderColor: 'red',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            width: '100%',
          }}
          source={require('../../../assets/images/MapforProperty.png')}
        />
        <View
          style={{
            marginTop: hp(-2),
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            backgroundColor: '#fff',

            paddingHorizontal: wp(3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}>
            <Text
              style={{
                color: '#DFA72C',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: 18,
                alignSelf: 'flex-end',
              }}>
              PKR 17 crore
            </Text>
            <SvgXml
              width="50"
              height="50"
              xml={forSale}
              style={{marginTop: hp(-1)}}
            />
          </View>
          <Text
            style={{
              width: '75%',
              color: '#06192C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(1),
            }}>
            16 Marla Plaza For Sale In Gauri Garden
          </Text>
          <View
            style={[
              styles.property_flex,
              {
                width: '90%',
                flexDirection: 'row',
              },
            ]}>
            <SvgXml style={[styles.map_img]} width="18" height="18" xml={map} />
            <Text style={[styles.propertyLocationtext]}>
              Westridge 3, Rawalpindi
            </Text>
          </View>
          <Text
            style={{
              width: '75%',
              color: '#06192C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(1),
            }}>
            About this property
          </Text>
          <Text
            style={{width: '90%', fontFamily: 'Raleway', fontWeight: '500'}}>
            This property is located in Islamabad with an Amazing View
          </Text>
          <Text
            style={{
              width: '75%',
              color: '#06192C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(1),
            }}>
            Description
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            Its 16 marla plaza for sale in main hub commercial in gauri garden
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
              marginTop: hp(1.5),
            }}>
            singal owner
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            solid and personal use construction
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            2 water bore
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            huge car parking
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
              marginTop: hp(1.5),
            }}>
            Very ideal and diffrent plaza from others
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
              marginTop: hp(1.5),
            }}>
            Total shops are 20
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            10 in ground flor and 10 in basement
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            Total 20 Two bedroom appartment with attach bath and kitchen
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            lift installed
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
              marginTop: hp(1.5),
            }}>
            Front is 100 Ft
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            depth is 40 ft
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            2 side corner category
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            also main boulevard road category
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            all plaza is rented
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
              marginTop: hp(1.5),
            }}>
            beautiful location in twin city
          </Text>
          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
            }}>
            5 minute drive from Islamabad.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('');
            }}
            style={{marginTop: hp(1.5)}}>
            <Text style={{textDecorationLine: 'underline', color: '#DFA72C'}}>
              Read Less
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={{resizeMode: 'contain'}}
                source={require('../../../assets/images/Ellipse27.png')}
              />
            </View>
            <Text
              style={{
                fontFamily: 'Raleway',
                fontWeight: '500',
                fontSize: 14,
                fontStyle: 'italic',
              }}>
              Posted by Faiz Javed
            </Text>
          </View>
          <HorizantalLine />
          <View
            style={{
              marginTop: hp(3),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderColor: '#DFA72C',

              paddingHorizontal: wp(2),
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 16,
                width: wp(19),
                height: hp(6),
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#DFA72C',
              }}>
              <SvgXml
                width="20"
                height="25"
                xml={Phoneicon}
                style={{marginTop: hp(0)}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 16,
                width: wp(19),
                height: hp(6),
                borderColor: '#DFA72C',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="logo-whatsapp"
                type="ionicon"
                color="#2AF598"
                // containerStyle={{opacity: 3}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#DFA72C',
                borderRadius: 16,
                width: wp(19),
                height: hp(6),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml
                width="20"
                height="25"
                xml={lettericon}
                style={{marginTop: hp(0)}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 16,
                width: wp(19),
                height: hp(6),
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#DFA72C',
              }}>
              <SvgXml
                width="20"
                height="25"
                xml={share}
                style={{marginTop: hp(0)}}
              />
            </TouchableOpacity>
          </View>
          {/* conditional Rendering for telephone icon */}
          {false && (
            <View style={{paddingHorizontal: wp(2), borderWidth: 1}}>
              <SvgXml
                width="20"
                height="25"
                xml={traingle}
                style={{marginLeft: wp(8)}}
              />
              <View
                style={{
                  paddingLeft: wp(6),
                  borderWidth: 1,
                  borderColor: '#DFA72C',
                  borderRadius: 4,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <View style={{marginRight: wp(1)}}>
                    <Avatar
                      containerStyle={{}}
                      rounded
                      source={{
                        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Montserrat',
                      fontWeight: '500',
                      fontSize: 15,

                      paddingLeft: wp(2),
                    }}>
                    Faiz Javed
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: hp(2),
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',

                    width: '90%',
                    marginLeft: hp(1),
                  }}>
                  <View style={{}}>
                    <SvgXml width="20" height="25" xml={telephonewithoutbg} />
                  </View>
                  <View style={{paddingLeft: wp(2.2)}}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat',
                        fontWeight: '500',
                        fontSize: 15,

                        paddingLeft: wp(2),
                      }}>
                      +923365566672
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Montserrat',
                        fontWeight: '500',
                        fontSize: 15,
                        paddingLeft: wp(2),
                      }}>
                      +923365566672
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: hp(2),
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '90%',
                    marginLeft: hp(1),
                  }}>
                  <View style={{}}>
                    <Icon
                      name="logo-whatsapp"
                      type="ionicon"
                      color="#2AF598"
                      // containerStyle={{opacity: 3}}
                    />
                  </View>
                  <View style={{paddingLeft: wp(1.7)}}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat',
                        fontWeight: '500',
                        fontSize: 15,

                        paddingLeft: wp(2),
                      }}>
                      +923365566672
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontFamily: 'Montserrat',
                    width: '80%',
                    marginLeft: wp(2),
                    marginTop: hp(1),
                  }}>
                  Please quote property reference Gharbaar - ID-5490 when
                  calling us.
                </Text>
              </View>
            </View>
          )}
          {/* conditional Rendering for Message icon */}
          {true && (
            <View style={{paddingHorizontal: wp(2)}}>
              <SvgXml
                width="20"
                height="25"
                xml={traingle}
                style={{marginLeft: wp(53)}}
              />
              <View
                style={{
                  paddingHorizontal: wp(3),
                  paddingVertical: hp(3),
                  borderWidth: 1,
                  borderColor: '#DFA72C',
                  borderRadius: 4,
                }}>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Montserrat',
                      fontSize: 16,
                      color: '#555568',
                    }}>
                    Name*
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
                    Email*
                  </Text>
                  <TextInput
                    placeholder="Enter your email"
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
                    keyboardType="number-pad"
                    placeholder="Enter your phone number"
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
                <View
                  style={{
                    marginTop: hp(2),
                    borderWidth: 1,
                    borderColor: '#979BB5',
                    padding: 8,
                    borderRadius: 16,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <SvgXml height="20" width="20" xml={chat} />
                    <Text style={{width: '90%'}}>
                      I need some information regarding your property Gharbaar -
                      ID-5490. Kindly get back to me at the earliest possible
                      opportunity.
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: hp(2),
                    flexDirection: 'row',
                    width: '60%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: '#979BB5',
                      width: '45%',
                      height: hp(4),
                      color: 'black',
                    }}
                  />
                  <Text style={{color: '#555568', fontSize: 15}}>1214</Text>
                  <SvgXml width="20" height="20" xml={rewind} />
                </View>
                <View style={{marginTop: hp(2)}}>
                  <ButtonBottom
                    name="Request Info"
                    onPress={() => navigation.navigate('')}
                  />
                </View>
              </View>
            </View>
          )}
          <View
            style={{
              borderWidth: 1,
              marginTop: hp(3),
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: wp(2),
              borderColor: '#383A4A',
            }}>
            <Text>This property is getting a lot of attention.</Text>
            <Text>
              It’s been viewed <Text style={{color: '#DFA72C'}}>57 times </Text>
              in the past 1 month.
            </Text>
            <View style={{marginRight: wp(5)}}>
              <SvgXml
                width="75"
                height="75"
                xml={propertydetailicons}
                style={{marginLeft: wp(8)}}
              />
            </View>
          </View>
          <Text
            style={{
              width: '75%',
              color: '#06192C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(3),
            }}>
            Local Information
          </Text>
          <View style={{}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={itemsforLocal}
              renderItem={renderList}
            />
          </View>
          <Text
            style={{
              width: '75%',
              color: '#06192C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(3),
            }}>
            Price Index
          </Text>
          <Text style={{fontSize: 13}}>
            Rawalpindi Ghauri Town, 16 Marla Commercial Price Index
          </Text>
          <View
            style={{
              width: '80%',
              //   borderWidth: 1,
              marginTop: hp(2),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '35%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                // borderWidth: 1,
              }}>
              <SvgXml width="15" height="15" xml={priceindex} />
              <Text style={{color: '#DFA72C'}}>Price(PKR)</Text>
            </View>
            <View
              style={{
                width: '35%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                // borderWidth: 1,
              }}>
              {/* <SvgXml width="15" height="15" xml={priceindex} /> */}
              <Text style={{color: '#77838F'}}>Price/Sq.Ft.</Text>
            </View>
            <View
              style={{
                width: '35%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                // borderWidth: 1,
              }}>
              {/* <SvgXml width="15" height="15" xml={priceindex} /> */}
              <Text style={{color: '#77838F'}}>Index</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: hp(2),
              borderRadius: 8,
              paddingHorizontal: wp(2),
              paddingVertical: hp(6),
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              elevation: 2,
            }}>
            <Text
              style={{
                fontFamily: 'Raleway',
                fontSize: 16,
              }}>
              Price Change (June 2020 - February 2021)
            </Text>
            <Text
              style={{
                fontFamily: 'Raleway',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#DFA72C',
              }}>
              PKR -84000000 (-93.33%)
            </Text>
          </View>
          <View
            style={{
              marginTop: hp(2),

              paddingHorizontal: wp(2),
              paddingVertical: hp(6),
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              elevation: 2,
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontFamily: 'Raleway',
                fontSize: 16,
              }}>
              Current Price (February 2021)
            </Text>
            <Text
              style={{
                fontFamily: 'Raleway',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#DFA72C',
              }}>
              PKR 6000000
            </Text>
          </View>
          <View
            style={{
              height: hp(30),
              width: '100%',
              marginTop: hp(2),
              borderRadius: 8,
              backgroundColor: '#fff',
              elevation: 2,
            }}>
            <Image
              style={{height: hp(28), width: '99%'}}
              source={require('../../../assets/images/graph.png')}
            />
          </View>
          <Text
            style={{
              width: '75%',
              color: '#06192C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(3),
            }}>
            Similar Properties You May Like
          </Text>
          <View style={{}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={itemsforSimilarProperties}
              renderItem={renderListforSimilarProperty}
            />
          </View>
          <Text
            style={{
              width: '75%',
              color: '#06192C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(3),
            }}>
            Trends - Most searched locations in Ghouri Town
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              marginTop: hp(2),
            }}>
            {MonthType.map((obj, index) => {
              return (
                <TouchableOpacity
                  style={{
                    paddingVertical: hp(1.5),
                    paddingHorizontal: wp(6),
                    marginRight: wp(3),
                    borderRadius: 16,
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
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: hp(2),
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Raleway',
                  width: wp(10),
                }}>
                Rank
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Raleway',
                  width: wp(30),
                }}>
                Locality
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Raleway',
                  width: wp(45),
                }}>
                Percentage
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'Raleway',
                  width: wp(30),
                  paddingLeft: wp(3),
                }}>
                Peformance
              </Text>
            </View>
            <View
              style={{
                marginTop: hp(2),
                flexDirection: 'column',
              }}>
              {tableValues.map((obj, index) => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Raleway',
                        width: wp(10),
                      }}>
                      {obj.Rank}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Raleway',
                        width: wp(30),
                      }}>
                      {obj.Locality}
                    </Text>
                    <View
                      style={{
                        width: wp(45),
                      }}>
                      <Progress.Bar
                        progress={obj.progress}
                        width={null}
                        style={{marginTop: 6}}
                        color="#DFA72C"
                        showsText={true}
                        formatText={() => {
                          return 'Hamza';
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Raleway',
                        width: wp(30),
                        paddingLeft: wp(3),
                      }}>
                      {obj.Performance}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp(2),
            }}>
            <Text
              style={{
                width: '35%',
                color: '#06192C',
                fontWeight: '700',
                fontFamily: 'Raleway',
                fontSize: 16,
              }}>
              Home Finance
            </Text>
            <View style={{width: '30%'}}>
              <Image
                source={require('../../../assets/images/JsBank.png')}></Image>
            </View>
          </View>
          <Text style={{fontSize: 13, width: '100%', fontFamily: 'Raleway'}}>
            Calculate and view the monthly mortgage on this house
          </Text>
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
              Property Price
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat',
                fontWeight: '500',
                color: '#DFA72C',
              }}>
              PKR 155475728
            </Text>
          </View>
          <View style={{marginTop: hp(2)}}>
            <RangeSlider />
          </View>
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
              Loan Period
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat',
                fontWeight: '500',
                color: '#DFA72C',
              }}>
              10 Years
            </Text>
          </View>
          <View style={{marginTop: hp(2)}}>
            <RangeSlider />
          </View>
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
              Down Payment
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat',
                fontWeight: '500',
                color: '#DFA72C',
              }}>
              PKR 155475728
            </Text>
          </View>
          <View style={{marginTop: hp(2)}}>
            <RangeSlider />
          </View>
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
              Interest Rate
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat',
                fontWeight: '500',
                color: '#DFA72C',
              }}>
              Kibor + 4.25 %
            </Text>
          </View>
          <View style={{marginTop: hp(2)}}>
            <RangeSlider />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp(3),
            }}>
            <View
              style={{
                width: '48%',
                paddingVertical: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                elevation: 2,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Monthly Payment
              </Text>
              <Text
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '700',
                  fontSize: 16,
                  color: '#DFA72C',
                }}>
                PKR 11.1 lac
              </Text>
            </View>
            <View
              style={{
                width: '48%',
                paddingVertical: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                elevation: 2,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                Bank Loan Amount
              </Text>
              <Text
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '700',
                  fontSize: 16,
                  color: '#DFA72C',
                }}>
                PKR 9.1 crore
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: hp(2),
              borderRadius: 8,
              paddingHorizontal: wp(2),
              paddingVertical: hp(4),
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              elevation: 2,
            }}>
            <Text
              style={{
                fontFamily: 'Raleway',
                fontSize: 16,
                marginBottom: hp(2),
              }}>
              Payment Braekdown
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}>
              <Text>Interest</Text>
              <Text>Principal</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}>
              <Progress.Bar
                progress={0.5}
                width={317}
                color="#DFA72C"
                showsText={true}
                formatText={() => {
                  return 'Hamza';
                }}
              />
            </View>
          </View>
          <View style={{width: '100%', marginTop: hp(2)}}>
            <ButtonBottom
              name="Apply for Loan"
              onPress={() => navigation.navigate('MapDirection')}
            />
          </View>
          <View style={{marginTop: hp(4)}}>
            <HorizantalLine />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp(2),
              }}>
              <SvgXml width="29" height="25" xml={flag} />
              <Text>Report this listing</Text>
            </View>
            <HorizantalLine />
          </View>
          <View style={{marginTop: hp(2)}}></View>
        </View>
      </View>
    </ScrollView>
  );
};
export default PropertyDetails;
