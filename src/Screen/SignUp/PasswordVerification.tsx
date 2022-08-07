import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Image,
} from 'react-native';
import {Input} from 'react-native-elements';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import * as yup from 'yup';
import {Formik} from 'formik';
import styles from './PasswordVerificationStyles';
import CheckBox from '@react-native-community/checkbox';
import {SvgXml} from 'react-native-svg';
import {logo} from '../../../assets/images/Logo';
import {backarrow} from '../../../assets/images/backarrow';
import {useNavigation} from '@react-navigation/native';
import {invisible_eye} from '../../../assets/images/invisible_eye';
import {visible_eye} from '../../../assets/images/visible_eye';
import {shape} from '../../../assets/images/Shape';
import {linebar} from '../../../assets/images/Linebar';
import {google} from '../../../assets/images/google';
import {facebook} from '../../../assets/images/facebook';
import {Signup_api, socail_signup} from './../Api/Api';
import {Button} from '../../Component/Button/Button';
import {PhoneNumberPicker} from '../../Component/Button/CountrryCodePicker/CountryCodePicker';
import {SignUp} from '../../Services/APIs/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';
const PasswordVerification = (props: any) => {
  const {PhoneNumber} = props.route.params;
  // const PhoneNumber = '3401352763';
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  const [ButtonLoader, setButtonLoader] = useState(false);
  const [textforConfirmPassword, settextforConfirmPassword] =
    React.useState('');
  const [content, setContent] = useState('');

  const regexText = () => {
    if (text !== textforConfirmPassword) {
      setContent('Your Enter Password and Confirm Does not match');
      return;
    }
    let str = text;
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&_*])(?=.{8,})/;
    if (passwordRegex.test(str)) {
      handleSubmit(str);
    } else {
      setContent(
        'Password should contains atleast 1 uppercase, 1 special character , 1 numeric and lowercase characters',
      );
    }
  };

  const handleSubmit = async (password: any) => {
    let phone_no = {
      country_code: '92',
      phone: PhoneNumber,
    };
    console.log('Sign UP API', phone_no, password);
    setButtonLoader(true);
    try {
      console.log('Sign UP API');
      const response = await SignUp(phone_no, password);

      if (response.status == 200) {
        setContent('OTP verified token');
        let token = response.data.accessToken;
        AsyncStorage.setItem('api_token', token);
        navigation.navigate('MyDrawer');
      }
    } catch (e: any) {
      console.log(e, ' else Body Error');

      if (e.response.status == 400) {
        setContent(
          'Password should contains atleast 1 uppercase, 1 special character , 1 numeric and lowercase characters',
        );
      } else if (e.response.status == 409) {
        setContent('User already exist');
      }
    }
    setButtonLoader(false);
  };
  return (
    <ImageBackground
      source={require('../../../assets/images/splash_screen_4.png')}
      style={styles.container}>
      <View style={styles.headerView}>
        <View style={{flex: 0.2}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml
              style={styles.backArrow_img}
              width="50"
              height="50"
              xml={backarrow}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.8}}>
          <Image
            style={styles.logo_gharbar}
            source={require('../../../assets/images/white_1.png')}
          />
        </View>
      </View>
      <View style={styles.bodyView}>
        <ScrollView>
          <View style={styles.bodyHeading}>
            <Text style={styles.headingText}>Welcome To </Text>
            <Text style={[styles.headingText, {color: '#DFA72C'}]}>
              Dhartee.pk
            </Text>
          </View>

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={values => {
              const {fullName, email, password, confirmPassword} = values;
            }}
            validationSchema={yup.object().shape({
              fullName: yup
                .string()
                .matches(/(\w.+\s).+/, 'Please enter full name')
                .required('Full number is required'),
              // .firstletter(),
              email: yup
                .string()
                .email('Enter valid email')
                .required('Email is required'),
              password: yup
                .string()
                .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
                .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
                .matches(/\d/, 'Password must have a number')
                .matches(
                  /[!@#$%^&*()\-_"=+{}; :,<.>]/,
                  'Password must have a special character',
                )
                .min(8, ({min}) => `Password must be atleast ${min} characters`)
                .required('Password is required'),
              confirmPassword: yup
                .string()
                .oneOf([yup.ref('password')], 'Password does not match')
                .required('Confirm password is required'),
            })}>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
            }) => (
              <View>
                <View style={[styles.form]}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat',
                      fontWeight: 'normal',
                      fontSize: 16,
                      color: '#77838F',
                      paddingBottom: 3,
                    }}>
                    Enter Password:
                  </Text>
                  <TextInput
                    secureTextEntry={true}
                    onChangeText={onChangeText}
                    value={text}
                    style={{
                      paddingLeft: 15,
                      fontSize: 17,
                      width: '100%',
                      borderWidth: 1,
                      borderRadius: 16,
                      borderColor: '#979BB5',
                      color: 'black',
                    }}></TextInput>
                  {/* {content.length > 1 && (
                    <View>
                      <Text style={{color: 'red'}}>{content}</Text>
                    </View>
                  )} */}
                </View>
                {/* confitm Password */}
                <View style={[styles.form]}>
                  <Text
                    style={{
                      fontFamily: 'Montserrat',
                      fontWeight: 'normal',
                      fontSize: 16,
                      color: '#77838F',
                      paddingBottom: 3,
                    }}>
                    Confirm Password:
                  </Text>
                  <TextInput
                    secureTextEntry={true}
                    onChangeText={settextforConfirmPassword}
                    value={textforConfirmPassword}
                    style={{
                      paddingLeft: 15,
                      fontSize: 17,
                      width: '100%',
                      borderWidth: 1,
                      borderRadius: 16,
                      borderColor: '#979BB5',
                      color: 'black',
                    }}></TextInput>
                  {content.length > 1 && (
                    <View>
                      <Text style={{color: 'red'}}>{content}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.btnBody}>
                  <TouchableOpacity
                    style={styles.btnSign_in}
                    onPress={() => regexText()}
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
                      <Text style={styles.btnSign_text}>Continue</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default PasswordVerification;
