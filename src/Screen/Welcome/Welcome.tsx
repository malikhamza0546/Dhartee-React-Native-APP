import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {SvgXml} from 'react-native-svg';
import {logo} from '../../../assets/images/Logo';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../Component/Button/Button';

// import Home_Img from '../../assets/images/Home_Img.png' ;

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../../assets/images/splash_screen_4.png')}
      style={styles.container}>
      <View style={styles.header_View}>
        <Image
          style={styles.logo_gharbar}
          source={require('../../../assets/images/white_2.png')}
        />
      </View>

      <View style={styles.log_View}>
        <Image
          style={styles.background_img}
          source={require('../../../assets/images/Home_Img.png')}
        />
      </View>

      <View style={styles.signUp_View}>
        <View style={styles.bodyView}>
          <Text style={styles.bodyText}>Find Perfect Place for</Text>
          <Text style={styles.bodyText}> Your Dream</Text>
        </View>

        <View style={styles.middleView}>
          {/* <Button
            btnStyle={styles.clickBtn}
            onSubmit={() => navigation.navigate('SignUp')}
            textStyle={styles.btnText}
            text={'Sign Up'}
          /> */}
          <TouchableOpacity
            style={styles.clickBtn}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signTermView}>
          <Text style={styles.signDesc}>
            By signing up, I agree to Dhartee.pk
          </Text>
          <TouchableOpacity>
            <Text style={styles.termConditiontext}>Terms & Conditions.</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signInView}>
          <Text style={styles.checkSign}>Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.checkSign_Color}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
