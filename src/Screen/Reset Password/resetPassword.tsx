import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {SvgXml} from 'react-native-svg';
import {logo} from '../../../assets/images/Logo';
import {backarrow} from '../../../assets/images/backarrow';
import {shape} from '../../../assets/images/Shape';
import {lock} from '../../../assets/images/lock';
import {invisible_eye} from '../../../assets/images/invisible_eye';
import {visible_eye} from '../../../assets/images/visible_eye';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';
import {Formik} from 'formik';
import Modal from 'react-native-modal';

const resetPassword = () => {
  const navigation = useNavigation();
  const [passwordVisibe, setpasswordVisibe] = useState(true);
  const [confirmPasswordVisibe, setconfirmPasswordVisibe] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground
      source={require('../../../assets/images/splash_screen_bg.png')}
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
          <SvgXml
            style={styles.logo_gharbar}
            width="50"
            height="61"
            xml={logo}
          />
        </View>
      </View>
      <View style={styles.bodyView}>
        <ScrollView>
          <View style={styles.bodyHeading}>
            <Text style={styles.headingText}>Create new password </Text>
          </View>

          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            onSubmit={values => {
              setModalVisible(!isModalVisible);
            }}
            validationSchema={yup.object().shape({
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
                  <Text style={styles.formHeading}>
                    Enter new Password<Text style={{color: '#FD0707'}}>*</Text>
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
                <View style={styles.passwordDesc_View}>
                  <Text style={styles.passwordDesc_Text}>
                    Password must contain atleast 8 characters and include
                    atleast
                  </Text>
                  <Text style={styles.passwordDesc_Text}>
                    one number, special character, upper case and lower case
                    letter.
                  </Text>
                  <Text style={styles.passwordDesc_Text}></Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.formHeading}>
                    {' '}
                    Confirm new Password
                    <Text style={{color: '#FD0707'}}>*</Text>
                  </Text>

                  <View style={styles.formField_password}>
                    <TextInput
                      value={values.confirmPassword}
                      style={styles.formInput_password}
                      onChangeText={handleChange('confirmPassword')}
                      placeholder="Enter above password here"
                      onBlur={() => setFieldTouched('confirmPassword')}
                      secureTextEntry={confirmPasswordVisibe}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        setconfirmPasswordVisibe(!confirmPasswordVisibe)
                      }>
                      <SvgXml
                        style={{
                          marginRight: 10,
                          marginTop: 15,
                        }}
                        width="24"
                        height="24"
                        xml={
                          confirmPasswordVisibe ? invisible_eye : visible_eye
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {touched.confirmPassword && errors.confirmPassword && (
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
                      {errors.confirmPassword}
                    </Text>
                  </View>
                )}
                <View style={styles.btnBody}>
                  <TouchableOpacity
                    style={styles.btn_recoverPassword}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.btn_recoverPassword_text}>
                      Reset Password
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>

        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalImgcontainer}>
              <SvgXml
                style={{
                  marginRight: 10,
                }}
                width="91"
                height="129"
                xml={lock}
              />
            </View>
            <View style={styles.modalPassword}>
              <Text style={styles.modalPassword_txt1}>Password Changed!</Text>
            </View>
            <View style={styles.modalPassword1}>
              <Text style={styles.modalPassword_txt2}>
                Your password has been changed successfully.
              </Text>
            </View>
            <View style={styles.modalPassword3}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.modalPassword_txt3}>Return to login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};
export default resetPassword;
