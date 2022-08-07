import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Image,
} from 'react-native';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import * as yup from 'yup';
import {Formik} from 'formik';
import styles from './styles';
import {SvgXml} from 'react-native-svg';
import {logo} from '../../../assets/images/Logo';
import {linebar} from '../../../assets/images/Linebar';
import {visible_eye} from '../../../assets/images/visible_eye';
import {invisible_eye} from '../../../assets/images/invisible_eye';
import {google} from '../../../assets/images/google';
import {facebook} from '../../../assets/images/facebook';
import {backarrow} from '../../../assets/images/backarrow';
import {Button} from '../../Component/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {shape} from '../../../assets/images/Shape';
import {Login_api, socail_signup} from './../Api/Api';
import auth from '@react-native-firebase/auth';
import {PhoneNumberPicker} from '../../Component/Button/CountrryCodePicker/CountryCodePicker';
import {LoginUser} from '../../Services/APIs/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import TextInputCustom from '../../Component/TextInput/TextInput';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {LoginNumber} from '../../Redux/Actions/ActionsCreators';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
// import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
// import FBLoginView from './../Facebook/FBLogin';
// import {LoginManager, AccessToken} from 'react-native-fbsdk';

const LogIn = ({LoginNumber}) => {
  const navigation = useNavigation();
  const [mobilenumber, setMobilenumber] = useState('');
  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState('');

  const [text, onChangeText] = React.useState('');
  const [content, setContent] = useState('');
  const [hidePass, sethidePass] = useState(true);
  const [ButtonLoader, setButtonLoader] = useState(false);
  const passwordHideHandler = () => {
    sethidePass(!hidePass);
  };

  const regexTextForPassword = () => {
    let str = text;
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&_*])(?=.{8,})/;
    if (passwordRegex.test(str)) {
      setContent('');
      handleSubmiter(str);
    } else {
      if (mobilenumber == '') {
        console.log(errormsg, 'errormsg');
        // console.log('Enter Number before Getting OPT');
        setError(true);
        setErrormsg('Enter Number before Getting OPT');
        setContent(
          'Password should contains atleast 1 uppercase, 1 special character , 1 numeric and lowercase characters',
        );
      }
      setContent(
        'Password should contains atleast 1 uppercase, 1 special character , 1 numeric and lowercase characters',
      );
    }
  };

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

  const handleSubmiter = async (password: any) => {
    if (mobilenumber == '') {
      console.log(errormsg, 'errormsg');
      // console.log('Enter Number before Getting OPT');
      setError(true);
      setErrormsg('Enter Number before Getting OPT');
      return;
    }
    setButtonLoader(true);
    if (error === false) {
      let phone_no = {
        country_code: '92',
        phone: mobilenumber,
      };
      console.log(phone_no, password, 'Phone no');
      try {
        let response = await LoginUser(phone_no, password);

        if (response.status === 200) {
          console.log(
            response.data?.userData?.phone_no,
            'Response data from API of Login',
          );
          console.log(response.data.accessToken, 'Token');

          LoginNumber(response.data?.userData?.phone_no);
          let token = response.data.accessToken;
          console.log(token, 'token on Login in ');
          await AsyncStorage.setItem('api_token', token);
          let x_token = await AsyncStorage.getItem('api_token');
          navigation.navigate('MyDrawer');
        }
      } catch (e: any) {
        if (e.response.status === 409) {
          setContent('Incorrect Phone number or Password');
        } else if (e.response.status === 503) {
          setContent('Network Error');
        }
      }
      setButtonLoader(false);
    }
  };

  // const [email, setemail] = useState('');
  // const [password, setpassword] = useState('');
  // const [passwordVisibe, setpasswordVisibe] = useState(true);
  // const [loading, setloading] = useState(false);
  // const [state, setState] = useState({
  //   username: {value: '', message: 'field is required', isError: true},
  //   email: {value: '', message: '', isError: true},
  // });
  // const onPressGoogleLogin = async () => {
  //   var userInfo: any;
  //   var temp: any;
  //   GoogleSignin.configure({
  //     offlineAccess: true,
  //     webClientId:
  //       '661530475988-qqk0vro507gdu7vnsdfpkm047a821h59.apps.googleusercontent.com',
  //     scopes: ['profile', 'email'],
  //   });
  //   await setloading(true);
  //   // this._googleButton.showLoading();
  //   try {
  //     await GoogleSignin.hasPlayServices({
  //       // autoResolve: true,
  //       showPlayServicesUpdateDialog: true,
  //     });
  //     userInfo = await GoogleSignin.signIn();
  //     temp = await console.log(userInfo);
  //     // console.log('data:::', userInfo.user.email);
  //     await socail_signup(
  //       userInfo.user.givenName,
  //       userInfo.user.familyName,
  //       userInfo.user.email,
  //       userInfo.user.photo,
  //       userInfo.user.id,
  //       userInfo.idToken,
  //       'GOOGLE',
  //       navigation,
  //     );
  //   } catch (error) {
  //     console.log('GOOGLE SIGNIN ERROR', error);
  //
  //   }
  // };

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
            <Text style={styles.headingText}>Welcome to </Text>
            <Text style={styles.headingText_color}>Dhartee.pk</Text>
          </View>
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
          <View style={[styles.form]}>
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                fontSize: 16,
                color: '#555568',
                paddingBottom: 3,
              }}>
              Enter Password:
            </Text>
            {/* borderColor: '#979BB5', */}
            {/* <TextInput
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
              }}></TextInput> */}
            <View
              style={{
                width: '100%',
                borderWidth: 1,
                marginTop: hp(2),
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 16,
                borderColor: '#979BB5',
              }}>
              <TextInputCustom
                onChangeText={onChangeText}
                value={text}
                width="85%"
                marginTop={hp(0)}
                PlaceHolder="Password"
                hidePass={hidePass}
              />

              <View
                style={{
                  width: '15%',

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={passwordHideHandler}>
                  <Feather
                    name={hidePass ? 'eye-off' : 'eye'}
                    color={'#979BB5'}
                    size={18}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {content.length > 1 && (
              <View>
                <Text style={{color: 'red'}}>{content}</Text>
              </View>
            )}
          </View>
          {/* <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={
              values => {
                const {email, password} = values; //{}
                Login_api(email, password, navigation);
                // navigation.navigate('HomeNavigation');
              }
              // navigation.navigate('HomeNavigation')
            }
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email('Enter valid email')
                .required('Email is required'),
              password: yup
                .string()

                // .min(4)
                // .max(10, 'Password should not excced 10 chars.')
                .required('Password is required'),
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
                  <Text style={styles.formHeading}>
                    Phone number<Text style={{color: '#FD0707'}}>*</Text>
                  </Text>
                  <View style={styles.formField_email}>
                    <TextInput
                      value={values.email}
                      style={styles.formInput_email}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                      placeholder="Enter your phone number"
                    />
                  </View>
                  {touched.email && errors.email && (
                    <View style={styles.nameValidation}>
                      <SvgXml
                        style={{
                          marginRight: 10,
                        }}
                        width="16"
                        height="16"
                        xml={shape}
                      />

                      <Text style={styles.nameValidation_Text}>
                        {errors.email}
                      </Text>
                    </View>
                  )}
                </View>

                <View style={styles.form}>
                  <Text style={styles.formHeading}>
                    Password<Text style={{color: '#FD0707'}}>*</Text>
                  </Text>

                  <View style={styles.formField_password}>
                    <TextInput
                      value={values.password}
                      style={styles.formInput_password}
                      onChangeText={handleChange('password')}
                      placeholder="Enter your password"
                      onBlur={() => setFieldTouched('password')}
                      secureTextEntry={passwordVisibe}
                    />
                    <TouchableOpacity
                      onPress={() => setpasswordVisibe(!passwordVisibe)}>
                      <SvgXml
                        style={{
                          marginRight: 10,
                          marginTop: 15,
                        }}
                        width="24"
                        height="24"
                        xml={passwordVisibe ? invisible_eye : visible_eye}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <View style={styles.nameValidation}>
                      <SvgXml
                        style={{
                          marginRight: 10,
                        }}
                        width="16"
                        height="16"
                        xml={shape}
                      />

                      <Text style={styles.nameValidation_Text}>
                        {errors.password}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={styles.forgotBody}>
                  <TouchableOpacity
                    style={styles.btnSign_in}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.btnSign_text}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik> */}
          {/* onPress=
          {() => {
            regexTextForPassword();
          }} */}
          <View
            style={{
              width: wp(85),
              flexDirection: 'row',
              marginTop: hp(2.5),
              alignSelf: 'center',
            }}>
            <ButtonBottom
              onPress={regexTextForPassword}
              name="Sign in"
              ButtonLoader={ButtonLoader}
            />
          </View>
          <View style={styles.forgotBody}>
            <TouchableOpacity
              style={{marginHorizontal: 5}}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.footer_Text_Color}>Forget Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnBody}>
            {/* <Button
              btnStyle={styles.btnSign_in}
              onSubmit={() => login_page()}
              textStyle={styles.btnSign_text}
              text={'Sign In'}
            /> */}

            {/* <TouchableOpacity
              style={styles.btnSign_in}
              onPress={() => submit()}>
              <Text style={styles.btnSign_text}>Sign In</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.optionBody}>
            <View style={{flex: 0.45}}>
              <SvgXml
                style={{
                  alignSelf: 'center',
                  top: 10,

                  //color:'#979BB5'
                }}
                width="130"
                height="3"
                xml={linebar}
              />
            </View>
            <View style={{flex: 0.1}}>
              <Text style={styles.option_Text}>OR</Text>
            </View>
            <View style={{flex: 0.45}}>
              <SvgXml
                style={{
                  alignSelf: 'center',
                  top: 10,

                  //color:'#979BB5'
                }}
                width="130"
                height="3"
                xml={linebar}
              />
            </View>
          </View>
          {/* <View style={styles.btnBody}>
            <TouchableOpacity
              style={styles.btn_SocialMedia}
              onPress={() => onPressGoogleLogin()}>
              <SvgXml
                style={{
                  marginRight: 10,
                }}
                width="26"
                height="26"
                xml={google}
              />
              <Text style={styles.btn_SocialMedia_text}>
                Contnue with Gmail
              </Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.btnBody}>
            {/* <FBLogin
              // buttonView={<FBLoginView />}
              // ref={(fbLogin: any) => {
              //   fbLogin = fbLogin;
              // }}
              permissions={['email', 'user_friends']}
              loginBehavior={FBLoginManager.LoginBehaviors.Native}
              onLogin={async function (e: any) {
                await socail_signup(
                  e.profile.first_name,
                  e.profile.last_name,
                  e.profile.email,
                  e.profile.picture.data.url,
                  e.profile.id,
                  e.credentials.token,
                  'FACEBOOK',
                  navigation,
                );
              }}
              onLoginFound={function (e: any) {
                console.log(e);
              }}
              onLoginNotFound={function (e: any) {
                console.log(e);
              }}
              onLogout={function (e: any) {
                console.log(e);
              }}
              onCancel={function (e: any) {
                console.log(e);
              }}
              onPermissionsMissing={function (e: any) {
                console.log(e);
              }}
            /> */}
            {/* <TouchableOpacity
              // style={styles.btn_SocialMedia}
              // onPress={() => onPressFacebookLogin()}
              onPress={() => {
                <FBLoginView />;
              }}> */}
            {/* <SvgXml
                style={{
                  marginRight: 10,
                }}
                width="26"
                height="26"
                xml={facebook}
              />
              <Text style={styles.btn_SocialMedia_text}>
                Contnue with Facebook
              </Text> */}
            {/* </TouchableOpacity> */}
          </View>
          <View style={styles.footer}>
            <Text style={styles.footer_Text}>Don’t have an account? </Text>
            <TouchableOpacity
              style={{marginHorizontal: 5}}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.footer_Text_Color}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    LoginNumber: (data: any) => dispatch(LoginNumber(data)),
  };
};
export default connect(null, mapDispatchToProps)(LogIn);
