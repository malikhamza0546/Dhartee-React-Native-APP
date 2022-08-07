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
import {Bullpoint} from '../../../assets/images/Bullpoint';
import {Date} from '../../../assets/images/Date';
import {house} from '../../../assets/images/house';
import {marla} from '../../../assets/images/marla';
import {bath} from '../../../assets/images/Bath';
import {date} from 'yup';
import {useSelector} from 'react-redux';
const PropertyDeatilsForCards = props => {
  // const PhoneNumber = useSelector(()=>{

  // })
  const {obj} = props?.route?.params;
  console.log(obj?.downPayment, 'obj.amount');
  const Features = obj?.propertyFeatures;
  const utilities = obj?.utilities;

  console.log(Features, 'Features');

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
            <SvgXml
              width="50"
              height="50"
              xml={forSale}
              style={{marginTop: hp(-1)}}
            />
          </View>
          {'downPayment' in obj && (
            <Text
              style={{
                width: '75%',
                color: '#06192C',
                fontWeight: '700',
                fontFamily: 'Raleway',
                fontSize: 16,
                marginTop: hp(1),
              }}>
              {`${obj?.size?.area} ${obj?.size?.unit} For Sale In ${obj.place}`}
            </Text>
          )}
          {'monthly_rent' in obj && (
            <Text
              style={{
                width: '75%',
                color: '#06192C',
                fontWeight: '700',
                fontFamily: 'Raleway',
                fontSize: 16,
                marginTop: hp(1),
              }}>
              {`${obj?.size?.area} ${obj?.size?.unit} For Rent In ${obj.place}`}
            </Text>
          )}
          <View
            style={[
              styles.property_flex,
              {
                width: '90%',
                flexDirection: 'row',
              },
            ]}>
            <SvgXml style={[styles.map_img]} width="18" height="18" xml={map} />
            <Text style={[styles.propertyLocationtext]}>{obj.place}</Text>
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
            {`This property is located in ${obj.place} with an Amazing View`}
          </Text>

          {/* Down Payment */}

          {'monthly_rent' in obj && (
            <Text
              style={{
                width: '75%',
                color: '#06192C',
                fontWeight: '700',
                fontFamily: 'Raleway',
                fontSize: 16,
                marginTop: hp(1),
              }}>
              Monthly rent
            </Text>
          )}
          {'monthly_rent' in obj && (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SvgXml width="10" height="10" xml={Bullpoint} />
              <Text
                style={{
                  width: '90%',
                  fontFamily: 'Raleway',
                  fontWeight: '500',
                  fontSize: 14,
                  marginLeft: hp(1),
                }}>
                {`${obj?.monthly_rent} PKR`}
              </Text>
            </View>
          )}
          {'downPayment' in obj && (
            <Text
              style={{
                width: '75%',
                color: '#06192C',
                fontWeight: '700',
                fontFamily: 'Raleway',
                fontSize: 16,
                marginTop: hp(1),
              }}>
              Down Payment
            </Text>
          )}
          {'downPayment' in obj && (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SvgXml width="10" height="10" xml={Bullpoint} />
              <Text
                style={{
                  width: '90%',
                  fontFamily: 'Raleway',
                  fontWeight: '500',
                  fontSize: 14,
                  marginLeft: hp(1),
                }}>
                {`${obj?.downPayment} PKR`}
              </Text>
            </View>
          )}

          <Text
            style={{
              width: '75%',
              color: '#06192C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(1),
            }}>
            Properties
          </Text>

          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',

              paddingHorizontal: hp(1),
              width: '70%',
              flexWrap: 'wrap',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SvgXml width="10" height="10" xml={bath} />
              <Text
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '500',
                  fontSize: 14,
                  marginLeft: hp(1),
                }}>
                {`${obj.baths} Baths`}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SvgXml width="10" height="10" xml={bed} />
              <Text
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '500',
                  fontSize: 14,
                  marginLeft: hp(1),
                }}>
                {`${obj.beds} beds`}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SvgXml width="10" height="10" xml={marla} />
              <Text
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '500',
                  fontSize: 14,
                  marginLeft: hp(1),
                }}>
                {`${obj?.size?.area} ${obj?.size?.unit}`}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SvgXml width="10" height="10" xml={Date} />
              <Text
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '500',
                  fontSize: 14,
                  marginLeft: hp(1),
                }}>
                January 23, 2021 - 1:49 AM
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <SvgXml width="10" height="10" xml={house} />
              <Text
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '500',
                  fontSize: 14,
                  marginLeft: hp(1),
                }}>
                {obj?.propertyType}
              </Text>
            </View>
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
            Features
          </Text>
          {/* Features */}
          {Features.map(value => {
            return (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <SvgXml width="10" height="10" xml={Bullpoint} />
                <Text
                  style={{
                    width: '90%',
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    fontSize: 14,
                    marginLeft: hp(1),
                  }}>
                  {value}
                </Text>
              </View>
            );
          })}

          <Text
            style={{
              width: '75%',
              color: '#06192C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(1),
            }}>
            Utilities
          </Text>

          {utilities.map(value => {
            return (
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <SvgXml width="10" height="10" xml={Bullpoint} />
                <Text
                  style={{
                    width: '90%',
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    fontSize: 14,
                    marginLeft: hp(1),
                  }}>
                  {value}
                </Text>
              </View>
            );
          })}

          <Text
            style={{
              width: '75%',
              color: '#06192C',
              fontWeight: '700',
              fontFamily: 'Raleway',
              fontSize: 16,
              marginTop: hp(1),
            }}>
            Facing
          </Text>

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <SvgXml width="10" height="10" xml={Bullpoint} />
            <Text
              style={{
                width: '90%',
                fontFamily: 'Raleway',
                fontWeight: '500',
                fontSize: 14,
                marginLeft: hp(1),
              }}>
              {obj?.facing}
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
            Description
          </Text>

          <Text
            style={{
              width: '90%',
              fontFamily: 'Raleway',
              fontWeight: '500',
              fontSize: 14,
              marginTop: hp(1.5),
            }}>
            {obj?.description}
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

          {true && (
            <View style={{paddingHorizontal: wp(2)}}>
              <View
                style={{
                  paddingLeft: wp(6),
                  borderWidth: 1,
                  borderColor: '#DFA72C',
                  borderRadius: 4,
                  paddingVertical: hp(2),
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
                      {`92${obj?.phone_no1?.phone1}`}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Montserrat',
                        fontWeight: '500',
                        fontSize: 15,
                        paddingLeft: wp(2),
                      }}>
                      {`92${obj?.whatsapp_no?.phone}`}
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
                      {`92${obj?.whatsapp_no?.phone}`}
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
              marginTop: hp(1),
            }}>
            Virtual Tours
          </Text>

          <View style={{marginTop: hp(2)}}></View>
        </View>
      </View>
    </ScrollView>
  );
};
export default PropertyDeatilsForCards;
