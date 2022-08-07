import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
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
import PreviewHeader from '../../Component/Button/PreviewHeader/PreviewHeader';
import {Icon} from 'react-native-elements';
import {map} from '../../../assets/images/map';
import {fillHeart} from '../../../assets/images/fill_heart';
import {unfillHeart} from '../../../assets/images/unfill_heart';
import {bath} from '../../../assets/images/Bath';
import {bedroom} from '../../../assets/images/Bed_room';
import {REACT_APP_API_URL} from '../../Services/APIs/auth';
const Preview = ({route, navigation}) => {
  // const navigation = useNavigation();
  const {OBJ} = route?.params;
  const Decider = OBJ?.AllURLS?.Decider?.Decider;
  const Address = OBJ?.city;
  const ImageURI = OBJ?.AllURLS?.URIForFeaturedImagesss;
  console.log(OBJ, 'Route Params in Preview');
  console.log(Decider, 'Decider');
  console.log(OBJ?.city, 'OBJ?.city');
  const [checkboxStatusForPlots, setCheckBoxStatusForPlots] = useState(false);
  const [checkboxforHomes, setCheckboxforHomes] = useState(false);
  const [checkboxforCommerical, setCheckboxforCommerical] = useState(false);
  const [heartVisible, setheartVisible] = useState(true);

  const [value, setValue] = React.useState('');
  const [valueForDropDown, setValueForDropDown] = useState('');
  const [SizeValue, SetSizeValue] = useState('');
  const [PriceValue, setPriceValue] = useState('');
  const [Error, setError] = useState('');
  const [propertyType, setpropertyType] = useState('');

  const ProptryTypesForHomes = [
    'House',
    'Flat',
    'Upper Portion',
    'Lower Portion',
    'Farm House',
    'Room',
    'Penthouse',
  ];
  const ProptryTypesForPlots = [
    'Residential Plot',
    'Commercial Plot',
    'Agricultural Land',
    'Industrial Land',
    'Plot File',
    'Plot Form',
    'Penthouse',
  ];
  const ProptryTypesForCommericals = [
    'Office',
    'Shop',
    'Warehouse',
    'Factory',
    'Building',
    'Plot Form',
    'Other',
  ];

  const ButtonHandler = () => {
    if (
      PriceValue.length > 0 &&
      SizeValue.length > 0 &&
      valueForDropDown.length > 0
    ) {
      setError('');
      navigation.navigate('UploadFoam', {
        Obj: {
          URLSandMapsData: OBJ,
          valueForDropDown: valueForDropDown,
          SizeValue: SizeValue,
          PriceValue: PriceValue,
          propertyType: propertyType,
          Decider: Decider,
        },
      });
    } else {
      setError('Please fullfil all fields');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{}}>
        <PreviewHeader name="Preview" />
        <View style={[styles.propertyContainer]}>
          <View style={styles.propertyImg}>
            {/* UrI changes */}
            <View>
              <Image
                style={styles.property_icon}
                source={{uri: `${REACT_APP_API_URL}/${ImageURI}`}}
              />
            </View>
          </View>
          <View
            style={[
              styles.property_flex,
              {
                width: '90%',
                marginHorizontal: wp(2),
                flexDirection: 'row',
              },
            ]}>
            <SvgXml style={[styles.map_img]} width="18" height="18" xml={map} />
            <Text style={[styles.propertyLocationtext]}>{Address}</Text>
          </View>
          <View
            style={[
              styles.propertyDetail,
              {marginHorizontal: wp(2), width: '90%'},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: wp(18),
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
              <View style={{marginTop: hp(1)}}>
                <Icon
                  style={styles.locationIcon}
                  name="logo-whatsapp"
                  type="ionicon"
                  color="#2AF598"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: hp(3)}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Raleway',
              fontWeight: '600',
              color: '#DFA72C',
            }}>
            Property Type
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          {Decider === 'Sell' && (
            <View
              style={{
                width: '25%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <CheckBox
                style={{padding: 0, paddingLeft: 0}}
                isChecked={checkboxStatusForPlots}
                checkBoxColor={'#DFA72C'}
                uncheckedCheckBoxColor="#DCE1E5"
                onClick={() => {
                  console.log('Plots');
                  setCheckBoxStatusForPlots(!checkboxStatusForPlots);
                  setCheckboxforHomes(false);
                  setCheckboxforCommerical(false);
                  setpropertyType('Plots');
                }}
              />
              <Text
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                  color: '#1E2022',
                }}>
                Plots
              </Text>
            </View>
          )}
          <View
            style={{
              width: '20%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderLeftColor: '#EDEDED',
            }}>
            <CheckBox
              style={{paddingLeft: 0}}
              isChecked={checkboxforHomes}
              checkBoxColor={'#DFA72C'}
              uncheckedCheckBoxColor="#DCE1E5"
              onClick={() => {
                setCheckboxforHomes(!checkboxforHomes);
                setCheckBoxStatusForPlots(false);
                setCheckboxforCommerical(false);
                setpropertyType('Homes');
              }}
            />
            <Text
              style={{
                fontFamily: 'Raleway',
                fontWeight: '600',
                color: '#1E2022',
              }}>
              Homes
            </Text>
          </View>
          <View
            style={{
              width: '38%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: wp(7),
              borderLeftColor: '#EDEDED',
            }}>
            <CheckBox
              style={{padding: 0, paddingLeft: 0}}
              isChecked={checkboxforCommerical}
              checkBoxColor={'#DFA72C'}
              uncheckedCheckBoxColor="#DCE1E5"
              onClick={() => {
                setCheckboxforCommerical(!checkboxforCommerical);
                setCheckBoxStatusForPlots(false);
                setCheckboxforHomes(false);
                setpropertyType('Commercials');
              }}
            />
            <Text
              style={{
                fontFamily: 'Raleway',
                fontWeight: '600',
                color: '#1E2022',
              }}>
              Commercials
            </Text>
          </View>
        </View>
        {checkboxStatusForPlots && (
          <View style={{marginTop: hp(2)}}>
            <Dropdown
              tags={ProptryTypesForPlots}
              title="Select Property Type"
              DropDownValueGetter={setValueForDropDown}
            />
          </View>
        )}
        {checkboxforHomes && (
          <View style={{marginTop: hp(2)}}>
            <Dropdown
              tags={ProptryTypesForHomes}
              title="Select Property Type"
              DropDownValueGetter={setValueForDropDown}
            />
          </View>
        )}
        {checkboxforCommerical && (
          <View style={{marginTop: hp(2)}}>
            <Dropdown
              tags={ProptryTypesForCommericals}
              title="Select Property Type"
              DropDownValueGetter={setValueForDropDown}
            />
          </View>
        )}
        <View style={{marginTop: hp(3)}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Raleway',
              fontWeight: '600',
              color: '#DFA72C',
            }}>
            Property Details
          </Text>
        </View>
        <View
          style={{
            marginTop: hp(2),
            width: '100%',
            height: hp(7.5),
            paddingLeft: wp(2),
            flexDirection: 'row',
            backgroundColor: '#F6F0EA',
            borderRadius: 16,
          }}>
          <TextInput
            keyboardType="number-pad"
            placeholder="Enter Your Size"
            multiline
            value={SizeValue}
            style={{
              color: 'grey',
              fontSize: 16,
              flex: 1,
              width: '80%',
            }}
            onChangeText={e => {
              SetSizeValue(e);
            }}
          />
          <View
            style={{
              width: '20%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#DFA72C',
              }}>
              Marla
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: hp(2),
            width: '100%',
            height: hp(7.5),
            paddingLeft: wp(2),
            flexDirection: 'row',
            backgroundColor: '#F6F0EA',
            borderRadius: 16,
          }}>
          <TextInput
            keyboardType="number-pad"
            placeholder="Price"
            multiline
            value={PriceValue}
            style={{
              color: 'grey',
              fontSize: 16,
              flex: 1,
              width: '80%',
            }}
            onChangeText={e => {
              setPriceValue(e);
            }}
          />
          <View
            style={{
              width: '20%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#DFA72C',
              }}>
              PKR
            </Text>
          </View>
        </View>

        {Error.length > 0 && (
          <View style={{marginTop: hp(1)}}>
            <Text style={{color: 'red'}}>{Error}</Text>
          </View>
        )}

        <TouchableOpacity
          style={{marginTop: hp(5)}}
          onPress={() => {
            navigation.navigate('');
          }}>
          <ButtonBottom name="Next" onPress={ButtonHandler} />
        </TouchableOpacity>
        <HorizantalLine />
      </View>
    </ScrollView>
  );
};
export default Preview;
