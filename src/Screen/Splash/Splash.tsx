import React, {useEffect, useState} from 'react';
import {Image, Dimensions, View, ImageBackground} from 'react-native';
import Welcome from '../Welcome/Welcome';
import {SvgXml} from 'react-native-svg';
import {gharbar_logo} from '../../../assets/images/ghaarbar_logo';
import {badshahi_masjid} from '../../../assets/images/badshahi_mosque';
import {faisal_masjid} from '../../../assets/images/faisal_mosque';
import {minar} from '../../../assets/images/minar';
import {monument} from '../../../assets/images/monument';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Splash = () => {
  const navigation = useNavigation();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const performTimeConsumingTask = async () => {
      setisLoading(false);
      setTimeout(() => {
        navigation.navigate('Welcome');
      }, 2000);
    };
    performTimeConsumingTask();
  });
  return (
    <ImageBackground
      source={require('../../../assets/images/splash_screen_bg.png')}
      style={styles.container}>
      <View style={styles.ghaarbar_logo}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/dhartee_splash_logo.png')}
        />
        <View style={styles.design_logo}>
          <View style={styles.design_momument_container}>
            <SvgXml
              // style={styles.logo}
              width="125"
              height="166"
              xml={monument}
            />
          </View>
          <View style={styles.design_badshahi_container}>
            <SvgXml
              // style={styles.logo}
              width="160"
              height="145"
              xml={badshahi_masjid}
            />
          </View>
          <View style={styles.design_minar_container}>
            <SvgXml
              style={{marginHorizontal: 7}}
              width="60"
              height="120"
              xml={minar}
            />
          </View>
          <View style={styles.design_faisal_container}>
            <SvgXml
              // style={{marginHorizontal: 26}}
              width="118"
              height="140"
              xml={faisal_masjid}
            />
          </View>
        </View>
      </View>
      {/* <View style={styles.design_logo}>
        <View style={styles.design_momument_container}>
          <SvgXml
            // style={styles.logo}
            width="118"
            height="160"
            xml={monument}
          />
        </View>
        <View style={styles.design_badshahi_container}>
          <SvgXml
            // style={styles.logo}
            width="160"
            height="145"
            xml={badshahi_masjid}
          />
        </View>
        <View style={styles.design_minar_container}>
          <SvgXml
            style={{marginHorizontal: 7}}
            width="60"
            height="120"
            xml={minar}
          />
        </View>
        <View style={styles.design_faisal_container}>
          <SvgXml
            // style={{marginHorizontal: 26}}
            width="118"
            height="140"
            xml={faisal_masjid}
          />
        </View>
      </View> */}
      {/* <StatusBar backgroundColor="#932C2C"/> */}
    </ImageBackground>
  );
};
export default Splash;
