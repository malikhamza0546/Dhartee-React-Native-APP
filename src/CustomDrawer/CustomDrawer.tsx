import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
// import {blackcross} from '../../assets/images/blackcross';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
// import {Logout_api, Profile_api, OneSignalUserid_api} from '../Screen/Api/Api';

import {DrawerActions} from '@react-navigation/native';
// import OneSignal from 'react-native-onesignal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon, Avatar} from 'react-native-elements';
// import styles from '../Sidebar/styles';
// import {Imagebase_url} from '../../env_variable';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

const CustomDrawer = (props: any) => {
  const navigation: any = useNavigation();
  const [username, setusername] = useState('');
  const [photo, setphoto] = useState('');
  const [onesignal_scheduleid, setonesignal_scheduleid] = useState();
  const [defaultImage, setdefaultImage] = useState(
    'http://192.168.18.62:5000/uploads/profileImages/avatar.png',
  );

  //   useEffect(() => {
  //     const unsubscribe = navigation.addListener('focus', async () => {
  //       await AsyncStorage.getItem('username').then((res: any) => {
  //         var data = JSON.parse(res);
  //         // console.log('Data :', data);
  //         setusername(data);
  //         // setimage(data.data.data[0].image);
  //         // console.log(setimage(data.user.photo));
  //       });

  //       await AsyncStorage.getItem('image').then((res1: any) => {
  //         var image_data = JSON.parse(res1);
  //         // rconsole.log("Data :", image_data);
  //         setphoto(image_data);
  //         // console.log('shjds :', photo);
  //       });
  //     });
  //     // setimage(data.data.data[0].image);
  //     // console.log(setimage(data.user.photo));
  //     return unsubscribe;
  //   }, [navigation]);
  //   // useEffect(() => {
  //   //   // if(photo.length > 0){
  //   //   //   setphoto()
  //   //   // }
  //   //   console.log(typeof photo);
  //   //   console.log('photo from drawer', photo);
  //   // }, [photo]);

  return (
    <DrawerContentScrollView
      style={{
        flexDirection: 'row',
        marginBottom: hp('1%'),
        marginTop: hp('1%'),
      }}
      showsVerticalScrollIndicator={false}>
      <View>
        <Text>Hello World</Text>
      </View>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
