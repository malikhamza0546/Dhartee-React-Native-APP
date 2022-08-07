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
import styles from './styles';
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
// import {Signup_api, socail_signup} from './../Api/Api';
import {Button} from '../../Component/Button/Button';
import {PhoneNumberPicker} from '../../Component/Button/CountrryCodePicker/CountryCodePicker';
import {SendOtp} from '../../Services/APIs/auth';
import {ActivityIndicator} from 'react-native';
const signUp = () => {
  const navigation = useNavigation();
  const [mobilenumber, setMobilenumber] = useState('');
  const [error, setError] = useState(false);
  const [ButtonLoader, setButtonLoader] = useState(false);
  const [content, setContent] = useState('');
  const [errormsg, setErrormsg] = useState('');

  const regexText = (dailCode: any, text: any) => {
    let phNumRegex = /^[0-9]{10}$/;
    if (phNumRegex.test(text)) {
      setMobilenumber(text);
      // setPhoneCode(dailCode);
      setError(false);
      setErrormsg('');
      return;
    } else {
      setErrormsg('Invalid number');
      setError(true);
      return;
    }
  };

  const handleSubmiter = async () => {
    if (mobilenumber == '') {
      console.log(errormsg, 'errormsg');
      // console.log('Enter Number before Getting OPT');
      setError(true);
      setErrormsg('Enter Number before Getting OPT');
      return;
    }

    if (error === false) {
      let phone_no = {
        country_code: '92',
        phone: mobilenumber,
      };
      setButtonLoader(true);
      try {
        let response = await SendOtp(phone_no);
        //  setLoading(false);
        if (response.status === 200) {
          setErrormsg('We have sent code to your mobile phone');

          setTimeout(() => {
            navigation.navigate('otpAuthentication', {
              PhoneNumber: mobilenumber,
              handleSubmiterCallback: () => {
                handleSubmiter();
              },
            });
          }, 300);
        }
      } catch (e: any) {
        // setLoading(false);
        setErrormsg(e.response.data.message);

        // setOpen(true);
        // setSeverity('error');
        if (e.response.status == 400) {
          setErrormsg('Invalid phone number');
        } else if (e.response.status == 409) {
          setErrormsg('Phone number already exist');
        } else {
          setErrormsg('Otp could not send. Re-Enter your mobile number');
        }
      }
      setButtonLoader(false);
    }
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
                  <PhoneNumberPicker
                    onChange={(country: any, text: any) => {
                      regexText(country.dial_code, text);

                      // setpassword(text);
                      // console.log(country.dial_code, text);
                    }}
                    isError={error}
                    errorMsg={errormsg}
                  />
                </View>
                <View style={styles.btnBody}>
                  <TouchableOpacity
                    style={styles.btnSign_in}
                    onPress={() => {
                      handleSubmiter();
                    }}
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
export default signUp;
