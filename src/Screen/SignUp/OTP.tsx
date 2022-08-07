import React, {useState, useEffect, useRef, useCallback} from 'react';

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
import styles from './OTPStyle';
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
import {floor} from 'react-native-reanimated';
import {Verify_Otp} from '../../Services/APIs/auth';
import {ActivityIndicator} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SendOtp} from '../../Services/APIs/auth';
const otpAuthentication = (props: any) => {
  const {PhoneNumber, handleSubmiterCallback} = props.route.params;
  console.log(PhoneNumber, 'otpAuthentication');
  const navigation = useNavigation();
  const refNum1: any = useRef();
  const refNum2: any = useRef();
  const refNum3: any = useRef();
  const refNum4: any = useRef();

  const [num1, setNum1] = useState('-');
  const [num2, setNum2] = useState('-');
  const [num3, setNum3] = useState('-');
  const [num4, setNum4] = useState('-');

  const [loading, setloading] = useState(true);
  const [success, setsuccess] = useState(false);
  const [ButtonLoader, setButtonLoader] = useState(false);
  const [text, setText] = useState('');
  const [content, setContent] = useState('');
  const [fullName, setfullName] = useState('');
  // const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [passwordVisibe, setpasswordVisibe] = useState(true);
  const [confirmPasswordVisibe, setconfirmPasswordVisibe] = useState(true);
  const [isSelected, setSelection] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [otpTimer, setOtpTimer] = useState(false);
  const regexText = () => {
    let str = num1 + num2 + num3 + num4;
    let phNumRegex = /^[0-9]{4}$/;
    if (phNumRegex.test(str)) {
      // setMobilenumber(text);
      // setPhoneCode(dailCode);
      // setError(false);
      // setErrormsg('');
      // console.log('regexText ');
      handleSubmit(str);
    } else {
      setContent('Invalid OTP');
    }
  };

  const handleSubmit = async (otp: any) => {
    let phone_no = {country_code: '92', phone: PhoneNumber};
    setButtonLoader(true);
    try {
      let response = await Verify_Otp(phone_no, otp);

      if (response.status === 200) {
        setContent('OTP verified');
        setOtpTimer(false);
        // console.log('OTP verified');
        setTimeout(() => {
          navigation.navigate('PasswordVerification', {
            PhoneNumber: PhoneNumber,
          });
        }, 400);
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        setContent('Incomplete OTP');
      } else if (err.response.status === 409) {
        setContent('Invalid OTP');
      } else {
        setContent('Server Problem');
      }
      console.log(err);
    }
    setButtonLoader(false);
  };

  const handleSubmiterForResendOTP = async () => {
    let phone_no = {
      country_code: '92',
      phone: PhoneNumber,
    };
    console.log('handleSubmiterForResendOTP');
    try {
      let response = await SendOtp(phone_no);
      //  setLoading(false);
      if (response.status === 200) {
        // setErrormsg('We have sent code to your mobile phone');
        console.log(response.data, 'response Data in OTP file');
      }
    } catch (e: any) {
      // setLoading(false);
      console.log(e.response.data.message);

      // setOpen(true);
      // setSeverity('error');
      if (e.response.status == 400) {
        console.log('Invalid phone number');
      } else if (e.response.status == 409) {
        console.log('Phone number already exist');
      } else {
        console.log('Otp could not send. Re-Enter your mobile number');
      }
    }
    setOtpTimer(true);
    setSeconds(60);
  };
  console.log(seconds, 'seconds');
  const handleTimer = React.useCallback(() => {
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
        if (seconds === 1) {
          setOtpTimer(false);
        }
      }, 1000);
    }
  }, [seconds]);

  useEffect(() => {
    if (otpTimer && seconds > 0) {
      handleTimer();
    }
  }, [seconds, otpTimer]);
  console.log(seconds, 'seconds');

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
          <View>
            <View style={styles.bodyHeading}>
              <Text style={styles.headingText_WeSent}>{`We sent an `}</Text>
              <Text style={styles.OTP}>OTP</Text>
              <Text style={styles.To}>{` to`}</Text>
            </View>
            <View style={styles.yourNumber_View}>
              <Text style={styles.yourNumber_text}>{`your number `}</Text>
              <Text style={styles.mobileNumber_text}>+92-{PhoneNumber}</Text>
            </View>
          </View>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={values => {
              // console.log('abc', values);
              const {fullName, email, password, confirmPassword} = values; //{}
              // console.log(fullName, email, password, confirmPassword);
              // const name_arr = fullName.split(' ');
              // const firstname = name_arr[0];
              // const lastname = name_arr[1];
              // console.log(firstname, email, password, lastname);
              // Signup_api(firstname, lastname, email, password, navigation);
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
                <View style={styles.form}>
                  <TextInput
                    ref={refNum1}
                    // value={num1}
                    autoFocus={true}
                    maxLength={1}
                    placeholder={num1}
                    editable={loading ? true : false}
                    style={styles.textInput_OTP}
                    keyboardType={'number-pad'}
                    onKeyPress={({nativeEvent: {key: keyValue}}) => {
                      if (keyValue === 'Backspace') {
                        setNum1('-');
                      } else if (
                        keyValue === ' ' ||
                        keyValue === ',' ||
                        keyValue === '-' ||
                        keyValue === '.'
                      ) {
                        Alert.alert('only numbers are allowed');
                        setNum1('-');
                        refNum1.current.clear();
                      } else {
                        setNum1(keyValue);
                        refNum2.current.focus();
                      }
                    }}
                  />
                  <TextInput
                    style={styles.textInput_OTP}
                    keyboardType={'number-pad'}
                    ref={refNum2}
                    maxLength={1}
                    placeholder={num2}
                    editable={loading ? true : false}
                    onKeyPress={({nativeEvent: {key: keyValue}}) => {
                      if (keyValue === 'Backspace' && num2 === '-') {
                        refNum1.current.focus();
                      } else if (
                        keyValue === 'Backspace' &&
                        num2.length === 1
                      ) {
                        setNum2('-');
                      } else if (
                        keyValue === ' ' ||
                        keyValue === ',' ||
                        keyValue === '-' ||
                        keyValue === '.'
                      ) {
                        Alert.alert('only numbers are allowed');
                        setNum2('-');
                        refNum2.current.clear();
                      } else {
                        setNum2(keyValue);
                        // console.log(num2, keyValue);
                        refNum3.current.focus();
                      }
                    }}
                  />
                  <TextInput
                    style={styles.textInput_OTP}
                    keyboardType={'number-pad'}
                    ref={refNum3}
                    maxLength={1}
                    editable={loading ? true : false}
                    autoCapitalize="none"
                    placeholder={num3}
                    onKeyPress={({nativeEvent: {key: keyValue}}) => {
                      if (keyValue === 'Backspace' && num3 === '-') {
                        refNum2.current.focus();
                      } else if (
                        keyValue === 'Backspace' &&
                        num3.length === 1
                      ) {
                        setNum3('-');
                      } else if (
                        keyValue === ' ' ||
                        keyValue === ',' ||
                        keyValue === '-' ||
                        keyValue === '.'
                      ) {
                        Alert.alert('only numbers are allowed');
                        setNum3('-');
                        refNum3.current.clear();
                      } else {
                        setNum3(keyValue);
                        // console.log(num2, keyValue);
                        refNum4.current.focus();
                      }
                    }}
                  />
                  <TextInput
                    style={styles.textInput_OTP}
                    keyboardType={'number-pad'}
                    ref={refNum4}
                    maxLength={1}
                    placeholder={num4}
                    editable={loading ? true : false}
                    onKeyPress={({nativeEvent: {key: keyValue}}) => {
                      if (keyValue === 'Backspace' && num4 === '-') {
                        refNum3.current.focus();
                      } else if (
                        keyValue === 'Backspace' &&
                        num4.length === 1
                      ) {
                        setNum4('-');
                      } else if (
                        keyValue === ' ' ||
                        keyValue === ',' ||
                        keyValue === '-' ||
                        keyValue === '.'
                      ) {
                        Alert.alert('only numbers are allowed');
                        setNum4('-');
                        refNum4.current.clear();
                      } else {
                        setNum4(keyValue);

                        // console.log(num2, keyValue);
                      }
                    }}
                  />
                </View>
                <View style={{paddingLeft: wp(10)}}>
                  <Text style={{color: 'red'}}>
                    {content.length > 1 && content}
                  </Text>
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
                {!otpTimer ? (
                  <TouchableOpacity
                    onPress={() => {
                      handleSubmiterForResendOTP();
                    }}
                    style={styles.code_not_recieved_View}>
                    <Text style={styles.code_not_recieved_TextInput}>
                      Code not recieved ?
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 20,
                    }}>
                    <Text
                      style={{
                        color: '#77838F',
                        fontFamily: 'Montserrat',
                      }}>{`Wait for ${seconds}`}</Text>
                  </View>
                )}
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default otpAuthentication;
