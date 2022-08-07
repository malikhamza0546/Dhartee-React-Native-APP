import React, {useEffect, useState} from 'react';
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
import {whatsappicon} from '../../../assets/images/Vector';
import {Phoneicon} from '../../../assets/images/Phoneicon';
import {createListingforSale} from '../../Services/APIs/auth';
import {createListingforRent} from '../../Services/APIs/auth';
import {REACT_APP_API_URL} from '../../Services/APIs/auth';
import {RadioButton} from 'react-native-paper';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';
import {ListingData} from '../../Redux/Actions/ActionsCreators';

const UploadFoam = ({route, navigation, ListingData}) => {
  let Auth: any = useSelector(
    (state: any) => state?.AuthReducer?.Number?.phone,
  );
  console.log(Auth, 'Auth in in use Selctor');

  const {Obj} = route.params;
  const ImgURIForFeaturedImage =
    Obj?.URLSandMapsData?.AllURLS?.URIForFeaturedImagesss;
  const VideoURIForFeaturedVideo =
    Obj?.URLSandMapsData?.AllURLS?.URIForVideoListingss;
  const ImgURIForOtherImage =
    Obj?.URLSandMapsData?.AllURLS?.UploadOtherImagesArray;
  const City = Obj?.URLSandMapsData?.city;
  const Longitude = Obj?.URLSandMapsData?.mapsCoord[0];
  const Latitude = Obj?.URLSandMapsData?.mapsCoord[1];
  const SizeValue = Obj?.SizeValue;
  const PriceValue = Obj?.PriceValue;
  const subPropertyType = Obj?.valueForDropDown;
  const propertyType = Obj?.propertyType;
  const Decider = Obj.Decider;
  const Adress = Obj?.URLSandMapsData;
  const [DropDowntitle, setDropDowntitle] = useState('Select Your Built');

  const [checkboxStatus, setCheckBoxStatus] = useState(false);
  const [checkboxforPhoto, setCheckboxforPhoto] = useState(false);
  const [checkboxforCommerical, setCheckboxforCommerical] = useState(false);
  const [heartVisible, setheartVisible] = useState(true);
  const [CondionalDescription, setCondionalDescription] = useState(false);
  const [ButtonLoader, setButtonLoader] = useState(false);

  const [value, setValue] = React.useState('');
  const [valueforWhatsapp, setValueforWhatsapp] = React.useState('');
  const [valueForYearBuilt, setValueForYearBuilt] = useState('');
  const [DownPayment, setDownPayment] = useState('');
  const [Description, setDescription] = useState('');
  const [whatsappnumber, setwhatsapp] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState(`92${Auth}`);
  const [SuccessfulMsg, setSuccessfulMsg] = useState('');
  const [ErroMsgForDownPayment, setErroMsgForDownPayment] = useState('');
  const [ErroMsgForDescription, setMsgForDescription] = useState('');
  const [ErroMsgForPhoneNumber, setErrorMsgForPhoneNumber] = useState('');
  const [ErroMsgForWhatsApp, setErrorMsgForWhatsApp] = useState('');
  const [ErroMsgForBedsCounter, setErrorMsgForBedsCounter] = useState('');
  const [ErroMsgForBathsCounter, setErrorMsgForBathsCounter] = useState('');
  const [ErroMsgForPropertyFeatures, setErrorMsgForPropertyFeatures] =
    useState('');
  const [ErroMsgForutilities, setErrorMsgForutilities] = useState('');
  const [ErroMsgForfacing, setErrorMsgForfacing] = useState('');
  const [TextInputSuggestion, setTextInputSuggestion] = useState('');

  const [bedsCounter, setBedsCounter] = useState(0);
  const [bathsCounter, setBathsCounter] = useState(0);
  const Built = [
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
    '2005',
    '2004',
    '2003',
    '2002',
    '2001',
    '2000',
    '1999',
    '1998',
    '1997',
    '1996',
    '1995',
    '1994',
    '1993',
    '1992',
    '1991',
    '1990',
    '1989',
    '1988',
    '1987',
    '1986',
    '1985',
    '1984',
    '1983',
    '1982',
    '1981',
    '1980',
    '1979',
    '1978',
    '1977',
    '1976',
    '1975',
    '1974',
    '1973',
    '1972',
    '1971',
    '1970',
    '1969',
    '1968',
    '1967',
    '1966',
    '1965',
    '1964',
    '1963',
    '1962',
  ];
  const ProptryDetails = ['5 Marla', '10 Marla', '15 Marla'];
  const [propertyFeatures, setPropertyFeatures] = useState([
    {id: 1, value: 'Central Heating', selected: false},
    {id: 2, value: 'Dining Room', selected: false},
    {id: 3, value: 'Store Room', selected: false},
    {id: 4, value: 'Central Cooling', selected: false},
    {id: 5, value: 'Wifi', selected: false},
    {id: 6, value: 'Kitchen', selected: false},
    {id: 7, value: 'Drawing Room', selected: false},
    {id: 8, value: 'Furnished', selected: false},
    {id: 9, value: 'Swimming Pool', selected: false},
    {id: 10, value: 'Study Room', selected: false},
  ]);
  const [utilities, setUtilities] = useState([
    {id: 1, value: 'Electricity', selected: false},
    {id: 2, value: 'Maintenance', selected: false},
    {id: 3, value: 'Gas', selected: false},
    {id: 4, value: 'Water', selected: false},
  ]);
  const [facing, setFacing] = useState([
    {id: 1, value: 'North West', selected: false},
    {id: 2, value: 'South East', selected: false},
    {id: 3, value: 'West', selected: false},
    {id: 4, value: 'East', selected: false},
    {id: 5, value: 'South', selected: false},
    {id: 6, value: 'North', selected: false},
  ]);
  const [Suggestions, setSuggestions] = useState([
    {id: 1, value: 'Maintenance', selected: false},
    {id: 2, value: 'Construction', selected: false},
    {id: 3, value: 'Garden', selected: false},
    {id: 4, value: 'Transportation', selected: false},
    {id: 5, value: 'Loading and Unloading', selected: false},
    {id: 6, value: 'Chemical Handling', selected: false},
    {id: 7, value: 'Commissioning', selected: false},
    {id: 8, value: 'Testing', selected: false},
    {id: 9, value: 'Manual Handling', selected: false},
    {id: 10, value: 'Bathromms', selected: false},
    {id: 11, value: 'Bedrooms', selected: false},
  ]);

  const [DescrptionSuggestion, setDescrptionSuggestion] = useState([]);

  const propertyFeaturesHandler = value => {
    const newFilterArray = propertyFeatures.map((obj, index) => {
      if (obj.id === value.id) {
        const new_selection = !obj.selected;
        return {id: obj.id, value: obj.value, selected: new_selection};
      } else {
        return {...obj};
      }
    });
    setPropertyFeatures(newFilterArray);
  };
  const utilitiesHandler = value => {
    const newFilterArray = utilities.map((obj, index) => {
      if (obj.id === value.id) {
        const new_selection = !obj.selected;
        return {id: obj.id, value: obj.value, selected: new_selection};
      } else {
        return {...obj};
      }
    });
    setUtilities(newFilterArray);
  };
  const FacingHandler = value => {
    const newFilterArray = facing.map((obj, index) => {
      if (obj.id === value.id) {
        const new_selection = !obj.selected;
        return {id: obj.id, value: obj.value, selected: new_selection};
      } else {
        return {...obj, selected: false};
      }
    });
    setFacing(newFilterArray);
  };
  const BedsCounterHandler = value => {
    setBedsCounter(value);
    // console.log(value);
  };
  const BathsCounterHandler = value => {
    setBathsCounter(value);
  };

  const SubmitHandler = async () => {
    console.log(DescrptionSuggestion.join(), 'DescrptionSuggestion in Else');
    let DescriptionLocal = DescrptionSuggestion.join();
    console.log(DescriptionLocal.length, 'DescriptionLocal.lenght');
    var isError = false;
    if (propertyType === 'Homes' || propertyType == 'Commercials') {
      if (DownPayment.length < 1) {
        setErroMsgForDownPayment('Please Enter DownPayment');
        isError = true;
      } else {
        setErroMsgForDownPayment('');
      }
    }

    if (DescriptionLocal.length < 1) {
      setMsgForDescription('Please Enter Description');
      isError = true;
    } else {
      setMsgForDescription('');
    }

    if (PhoneNumber.length < 1) {
      setErrorMsgForPhoneNumber('Please Enter PhoneNumber');
      isError = true;
    } else {
      setErrorMsgForPhoneNumber('');
    }

    if (whatsappnumber.length < 1) {
      setErrorMsgForWhatsApp('Please Enter whatsappnumber');
      isError = true;
    } else {
      setErrorMsgForWhatsApp('');
    }
    if (propertyType === 'Homes' || propertyType == 'Commercials') {
      if (bedsCounter < 1) {
        setErrorMsgForBedsCounter('Please Enter Available Beds');
        isError = true;
      } else {
        setErrorMsgForBedsCounter('');
      }
    }

    if (propertyType === 'Homes' || propertyType == 'Commercials') {
      if (bathsCounter < 1) {
        isError = true;
        setErrorMsgForBathsCounter('Please Enter Available Baths');
      } else {
        setErrorMsgForBathsCounter('');
      }
    }

    // console.log(propertyFeatures, 'propertyFeatures');
    if (propertyType === 'Homes' || propertyType == 'Commercials') {
      if (
        propertyFeatures.every(obj => {
          return obj.selected === false;
        })
      ) {
        setErrorMsgForPropertyFeatures('Please Select Any Field');
        isError = true;
      } else {
        setErrorMsgForPropertyFeatures('');
      }
    }

    if (propertyType === 'Homes' || propertyType == 'Commercials') {
      if (
        utilities.every(obj => {
          return obj.selected === false;
        })
      ) {
        console.log('utilities check if');
        isError = true;
        setErrorMsgForutilities('Please Select Any Field');
      } else {
        setErrorMsgForutilities('');
        console.log('utilities check else');
      }
    }

    if (propertyType === 'Homes' || propertyType == 'Commercials') {
      if (
        facing.every(obj => {
          return obj.selected === false;
        })
      ) {
        isError = true;
        setErrorMsgForfacing('Please Select Any Field');
      } else {
        setErrorMsgForfacing('');
      }
    }
    if (isError) {
      setSuccessfulMsg('');
    }

    if (!isError) {
      console.log('Else Body');
      console.log(DescrptionSuggestion, 'DescrptionSuggestion in Else');
      const Array = propertyFeatures.filter(obj => obj.selected === true);
      const ArrayForAPIData = Array.map(obj => {
        return obj.value;
      });

      const ArrayForUtilities = utilities.filter(obj => obj.selected === true);
      const ArrayForAPIDataUtilities = ArrayForUtilities.map(obj => {
        return obj.value;
      });

      const ArrayForfacing = facing.filter(obj => obj.selected === true);
      const ArrayForAPIDatafacing = ArrayForfacing.map(obj => {
        return obj.value;
      });

      const ArrayForSendingOtherImagesURI = ImgURIForOtherImage.map(
        (obj: any) => {
          return obj.URIFromServer;
        },
      );

      var data = {
        isPublished: true,
        propertyType: propertyType,
        subPropertyType: subPropertyType,
        basement: 'true',
        stories: '6',
        latitude: Latitude,
        longitude: Longitude,
        zoom: '75.1235456321789654123',
        address: City,
        place: City,
        city: City,
        area: SizeValue,
        unit: 'marla',
        // amount: PriceValue,
        // downPayment: PriceValue,
        builtYear: '2003-04-01',
        beds: bedsCounter,
        baths: bathsCounter,
        propertyFeatures: ArrayForAPIData,
        utilities: ArrayForAPIDataUtilities,
        propertyTitle: 'East Blue',
        description: DescriptionLocal,
        country_code1: '92',
        phone1: PhoneNumber.substr(-10),
        facing: ArrayForAPIDatafacing[0],
        country_code2: '92',
        phone2: whatsappnumber.substr(-10),
        country_code: '92',
        phone: PhoneNumber.substr(-10),
        latitudeMap: '22.0740',
        longitudeMap: '62.6861',
        zoomMap: '85.1235',
        video: VideoURIForFeaturedVideo,
        img: ArrayForSendingOtherImagesURI,
        userId: '62a2e0944091c555fccf7276',
        featureImg: ImgURIForFeaturedImage,
        // monthly_rent: PriceValue,
      };
      let ObjForDecider = {};

      if (Decider === 'Rent') {
        ObjForDecider = {...data, monthly_rent: DownPayment};
      }
      if (Decider === 'Sell') {
        ObjForDecider = {...data, downPayment: DownPayment, amount: PriceValue};
      }
      try {
        // console.log('ObjForDecider', ObjForDecider);
        // console.log('ObjForDecider', ObjForDecider);
        if (Decider === 'Rent') {
          // rent API
          setButtonLoader(true);
          let response = await createListingforRent(ObjForDecider);
          if (response?.status === 200) {
            setSuccessfulMsg('Rent has been saved');
            console.log('Rent has been saved', response?.data?.data);
            ListingData({
              ListingData: response?.data?.data,
              Decider: Decider,
            });
            navigation.navigate('HomeNavigation');
          }
        }
        if (Decider === 'Sell') {
          // Sale API
          setButtonLoader(true);
          let response = await createListingforSale(ObjForDecider);
          setSuccessfulMsg('Sale has been saved');
          console.log('Sale has been saved', response?.data?.data);
          ListingData({ListingData: response?.data?.data, Decider: Decider});
          navigation.navigate('HomeNavigation');
        }
        // console.log(response);
      } catch (err) {
        console.log(err);
      }
      setButtonLoader(false);
    }
  };

  const ClearAllHandler = () => {
    console.log('ClearAllHandler');
    setValueForYearBuilt('');
    setDownPayment('');
    setBedsCounter(0);
    setBathsCounter(0);
    setPropertyFeatures([
      {id: 1, value: 'Central Heating', selected: false},
      {id: 2, value: 'Dining Room', selected: false},
      {id: 3, value: 'Store Room', selected: false},
      {id: 4, value: 'Central Cooling', selected: false},
      {id: 5, value: 'Wifi', selected: false},
      {id: 6, value: 'Kitchen', selected: false},
      {id: 7, value: 'Drawing Room', selected: false},
      {id: 8, value: 'Furnished', selected: false},
      {id: 9, value: 'Swimming Pool', selected: false},
      {id: 10, value: 'Study Room', selected: false},
    ]);
    setUtilities([
      {id: 1, value: 'Electricity', selected: false},
      {id: 2, value: 'Maintenance', selected: false},
      {id: 3, value: 'Gas', selected: false},
      {id: 4, value: 'Water', selected: false},
    ]);
    setFacing([
      {id: 1, value: 'North West', selected: false},
      {id: 2, value: 'South East', selected: false},
      {id: 3, value: 'West', selected: false},
      {id: 4, value: 'East', selected: false},
      {id: 5, value: 'South', selected: false},
      {id: 6, value: 'North', selected: false},
    ]);
    setDescription('');
    setPhoneNumber('');
    setwhatsapp('');
    setDropDowntitle('Select Your Built');
    setErroMsgForDownPayment('');
    setMsgForDescription('');
    setErrorMsgForPhoneNumber('');
    setErrorMsgForWhatsApp('');
    setErrorMsgForBedsCounter('');
    setErrorMsgForBathsCounter('');
    setErrorMsgForPropertyFeatures('');
    setErrorMsgForutilities('');
    setErrorMsgForfacing('');
  };

  const SuggestionHandler = objfromFunc => {
    let array = Suggestions.map(obj => {
      if (objfromFunc.value === obj.value) {
        return {...objfromFunc, selected: !obj.selected};
      } else {
        return {...obj};
      }
    });
    let DescriptionValue = array.filter(obj => {
      return obj.selected === true;
    });

    let dummyArray = DescriptionValue.map(obj => {
      return obj.value;
    });
    if (objfromFunc.selected === false) {
      setDescrptionSuggestion(suggest => [...suggest, objfromFunc.value]);
    }
    if (objfromFunc.selected === true) {
      if (DescrptionSuggestion.join().includes(objfromFunc.value)) {
        console.log('check satisgfied');
        let result = DescrptionSuggestion.join().replace(objfromFunc.value, '');
        console.log(result, 'result');
        setDescrptionSuggestion(suggest => [result.replace(',', '')]);
      }
    }
    setSuggestions([...array]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{}}>
        <PreviewHeader name="Preview" />
        <View style={[styles.propertyContainer]}>
          <View style={styles.propertyImg}>
            <View>
              <Image
                style={styles.property_icon}
                source={{uri: `${REACT_APP_API_URL}/${ImgURIForFeaturedImage}`}}
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
            <Text style={[styles.propertyLocationtext]}>{City}</Text>
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
        {/* Add More Features */}

        {(propertyType === 'Homes' || propertyType == 'Commercials') && (
          <View style={{marginTop: hp(3)}}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Raleway',
                fontWeight: '600',
                color: '#DFA72C',
              }}>
              Add More Features
            </Text>
          </View>
        )}
        {(propertyType === 'Homes' || propertyType == 'Commercials') && (
          <View
            style={{
              width: '100%',
              marginTop: hp(2),
              borderRadius: 16,
              borderWidth: 1,
              borderColor: '#979BB5',
              paddingHorizontal: hp(2),
            }}>
            <Text
              style={{
                color: '#1B1839',
                fontFamily: 'Raleway',
                fontWeight: '600',
                marginTop: hp(2),
              }}>
              General Information
            </Text>
            <View style={{marginTop: hp(2)}}>
              <Dropdown
                title={DropDowntitle}
                tags={Built}
                DropDownValueGetter={setValueForYearBuilt}
              />
              <TextInput
                keyboardType="number-pad"
                placeholder={Decider === 'Rent' ? 'Rent' : ' Down Payment'}
                multiline
                value={DownPayment}
                style={{
                  marginTop: hp(2),
                  color: 'black',
                  borderRadius: 16,
                  fontSize: 16,
                  flex: 1,
                  width: '100%',
                  paddingLeft: wp(2),
                  backgroundColor: '#F6F0EA',
                }}
                onChangeText={e => {
                  setDownPayment(e);
                }}
              />
              {ErroMsgForDownPayment.length > 0 && (
                <View>
                  <Text style={{color: 'red'}}>{ErroMsgForDownPayment}</Text>
                </View>
              )}
              <HorizantalLine />
              <CustomizaCounter
                name="Beds"
                BedsCounterHandler={setBedsCounter}
                bedsCounter={bedsCounter}
              />
              {bedsCounter < 1 && (
                <View>
                  <Text style={{color: 'red'}}>{ErroMsgForBedsCounter}</Text>
                </View>
              )}
              <HorizantalLine />
              <CustomizaCounter
                name="Baths"
                BedsCounterHandler={setBathsCounter}
                bedsCounter={bathsCounter}
              />
              {bathsCounter < 1 && (
                <View>
                  <Text style={{color: 'red'}}>{ErroMsgForBathsCounter}</Text>
                </View>
              )}
              <HorizantalLine />
              <Text
                style={{
                  color: '#1B1839',
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                  marginTop: hp(2),
                }}>
                Property Features
              </Text>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {propertyFeatures.map((obj, index) => {
                  return (
                    <View
                      style={{
                        width: '50%',
                        flexDirection: 'row',

                        alignItems: 'center',
                      }}>
                      <CheckBox
                        style={{padding: 10, paddingLeft: 0}}
                        isChecked={obj.selected}
                        checkBoxColor={'#DFA72C'}
                        uncheckedCheckBoxColor="#DCE1E5"
                        onClick={() => {
                          propertyFeaturesHandler(obj);
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: 'Raleway',
                          fontWeight: '600',
                          color: '#1E2022',
                        }}>
                        {obj.value}
                      </Text>
                    </View>
                  );
                })}
              </View>
              {ErroMsgForPropertyFeatures.length > 0 && (
                <View>
                  <Text style={{color: 'red'}}>
                    {' '}
                    {ErroMsgForPropertyFeatures}{' '}
                  </Text>
                </View>
              )}
              <HorizantalLine />
              <Text
                style={{
                  color: '#1B1839',
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                  marginTop: hp(2),
                }}>
                Utilities
              </Text>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {utilities.map((obj, index) => {
                  return (
                    <View
                      style={{
                        width: '50%',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <CheckBox
                        style={{padding: 10, paddingLeft: 0}}
                        isChecked={obj.selected}
                        checkBoxColor={'#DFA72C'}
                        uncheckedCheckBoxColor="#DCE1E5"
                        onClick={() => {
                          utilitiesHandler(obj);
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: 'Raleway',
                          fontWeight: '600',
                          color: '#1E2022',
                        }}>
                        {obj.value}
                      </Text>
                    </View>
                  );
                })}
              </View>
              {ErroMsgForutilities.length > 0 && (
                <View>
                  {console.log(
                    ErroMsgForutilities,
                    'ErroMsgForutilities in Utilities',
                  )}
                  <Text style={{color: 'red'}}> {ErroMsgForutilities} </Text>
                </View>
              )}
              <HorizantalLine />
              <Text
                style={{
                  color: '#1B1839',
                  fontFamily: 'Raleway',
                  fontWeight: '600',
                  marginTop: hp(2),
                }}>
                Facing
              </Text>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {facing.map((obj, index) => {
                  return (
                    <View
                      style={{
                        width: '50%',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      {/* <CheckBox
                        style={{padding: 10, paddingLeft: 0}}
                        isChecked={obj.selected}
                        checkBoxColor={'#DFA72C'}
                        uncheckedCheckBoxColor="#DCE1E5"
                        onClick={() => {
                          FacingHandler(obj);
                        }}
                      /> */}
                      <RadioButton
                        // style={{padding: 10, paddingLeft: 0}}
                        uncheckedColor="#DCE1E5"
                        color="#DFA72C"
                        // value="first"
                        status={obj.selected ? 'checked' : 'unchecked'}
                        onPress={() => FacingHandler(obj)}
                      />
                      <Text
                        style={{
                          fontFamily: 'Raleway',
                          fontWeight: '600',
                          color: '#1E2022',
                        }}>
                        {obj.value}
                      </Text>
                    </View>
                  );
                })}
              </View>
              {ErroMsgForfacing.length > 0 && (
                <View>
                  <Text style={{color: 'red'}}> {ErroMsgForfacing} </Text>
                </View>
              )}
              <View style={{marginTop: hp(2)}} />
            </View>
          </View>
        )}
        <View
          style={{
            // height: hp(20),
            marginTop: hp(4),
            borderColor: '#979BB5',
            borderWidth: 1,
            borderRadius: 16,
            backgroundColor: '#f7f7f9',
          }}>
          <TextInput
            placeholder="Description"
            onChangeText={x => {
              setDescrptionSuggestion(suggest => [x]);
            }}
            value={[DescrptionSuggestion].join()}
            placeholderTextColor={'#77838F'}
            multiline={true}
            style={{
              backgroundColor: '#f7f7f9',
              borderRadius: 16,
              width: '100%',
              paddingLeft: wp(4),
              // borderWidth: 1,
              paddingVertical: hp(8),
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: 'center',
              // alignItems: 'center',
              flexWrap: 'wrap',
              paddingHorizontal: wp(1),
            }}>
            {Suggestions.map((obj, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    SuggestionHandler(obj);
                  }}
                  style={{
                    paddingVertical: hp(1),
                    paddingHorizontal: hp(1),
                    backgroundColor: obj.selected ? '#DFA72C' : 'white',
                    borderRadius: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: hp(1),
                    marginBottom: hp(1),
                    marginTop: hp(1),
                    borderColor: '#969696',
                    borderWidth: 1,
                  }}>
                  <Text>{obj.value}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {ErroMsgForDescription.length > 0 && (
          <View>
            <Text style={{color: 'red'}}>{ErroMsgForDescription}</Text>
          </View>
        )}
        <Text
          style={{
            color: '#DFA72C',
            fontFamily: 'Raleway',
            fontWeight: '600',
            marginTop: hp(2),
          }}>
          Contact Details
        </Text>
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
            placeholder="Phone Number"
            value={PhoneNumber}
            style={{
              color: 'grey',
              fontSize: 16,
              flex: 1,
              width: '80%',
            }}
            onChangeText={e => {
              setPhoneNumber(e);
            }}
          />
          <View
            style={{
              width: '20%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SvgXml width="29" height="20" xml={Phoneicon} />
          </View>
        </View>
        {ErroMsgForPhoneNumber.length > 0 && (
          <View>
            <Text style={{color: 'red'}}>{ErroMsgForPhoneNumber}</Text>
          </View>
        )}
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
            placeholder="Enter Your Number"
            value={whatsappnumber}
            style={{
              color: 'grey',
              fontSize: 16,
              flex: 1,
              width: '80%',
            }}
            onChangeText={e => {
              setwhatsapp(e);
            }}
          />

          <View
            style={{
              width: '20%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              style={{}}
              name="logo-whatsapp"
              type="ionicon"
              color="#2AF598"
            />
          </View>
        </View>
        {ErroMsgForWhatsApp.length > 0 && (
          <View>
            <Text style={{color: 'red'}}>{ErroMsgForWhatsApp}</Text>
          </View>
        )}
        <View style={{marginTop: hp(2)}}></View>

        <TouchableOpacity
          onPress={ClearAllHandler}
          style={{
            width: '100%',
            marginTop: hp(2),
          }}>
          <Text
            style={{
              color: '#DFA72C',

              textDecorationLine: 'underline',
              alignSelf: 'flex-end',
            }}>
            Clear All
          </Text>
        </TouchableOpacity>

        {SuccessfulMsg.length > 0 && (
          <View>
            <Text>{SuccessfulMsg}</Text>
          </View>
        )}
        <View style={{marginTop: hp(2)}}>
          <ButtonBottom
            name="Submit Property"
            onPress={SubmitHandler}
            ButtonLoader={ButtonLoader}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    ListingData: (data: any) => dispatch(ListingData(data)),
  };
};
export default connect(null, mapDispatchToProps)(UploadFoam);
