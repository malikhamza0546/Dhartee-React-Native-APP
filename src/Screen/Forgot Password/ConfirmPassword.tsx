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
import styles from './ConfirmPasswordStyles';
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
import {ResetPassword} from '../../Services/APIs/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
// import FBLoginView from './../Facebook/FBLogin';
// import {LoginManager, AccessToken} from 'react-native-fbsdk';

const ConfirmPassword = (props: any) => {
  const {PhoneNumber} = props.route.params;
  const navigation = useNavigation();
  const [ButtonLoader, setButtonLoader] = useState(false);
  const [textForPassword, onChangeTextForPassword] = React.useState('');
  const [text, onChangeText] = React.useState('');
  const [content, setContent] = useState('');
  const [contenttextForPassword, setContenttextForPassword] = useState('');

  const regexTextForPassword = () => {
    let str1 = textForPassword;
    let str = text;
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&_*])(?=.{8,})/;
    if (passwordRegex.test(str) && passwordRegex.test(str1)) {
      if (str1 === str) {
        setContent('');
        handleSubmiter();
      }
      if (str1 !== str) {
        setContent('Your Both Password DoesnotMatch ');
        setContenttextForPassword('');
      }
    } else {
      if (!passwordRegex.test(str)) {
        // console.log('Enter Number before Getting OPT');
        setContent(
          'Password should contains atleast 1 uppercase, 1 special character , 1 numeric and lowercase characters',
        );
      }
      if (!passwordRegex.test(str1)) {
        setContenttextForPassword(
          'Password should contains atleast 1 uppercase, 1 special character , 1 numeric and lowercase characters',
        );
      }
    }
  };

  const handleSubmiter = async () => {
    let phone_no = {
      country_code: '92',
      phone: PhoneNumber,
    };

    setContenttextForPassword('');
    setContent('');
    try {
      setButtonLoader(true);
      const response = await ResetPassword(phone_no, textForPassword, text);

      if (response.status == 200) {
        setContent('Password Changed Successfully');
        console.log('handleSubmiter');
        //   let token = response.data.accessToken;
        //   localStorage.setItem("api_token", token);
        navigation.navigate('Login');
      }
    } catch (e: any) {
      if (e.response.status == 400) {
        setContent(
          'Password should contains atleast 1 uppercase, 1 special character , 1 numeric and lowercase characters',
        );
      } else if (e.response.status == 409) {
        setContent(
          'Password should contains atleast 1 uppercase, 1 special character , 1 numeric and lowercase characters',
        );
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
            <Text style={styles.headingText}>Welcome to </Text>
            <Text style={styles.headingText_color}>Dhartee.pk</Text>
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
            <TextInput
              secureTextEntry={false}
              onChangeText={onChangeTextForPassword}
              value={textForPassword}
              style={{
                paddingLeft: 15,
                fontSize: 17,
                width: '100%',
                borderWidth: 1,
                borderRadius: 16,
                borderColor: '#979BB5',
                color: 'black',
              }}></TextInput>
            {contenttextForPassword.length > 1 && (
              <View>
                <Text style={{color: 'red'}}>{contenttextForPassword}</Text>
              </View>
            )}
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
              Confirm Password:
            </Text>
            <TextInput
              secureTextEntry={false}
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
            {content.length > 1 && (
              <View>
                <Text style={{color: 'red'}}>{content}</Text>
              </View>
            )}
          </View>

          {/* <View style={styles.btnBody}>
            <TouchableOpacity
              style={styles.btnSign_in}
              //  regexText()
              onPress={() => {
                regexTextForPassword();
              }}>r
              <Text style={styles.btnSign_text}>Continue</Text>
            </TouchableOpacity>
          </View> */}
          <View
            style={{
              width: wp(85),
              flexDirection: 'row',
              marginTop: hp(2.5),
              alignSelf: 'center',
            }}>
            <ButtonBottom
              onPress={regexTextForPassword}
              name="Continue"
              ButtonLoader={ButtonLoader}
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ConfirmPassword;
