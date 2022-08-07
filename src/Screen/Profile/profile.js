import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  PermissionsAndroid,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
  pick,
} from 'react-native-document-picker';
import styles from './styles';
import {SvgXml} from 'react-native-svg';
import {backarrow} from '../../../assets/images/backarrow';
import {useNavigation} from '@react-navigation/native';
import {Icon, Avatar} from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import DateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker from 'react-native-country-picker-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Update_Profile} from '../Api/Api';
import {launchCamera} from 'react-native-image-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import countryList from 'react-select-country-list';
import {citiesDropDown, countryList} from '../../config/globals';
import {Alert} from 'react-native';
import {lock} from '../../../assets/images/lock';
// import PhoneInput from 'react-native-phone-input';
import Modal from 'react-native-modal';
import * as ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import {UploadImage} from '../../Services/APIs/auth';
import {REACT_APP_API_URL} from '../../Services/APIs/auth';
import {useForm, Controller, reset} from 'react-hook-form';
import {UpdateUserSchema} from './UpdateUser';
import {yupResolver} from '@hookform/resolvers/yup';
import {AddOption} from '../../../assets/images/AddOption';
import {cross} from '../../../assets/images/cross';
// import {yupResolver} from '@hookform/resolvers/yup';
import {UpdateUser} from '../../Services/APIs/auth';
import {GetUser} from '../../Services/APIs/auth';

const profile = () => {
  const [stateForCamera, setStateForCamera] = useState({
    setModalCameraVisible: false,
    Images: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    FileName: '',
    FileType: '',
    setModalCameraVisibleForCNICFront: false,
    FrontCNICImage: '',
    FileNameForCNICFront: '',
    CNICFrontViewConroller: false,
    BackCNICImage: '',
    FileNameForCNICBack: '',
    CNICBackViewConroller: false,
    setModalCameraVisibleForCNICBack: false,
  });

  const BoolenForUseEffect = useRef(false);
  const BoolenForUseEffectForFront = useRef(false);
  const BoolenForUseEffectForBack = useRef(false);

  const [ImageForFrontCNIC, setImageForFrontCNIC] = useState('');
  const [ImageforBackCNIC, setImageforBackCNIC] = useState('');
  const [ImageforProfile, setImage] = useState(
    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  );
  const [ImageFromServer, SetImageFromServer] = useState('');
  const [ErrorMsgForFrontCNIC, setErrorMsgForFrontCNIC] = useState('');
  const [ErrorMsgForBackCNIC, setErrorMsgForBackCNIC] = useState('');
  const [UserSuccessFull, setUserSuccessFull] = useState('');
  const [ServerError, setServerError] = useState('');
  const [userData, setUserData] = useState(null);

  const navigation = useNavigation();
  const [ButtonLoader, setButtonLoader] = useState(false);
  const [dobToShow, setDobToShow] = useState(false);
  const [AvatarForProfile, setAvatar] = useState(false);
  const [dobTo, setdobTo] = useState(new Date());
  const [selectedValue, setSelectedValue] = useState();
  const [pickerData, setpickerData] = useState({});
  const [countryCode, setcountryCode] = useState('PK');
  const [callingCode, setcallingCode] = useState('+92');
  const [countryName, setcountryName] = useState('Afghanistan');
  const [cityName, setcityName] = useState('Karachi');
  const [imageName, setimageName] = useState('');
  const [CitynameALL, setCitynameALL] = useState([]);
  const [emailData, setemailData] = useState();
  const [fullNameData, setfullNameData] = useState();
  const [mobileNumberData, setmobileNumberData] = useState('');
  const [countryData, setcountryData] = useState();

  const [token, settoken] = useState();
  const [cityData, setcityData] = useState();
  const [dobData, setdobData] = useState();
  const [AddressData, setAddressData] = useState();

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      telephone: '',
      faxCode: '',
      faxNumber: '',
      address: '',
      country: '',
      ntn: '',
      zipcode: '',
      city: '',
      AboutYourself: '',
    },
    resolver: yupResolver(UpdateUserSchema),
  });

  async function pickImageForCNICBack() {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);

    const permissionCamera = await PermissionsAndroid.check(
      'android.permission.CAMERA',
    );
    const permissionWriteStorage = await PermissionsAndroid.check(
      'android.permission.WRITE_EXTERNAL_STORAGE',
    );

    if (!permissionCamera || !permissionWriteStorage) {
      Alert.alert('Failed to get the required permissions.');
      return;
    }
    let options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
      includeBase64: false,
    };
    launchCamera(options, response => {
      let path = response.assets[0].uri;
      ImageResizer.createResizedImage(path, 250, 250, 'JPEG', 60, 0, undefined)
        .then(response => {
          setStateForCamera({
            ...stateForCamera,
            FileType: 'image/JPEG',
            FileNameForCNICBack: response.name,
            BackCNICImage: response.uri,
            setModalCameraVisibleForCNICBack: false,
            CNICBackViewConroller: true,
          });
        })
        .catch(err => {
          console.log(err);
        });

      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
    });
  }

  const launchImageLibraryForCNICBack = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        saveToPhotos: true,
        waitUntilSaved: true,
        quality: 0.5,
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let path = response.assets[0].uri;
        ImageResizer.createResizedImage(
          path,
          250,
          250,
          'JPEG',
          60,
          0,
          undefined,
        )
          .then(response => {
            setStateForCamera({
              ...stateForCamera,
              FileType: 'image/JPEG',
              FileNameForCNICBack: response.name,
              BackCNICImage: response.uri,
              setModalCameraVisibleForCNICBack: false,
              CNICBackViewConroller: true,
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  async function pickImageForCNICFront() {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);

    const permissionCamera = await PermissionsAndroid.check(
      'android.permission.CAMERA',
    );
    const permissionWriteStorage = await PermissionsAndroid.check(
      'android.permission.WRITE_EXTERNAL_STORAGE',
    );

    if (!permissionCamera || !permissionWriteStorage) {
      Alert.alert('Failed to get the required permissions.');
      return;
    }
    let options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
      includeBase64: false,
    };
    launchCamera(options, response => {
      let path = response.assets[0].uri;
      ImageResizer.createResizedImage(path, 250, 250, 'JPEG', 60, 0, undefined)
        .then(response => {
          setStateForCamera({
            ...stateForCamera,
            FileType: 'image/JPEG',
            FileNameForCNICFront: response.name,
            FrontCNICImage: response.uri,
            setModalCameraVisibleForCNICFront: false,
            CNICFrontViewConroller: true,
          });
        })
        .catch(err => {
          console.log(err);
        });

      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
    });
  }

  const launchImageLibraryForCNICFront = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        saveToPhotos: true,
        waitUntilSaved: true,
        quality: 0.5,
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let path = response.assets[0].uri;
        ImageResizer.createResizedImage(
          path,
          250,
          250,
          'JPEG',
          60,
          0,
          undefined,
        )
          .then(response => {
            setStateForCamera({
              ...stateForCamera,
              FileType: 'image/JPEG',
              FileNameForCNICFront: response.name,
              FrontCNICImage: response.uri,
              setModalCameraVisibleForCNICFront: false,
              CNICFrontViewConroller: true,
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  function formatSizeUnits(bytes) {
    bytes = (bytes / 1048576).toFixed(2);
    return bytes;
  }

  async function pickImage() {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);

    const permissionCamera = await PermissionsAndroid.check(
      'android.permission.CAMERA',
    );
    const permissionWriteStorage = await PermissionsAndroid.check(
      'android.permission.WRITE_EXTERNAL_STORAGE',
    );

    if (!permissionCamera || !permissionWriteStorage) {
      Alert.alert('Failed to get the required permissions.');
      return;
    }
    let options = {
      mediaType: 'photo',
      quality: 1,
      saveToPhotos: true,
      includeBase64: false,
    };
    launchCamera(options, response => {
      let path = response.assets[0].uri;
      ImageResizer.createResizedImage(path, 250, 250, 'JPEG', 60, 0, undefined)
        .then(response => {
          setStateForCamera({
            ...stateForCamera,
            FileType: 'image/JPEG',
            FileName: response.name,
            Images: response.uri,
            setModalCameraVisible: !stateForCamera.setModalCameraVisible,
          });
          setAvatar(false);
        })
        .catch(err => {
          console.log(err);
        });

      // setStateForCamera({
      //   ...stateForCamera,
      //   FileType: response.assets[0].type,
      //   FileName: response.assets[0].fileName,
      //   Images: response.assets[0].uri,
      //   setModalCameraVisible: !stateForCamera.setModalCameraVisible,
      // });

      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
    });
  }

  const launchImageLibrary = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        saveToPhotos: true,
        waitUntilSaved: true,
        quality: 0.5,
      },
    };
    console.log('Profile Image');
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let path = response.assets[0].uri;
        ImageResizer.createResizedImage(
          path,
          250,
          250,
          'JPEG',
          60,
          0,
          undefined,
        )
          .then(response => {
            setStateForCamera({
              ...stateForCamera,
              FileType: 'image/JPEG',
              FileName: response.name,
              Images: response.uri,
              setModalCameraVisible: !stateForCamera.setModalCameraVisible,
            });
            setAvatar(false);
          })
          .catch(err => {
            console.log(err);
          });
        // console.log(this.state.Images, 'this.state.Images');
      }
    });
  };

  const onChangeDobTo = (event, selectedDate) => {
    const currentDate = selectedDate || dobTo;
    setDobToShow(Platform.OS === 'ios');

    setdobTo(currentDate);
  };

  const onSubmit = async data => {
    if (ImageForFrontCNIC.length < 1) {
      setErrorMsgForFrontCNIC('Please Enter the Front Image');
    }
    if (ImageforBackCNIC.length < 1) {
      setErrorMsgForBackCNIC('Please Enter the Back Image');
    } else {
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('front', ImageForFrontCNIC);
      formData.append('back', ImageforBackCNIC);
      formData.append('img', ImageforProfile);
      // formData.append('dob', moment(data.dob).format('YYYY-MM-DD'));
      formData.append('country', data.country);
      formData.append('state', data.state);
      formData.append('city', data.city);
      formData.append('address', data.address);
      formData.append('fax_code', data.faxCode);
      formData.append('fax', data.faxNumber);
      formData.append('city_code', data.telephone.slice(0, 3));
      formData.append('tel', data.telephone.slice(3, 12));
      // console.log("form data", formData.get("profile"));
      formData.append('phone', data.phone.slice(2, 12));
      formData.append('country_code', '92');
      formData.append('NTN', data.ntn);
      formData.append('zipcode', data.zipcode);

      try {
        setButtonLoader(true);
        const response = await UpdateUser(formData);

        if (response?.status === 200) {
          setUserSuccessFull('User Updated Successfully');

          // navigate("/");
        } else {
          console.log('Network Error');
          setServerError('Network Error');
        }
      } catch (err) {
        console.log('start', err);

        if (err.response.status === 400) {
          setServerError(err.response);
          return console.log(err.response);
        } else if (err.response.status === 404) {
          setServerError('User could not updated');
          return console.log('User could not updated');
        } else if (err.response.status === 500) {
          setServerError('Server Error');
          return console.log('Server Error');
        } else {
          setServerError('Network error');
          return console.log('Network error');
        }
      }
      setButtonLoader(false);
    }
  };

  const getUserInUseEffect = async () => {
    console.log('getUserInUseEffect For Avatar status');
    try {
      const response = await GetUser();

      if (response.status === 200) {
        // ImageforProfile(response.data.message.img);
        let data = response.data.message;
        let user = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          telephone: '0' + data.tel_no.city_code + data.tel_no.tel,
          phone:
            data.phone_no.country_code.toString() +
            data.phone_no.phone.toString(),
          city: data.city_state.city,
          faxCode: data.fax_no.fax_code.toString(),
          faxNumber: data.fax_no.fax.toString(),
          ntn: data.NTN,
          address: data.address,
          country: data.country,
          zipcode: data.zipcode,
        };
        console.log(user);
        setUserData(user);
        setImageForFrontCNIC(data.cnic.front);
        setImageforBackCNIC(data.cnic.back);
        SetImageFromServer(data.img);
        setStateForCamera({
          ...stateForCamera,
          CNICFrontViewConroller: true,
          CNICBackViewConroller: true,
        });
        setAvatar(true);

        // return user;
      } else return null;
    } catch (err) {
      return null;
    }
  };

  const onError = (errors, e) => console.log('error: ', errors, e);
  useEffect(async () => {
    if (BoolenForUseEffect.current === true) {
      let item = {
        name: stateForCamera.FileName,
        uri: stateForCamera.Images,
        type: stateForCamera.FileType,
      };
      let ImageData = new FormData();
      ImageData.append('img', item);

      try {
        UploadImage(item)
          .then(response => response.json())
          .then(response => {
            setImage(response.url);
            console.log(response.url, 'response.url for the Profile Image');
            if (response?.status === 200) {
              console.log(response.url, 'response.url for the Profile Image');
            }
            // else {
            //   console.log('Network Error');
            // }
          })
          .catch(error => console.log('error in the UploadImage', error));
      } catch (err) {
        console.log(err, 'Image could not upload');
      }
    }
    BoolenForUseEffect.current = true;
  }, [stateForCamera.Images]);

  useEffect(async () => {
    if (BoolenForUseEffectForFront.current === true) {
      let item = {
        name: stateForCamera.FileNameForCNICFront,
        uri: stateForCamera.FrontCNICImage,
        type: stateForCamera.FileType,
      };
      let ImageData = new FormData();
      ImageData.append('imgForFront', item);

      try {
        UploadImage(item)
          .then(response => response.json())
          .then(response => {
            setImageForFrontCNIC(response.url);
            console.log(response.url);
            if (response?.status === 200) {
              console.log(response.url);
            }
            // else {
            //   console.log('Network Error');
            // }
          })
          .catch(error =>
            console.log('error in the Upload Image For Front CNIC', error),
          );
      } catch (err) {
        console.log(err, 'Image could not upload For Front CNIC');
      }
    }
    BoolenForUseEffectForFront.current = true;
  }, [stateForCamera.FrontCNICImage]);

  useEffect(async () => {
    if (BoolenForUseEffectForBack.current === true) {
      let item = {
        name: stateForCamera.FileNameForCNICBack,
        uri: stateForCamera.BackCNICImage,
        type: stateForCamera.FileType,
      };
      let ImageData = new FormData();
      ImageData.append('imgForBack', item);

      try {
        UploadImage(item)
          .then(response => response.json())
          .then(response => {
            setImageforBackCNIC(response.url);
            if (response?.status === 200) {
              console.log(response.url);
            }
            // else {
            //   console.log('Network Error');
            // }
          })
          .catch(error =>
            console.log('error in the Upload Image For Back CNIC', error),
          );
      } catch (err) {
        console.log(err, 'Image could not upload For Back CNIC');
      }
    }
    BoolenForUseEffectForBack.current = true;
  }, [stateForCamera.BackCNICImage]);

  useEffect(() => {
    getUserInUseEffect();
  }, []);

  useEffect(() => {
    if (userData) {
      reset({
        firstName: 'Shakeel',
        lastName: userData?.lastName,
        phone: userData?.phone,
        email: userData?.email,
        telephone: userData?.telephone,
        faxCode: userData?.faxCode,
        faxNumber: userData?.faxNumber,
        address: userData?.address,
        country: userData?.country,
        ntn: String(userData?.ntn),
        zipcode: String(userData?.zipcode),
        city: userData?.city,
        AboutYourself: 'About ..',
      });
    }
  }, [userData]);

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View>
        <View style={styles.headerView}>
          <View style={{flex: 0.2}}>
            <TouchableOpacity
              style={styles.btn_backarrow}
              onPress={() => navigation.goBack()}>
              {/* <SvgXml
                style={styles.backArrow_img}
                width="50"
                height="50"
                xml={backarrow}
              /> */}
              <Icon
                name="chevron-back"
                type="ionicon"
                color="#fff"
                //   containerStyle={{opacity: 0.9}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.8}}>
            <Text style={styles.headerText}>My Profile</Text>
          </View>
        </View>

        <Modal
          onBackButtonPress={() => {
            setStateForCamera({
              ...stateForCamera,
              setModalCameraVisibleForCNICFront:
                !stateForCamera.setModalCameraVisibleForCNICFront,
            });
          }}
          isVisible={stateForCamera.setModalCameraVisibleForCNICFront}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              color: '#333',
              backgroundColor: 'white',
              width: wp(60),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: hp(2),
                marginVertical: hp(2),
                color: '#333',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}>
              Select Options
            </Text>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: hp(3),
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  alignSelf: 'center',
                  backgroundColor: '#DFA72C',
                  flexDirection: 'row',
                  width: '50%',
                  padding: hp(1.5),
                  justifyContent: 'center',
                }}
                onPress={() => pickImageForCNICFront()}>
                <Icon name="camera" size={hp(3)} color="#fff" />
                <Text
                  style={{
                    marginLeft: hp(1),
                    fontSize: hp(1.8),
                    color: '#fff',
                    fontWeight: '600',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  launchImageLibraryForCNICFront();
                }}
                style={{
                  borderRadius: 10,
                  alignSelf: 'center',
                  backgroundColor: '#DFA72C',
                  flexDirection: 'row',
                  width: '40%',
                  padding: hp(1.5),
                  justifyContent: 'center',
                }}>
                <Icon name="image" size={hp(3)} color="#fff" />
                <Text
                  style={{
                    marginLeft: hp(1),
                    fontSize: hp(1.8),
                    color: '#fff',
                    fontWeight: '600',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          onBackButtonPress={() => {
            setStateForCamera({
              ...stateForCamera,
              setModalCameraVisibleForCNICBack:
                !stateForCamera.setModalCameraVisibleForCNICBack,
            });
          }}
          isVisible={stateForCamera.setModalCameraVisibleForCNICBack}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              color: '#333',
              backgroundColor: 'white',
              width: wp(60),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: hp(2),
                marginVertical: hp(2),
                color: '#333',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}>
              Select Options
            </Text>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: hp(3),
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  alignSelf: 'center',
                  backgroundColor: '#DFA72C',
                  flexDirection: 'row',
                  width: '50%',
                  padding: hp(1.5),
                  justifyContent: 'center',
                }}
                onPress={() => pickImageForCNICBack()}>
                <Icon name="camera" size={hp(3)} color="#fff" />
                <Text
                  style={{
                    marginLeft: hp(1),
                    fontSize: hp(1.8),
                    color: '#fff',
                    fontWeight: '600',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  launchImageLibraryForCNICBack();
                }}
                style={{
                  borderRadius: 10,
                  alignSelf: 'center',
                  backgroundColor: '#DFA72C',
                  flexDirection: 'row',
                  width: '40%',
                  padding: hp(1.5),
                  justifyContent: 'center',
                }}>
                <Icon name="image" size={hp(3)} color="#fff" />
                <Text
                  style={{
                    marginLeft: hp(1),
                    fontSize: hp(1.8),
                    color: '#fff',
                    fontWeight: '600',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          onBackButtonPress={() => {
            setStateForCamera({
              ...stateForCamera,
              setModalCameraVisible: !stateForCamera.setModalCameraVisible,
            });
          }}
          isVisible={stateForCamera.setModalCameraVisible}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={[
              {
                color: '#333',
                backgroundColor: 'white',
                width: wp(60),
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: hp(2),
                marginVertical: hp(2),
                color: '#333',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}>
              Select Options
            </Text>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: hp(3),
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  alignSelf: 'center',
                  backgroundColor: '#DFA72C',
                  flexDirection: 'row',
                  width: '50%',
                  padding: hp(1.5),
                  justifyContent: 'center',
                }}
                onPress={() => pickImage()}>
                <Icon name="camera" size={hp(3)} color="#fff" />
                <Text
                  style={{
                    marginLeft: hp(1),
                    fontSize: hp(1.8),
                    color: '#fff',
                    fontWeight: '600',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // launchLibrary();
                  launchImageLibrary();
                }}
                style={{
                  borderRadius: 10,
                  alignSelf: 'center',
                  backgroundColor: '#DFA72C',
                  flexDirection: 'row',
                  width: '40%',
                  padding: hp(1.5),
                  justifyContent: 'center',
                }}>
                <Icon name="image" size={hp(3)} color="#fff" />
                <Text
                  style={{
                    marginLeft: hp(1),
                    fontSize: hp(1.8),
                    color: '#fff',
                    fontWeight: '600',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.bodyContainer}>
          <View style={[styles.cameraIcon]}>
            {console.log(
              `${REACT_APP_API_URL}${ImageFromServer}`,
              'ImageFromServer',
            )}
            {/* {let uri = `${REACT_APP_API_URL}${ImageFromServer}`}
            {console.log('urrrrrrri: ', uri)} */}
            {console.log(AvatarForProfile, 'AvatarForProfile')}
            {AvatarForProfile ? (
              <Avatar
                size={110}
                rounded
                containerStyle={{
                  alignSelf: 'center',
                  top: 20,
                  backgroundColor: 'white',
                }}
                source={{
                  uri: `${REACT_APP_API_URL}/${ImageFromServer}`,
                  // uri:ImageforProfile,
                }}
              />
            ) : (
              <Avatar
                size={110}
                rounded
                containerStyle={{
                  alignSelf: 'center',
                  top: 20,
                  backgroundColor: 'white',
                }}
                source={{
                  uri: `${REACT_APP_API_URL}/${ImageforProfile}`,
                  // uri:ImageforProfile,
                }}
              />
            )}
            {/* {ImageFromServer.length < 1 ? (
              <Avatar
                size={110}
                rounded
                containerStyle={{
                  alignSelf: 'center',
                  top: 20,
                  backgroundColor: 'white',
                }}
                source={{
                  uri: 'http://3.68.70.27' + {ImageFromServer},
                }}
              />
            ) : (
              <Avatar
                size={110}
                rounded
                containerStyle={{
                  alignSelf: 'center',
                  top: 20,
                  backgroundColor: 'white',
                }}
                source={{
                  uri: 'http://3.68.70.27' + {ImageFromServer},
                }}
              />
            )} */}
            <TouchableOpacity
              onPress={() =>
                setStateForCamera({
                  ...stateForCamera,
                  setModalCameraVisible: true,
                })
              }>
              <Icon
                style={styles.emailIcon}
                name="camera"
                type="entypo"
                color="#000"
                containerStyle={{opacity: 3, bottom: 30, left: 40}}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                  fontFamily: 'Raleway',
                }}>
                Waseem Khan
              </Text>
            </View>
          </View>
          <View style={styles.cameraIcontext}>
            <Text style={styles.cameraIconTextstyles}>{fullNameData}</Text>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.formField_email_invisible}>
            <Icon
              style={styles.emailIcon}
              name="mail-open-outline"
              type="ionicon"
              color="#DFA72C"
              containerStyle={{opacity: 3}}
            />

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="Codistan45@gmail.com"
                  {...register('email')}
                />
              )}
              name="email"
            />
          </View>
          <View style={{}}>
            {errors?.email && (
              <Text style={{color: 'red'}}>{errors?.email?.message}</Text>
            )}
          </View>
          <View style={styles.formField_email}>
            <Icon
              style={styles.emailIcon}
              name="person-outline"
              type="ionicon"
              color="#DFA72C"
              containerStyle={{opacity: 3}}
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="First Name"
                  {...register('firstName')}
                />
              )}
              name="firstName"
            />
          </View>
          <View style={{}}>
            {errors?.firstName && (
              <Text style={{color: 'red'}}>{errors?.firstName?.message}</Text>
            )}
          </View>

          <View style={styles.formField_email}>
            <Icon
              style={styles.emailIcon}
              name="person-outline"
              type="ionicon"
              color="#DFA72C"
              containerStyle={{opacity: 3}}
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="Last Name"
                  {...register('lastName')}
                />
              )}
              name="lastName"
            />
          </View>
          <View style={{}}>
            {errors?.lastName && (
              <Text style={{color: 'red'}}>{errors?.lastName?.message}</Text>
            )}
          </View>

          <View style={styles.formField_email}>
            <SvgXml
              style={styles.emailIcon}
              xml={lock}
              width="25"
              height="25"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="Tele Phone No."
                  {...register('telephone')}
                />
              )}
              name="telephone"
            />
          </View>
          <View style={{}}>
            {errors?.telephone && (
              <Text style={{color: 'red'}}>{errors?.telephone?.message}</Text>
            )}
          </View>

          <View style={styles.formField_email}>
            <SvgXml
              style={styles.emailIcon}
              xml={lock}
              width="25"
              height="25"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder=" Phone No"
                  {...register('phone')}
                />
              )}
              name="phone"
            />
          </View>
          <View style={{}}>
            {errors?.phone && (
              <Text style={{color: 'red'}}>{errors?.phone?.message}</Text>
            )}
          </View>
          {/* <View style={styles.formField_email}>
            <View style={{flex: 0.1, alignSelf: 'center', marginRight: 7}}>
              <CountryPicker
                withFilter
                countryCode={countryCode}
                withFlag
                withAlphFilter={false}
                withCurrencyButton={false}
                withCallingCode={true}
                onSelect={country => {
                  console.log('country', country);
                  const {cca2, callingCode} = country;
                  setcountryCode(cca2);
                  setcallingCode(callingCode[0]);
                  console.log(callingCode[0]);
                }}
              />
            </View>
            <View
              style={{flex: 0.8, borderLeftWidth: 1, borderColor: '#DCE1E5'}}>
              <TextInput
                style={{fontSize: 15, marginLeft: 10}}
                keyboardType="number-pad"
                placeholder="Phone Number"
                onChangeText={text => setmobileNumberData(text)}
                // value={phone}
                value={mobileNumberData}
              />
            </View>
          </View> */}
          {/* <TouchableOpacity onPress={() => setDobToShow(true)}>
            <View style={styles.formField_email}>
              <Icon
                style={styles.emailIcon}
                name="cake"
                type="materialcommunityicons"
                color="#DFA72C"
                containerStyle={{opacity: 3}}
              />

              <TextInput
                style={styles.formInput_email}
                autoCapitalize="none"
                autoCorrect={false}
                editable={false}
                maxLength={10}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="rgb(0, 0, 0)"
                value={`${
                  dobTo.getFullYear() +
                  '-' +
                  ('0' + (dobTo.getMonth() + 1)).slice(-2) +
                  '-' +
                  ('0' + dobTo.getDate()).slice(-2)
                }`}
              />

              {dobToShow && (
                <DateTimePicker
                  testID="dateTimePickerTo"
                  value={dobTo}
                  mode="date"
                  dateFormat="day month year"
                  is24Hour={true}
                  display="default"
                  onChange={onChangeDobTo}></DateTimePicker>
              )}
            </View>
          </TouchableOpacity> */}
          {/* <View style={styles.formField_country_dropdown}>
            <Picker
              mode="dropdown"
              style={{marginLeft: 10}}
              selectedValue={countryName}
              onValueChange={item => {
                setcountryName(item);
                setcountryData(item);
                setCitynameALL(citiesDropDown.filter(d => d.key == item));
              }}>
              {countryList.map((item, i) => (
                <Picker.Item label={item} value={item} key={i} />
              ))}
            </Picker>
          </View> */}

          {/* <View style={styles.formField_country_dropdown}>
            <Picker
              mode="dropdown"
              style={{marginLeft: 10}}
              selectedValue={cityName}
              onValueChange={item => {
                setcityName(item);
                setcityData(item);
              }}>
              {CitynameALL.map((item, i) => (
                <Picker.Item label={item.value} value={item.value} key={i} />
              ))}
            </Picker>
          </View> */}

          <View style={styles.formField_email}>
            <Icon
              style={styles.emailIcon}
              name="map-pin"
              type="feather"
              color="#DFA72C"
              containerStyle={{opacity: 3}}
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="Address"
                  {...register('address')}
                />
              )}
              name="address"
            />
          </View>
          <View style={{}}>
            {errors?.address && <Text>{errors?.address?.message}</Text>}
          </View>

          <View style={styles.formField_email}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="Fax Number"
                  {...register('faxNumber')}
                />
              )}
              name="faxNumber"
            />
          </View>
          <View style={{}}>
            {errors?.faxNumber && (
              <Text style={{color: 'red'}}>{errors?.faxNumber?.message}</Text>
            )}
          </View>

          <View style={styles.formField_email}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="Fax Code"
                  {...register('faxCode')}
                />
              )}
              name="faxCode"
            />
          </View>
          <View style={{}}>
            {errors?.faxCode && (
              <Text style={{color: 'red'}}>{errors?.faxCode?.message}</Text>
            )}
          </View>

          <View style={styles.formField_email}>
            <Icon
              style={styles.emailIcon}
              name="map-pin"
              type="feather"
              color="#DFA72C"
              containerStyle={{opacity: 3}}
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="Country"
                  {...register('country')}
                />
              )}
              name="country"
            />
          </View>
          <View style={{}}>
            {errors?.country && <Text>{errors?.country?.message}</Text>}
          </View>

          <View style={styles.formField_email}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="NTN"
                  {...register('ntn')}
                />
              )}
              name="ntn"
            />
          </View>
          <View style={{}}>
            {errors?.ntn && <Text>{errors?.ntn?.message}</Text>}
          </View>

          <View style={styles.formField_email}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="Zipcode"
                  {...register('zipcode')}
                />
              )}
              name="zipcode"
            />
          </View>
          <View style={{}}>
            {errors?.zipcode && (
              <Text style={{color: 'red'}}>{errors?.zipcode?.message}</Text>
            )}
          </View>

          <View style={styles.formField_email}>
            <Icon
              style={styles.emailIcon}
              name="map-pin"
              type="feather"
              color="#DFA72C"
              containerStyle={{opacity: 3}}
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.formInput_email}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="City / State"
                  {...register('city')}
                />
              )}
              name="city"
            />
          </View>
          <View style={{}}>
            {errors?.city && <Text>{errors?.city?.message}</Text>}
          </View>

          <View
            style={[
              {
                height: hp(20),

                flex: 0.1,
                backgroundColor: 'white',
                justifyContent: 'center',
                color: 'black',
                borderColor: '#979BB5',
                borderWidth: 1,
                borderRadius: 16,
                marginTop: 20,
                flexDirection: 'row',
              },
            ]}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={(styles.formInput_email, [{width: '100%'}])}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={true}
                  placeholder="About Yourself"
                  {...register('AboutYourself')}
                />
              )}
              name="AboutYourself"
            />
          </View>
          <View style={{}}>
            {errors?.AboutYourself && (
              <Text>{errors?.AboutYourself?.message}</Text>
            )}
          </View>

          <View style={{marginTop: hp(2)}}>
            <Text style={{color: '#DFA72C'}}>Upload CNIC Front Image:</Text>
          </View>
          {stateForCamera.CNICFrontViewConroller ? (
            <View
              {...console.log(
                stateForCamera.FrontCNICImage,
                'stateForCamera.FrontCNICImage',
              )}
              style={{
                marginTop: hp(2),
                height: hp(25),

                backgroundColor: '#ECECEC',
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setStateForCamera({
                    ...stateForCamera,
                    CNICFrontViewConroller: false,
                    FrontCNICImage: '',
                  });
                  setImageForFrontCNIC('');
                }}
                style={{
                  alignSelf: 'flex-end',
                  borderRadius: 78,
                  backgroundColor: '#DFA72C',
                  padding: wp(1),
                  left: wp(3),
                  // top: wp(3.5),
                  zIndex: 100,
                }}>
                <SvgXml width={wp(4)} height={wp(4)} xml={cross} />
              </TouchableOpacity>

              <Image
                source={{
                  uri: REACT_APP_API_URL + '/' + ImageForFrontCNIC,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 15,
                  // top: wp(3.5),
                  bottom: wp(2.8),
                  // resizeMode: 'contain',
                }}
              />
            </View>
          ) : (
            <View
              style={{
                marginTop: hp(2),
                // paddingVertical: hp(10),
                height: hp(25),
                backgroundColor: '#ECECEC',
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setStateForCamera({
                    ...stateForCamera,
                    setModalCameraVisibleForCNICFront: true,
                  });
                }}>
                <SvgXml style={{}} width="29" height="20" xml={AddOption} />
              </TouchableOpacity>
              <Text style={{color: '#DFA72C'}}>Add Image</Text>
            </View>
          )}
          {ImageForFrontCNIC.length < 1 && (
            <View>
              <Text>{ErrorMsgForFrontCNIC}</Text>
            </View>
          )}

          <View style={{marginTop: hp(2)}}>
            <Text style={{color: '#DFA72C'}}>Upload CNIC Back Image:</Text>
          </View>
          {stateForCamera.CNICBackViewConroller ? (
            <View
              style={{
                marginTop: hp(2),
                height: hp(25),

                backgroundColor: '#ECECEC',
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setStateForCamera({
                    ...stateForCamera,
                    CNICBackViewConroller: false,
                    BackCNICImage: '',
                  });
                  setImageforBackCNIC('');
                }}
                style={{
                  alignSelf: 'flex-end',
                  borderRadius: 78,
                  backgroundColor: '#DFA72C',
                  padding: wp(1),
                  left: wp(3),
                  // top: wp(3.5),
                  zIndex: 100,
                }}>
                <SvgXml width={wp(4)} height={wp(4)} xml={cross} />
              </TouchableOpacity>

              <Image
                source={{
                  uri: REACT_APP_API_URL + '/' + ImageforBackCNIC,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 15,
                  // top: wp(3.5),
                  bottom: wp(2.8),
                  // resizeMode: 'contain',
                }}
              />
            </View>
          ) : (
            <View
              style={{
                marginTop: hp(2),
                // paddingVertical: hp(10),
                height: hp(25),
                backgroundColor: '#ECECEC',
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setStateForCamera({
                    ...stateForCamera,
                    setModalCameraVisibleForCNICBack: true,
                  });
                }}>
                <SvgXml style={{}} width="29" height="20" xml={AddOption} />
              </TouchableOpacity>
              <Text style={{color: '#DFA72C'}}>Add Image</Text>
            </View>
          )}
          {ImageforBackCNIC.length < 1 && (
            <View>
              <Text>{ErrorMsgForBackCNIC}</Text>
            </View>
          )}

          {UserSuccessFull.length > 1 && (
            <View>
              <Text>{UserSuccessFull}</Text>
            </View>
          )}

          {setServerError.length > 1 && (
            <View>
              <Text>{ServerError}</Text>
            </View>
          )}

          <View style={styles.middleView}>
            <TouchableOpacity
              style={styles.clickBtn}
              onPress={handleSubmit(onSubmit)}
              disabled={ButtonLoader === true ? true : false}>
              {ButtonLoader ? (
                // <Text style={styles.btnSign_text}>Loading</Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 4,
                  }}>
                  <ActivityIndicator size="small" color="white" />
                </View>
              ) : (
                <Text style={styles.btnText}>Update Profile</Text>
              )}
            </TouchableOpacity>
            {/* <Button title="Submit" onPress={handleSubmit(onSubmit, onError)} /> */}
            {/* <Text style={styles.btnText}>Update Profile</Text> */}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default profile;
