import React from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {countryList} from '../../config/globals';
// import {useNavigation} from '@react-navigation/native';

//=========================== Login_api =======================
export const Login_api = (
  email_id: string,
  password_id: string,
  navigation: any,
) => {
  const config = {
    method: 'post',
    url: 'https://api-live.gharbaar.com/api/auth/login',
    headers: {
      Accept: 'application/json',
    },
    data: {
      email: 'Asimshah@gmail.com',
      password: 'Asim@123',
      provider: 'blogger',
    },
  };
  axios(config)
    .then(function (response) {
      AsyncStorage.setItem('profile', JSON.stringify(response.data));
      Alert.alert('Login Successfully...');
      navigation.navigate('HomeNavigation');
    })
    .catch(function (error) {
      console.log(email_id, password_id);
      console.log(error);
      //     // console.log('saim');
      //     Alert.alert('Email and Password is incorrect');
    });
};
//========================================================

//============================= Signup_api ===========================
// export const Signup_api = (
//   firstname: string,
//   lastname: string,
//   email_id: string,
//   password_id: string,
//   navigation: any,
// ) => {
//   const signupConfig = {
//     method: 'post',
//     url: 'https://api-live.gharbaar.com/api/auth/signup',
//     headers: {
//       Accept: 'application/json',
//     },
//     data: {
//       dob: '',
//       isNewsletter: true,
//       mobile_number: '',
//       phone_number: '',
//       first_name: firstname,
//       email: email_id,
//       password: password_id,
//       last_name: lastname,
//     },
//   };
//   axios(signupConfig)
//     .then(function (response) {
//       console.log(response);
//       Alert.alert('Signup successfully...');
//       navigation.navigate('Login');
//       //   value = response;
//     })
//     .catch(function (error) {
//       console.log(error);
//       Alert.alert('Account not created');
//     });
//   //   return value;
// };
//========================================================

//======================== Update_Profile ================================
export const Update_Profile = (
  // token: string,
  email_id: any,
  firstname: any,
  // last_name: string,
  mobilenumber: any,
  country_id: string,
  city_id: any,
  // dob_id: any,
  address_id: string,
  // image: string,
  navigation: any,
) => {
  const profileConfig = {
    method: 'post',
    url: 'https://api-live.gharbaar.com/api/auth/update-profile',
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBmZWIwNWUwMGMzYjRhNzY4YjQ4MWQxNjIxMjczNTU0N2MyMzljNWYyZDdmMjIyOWM1MTJkNzEyZjg5ZDI1NmQzMTkzNDEyM2M2ZDUxY2I2In0.eyJhdWQiOiIxIiwianRpIjoiMGZlYjA1ZTAwYzNiNGE3NjhiNDgxZDE2MjEyNzM1NTQ3YzIzOWM1ZjJkN2YyMjI5YzUxMmQ3MTJmODlkMjU2ZDMxOTM0MTIzYzZkNTFjYjYiLCJpYXQiOjE2MjYyNjUzMzAsIm5iZiI6MTYyNjI2NTMzMCwiZXhwIjoxNjU3ODAxMzMwLCJzdWIiOiIyMjkzIiwic2NvcGVzIjpbXX0.BhP8ufnR--2p8kH_mINKQqqb9A7cxGOd8DhWXV2B35sRHdZI6DKCTgOj2zrlI_ZYEem7ONsrCX968nsKrVP9_x_NLL0Dx9xI7vD9AKqIHvBxuP7fPdD1D1_p0Ci0xiEjvCOB0c929yVellJonCG7MxF1dXobbviBxAsr-_19JBoEoP5GrqNdKfpkoRf6Zc2m5BB9DHoujG-CWjnh0fbafQtgrwQH_Nayah-T8WBx0zzqPvtOIoiuzRB6Gqmd2h2XooEfGk5PHxbIQBxeI3GHqOsAVuDwBbdIb0uloKlDRqrvyheRkYeEbNNtLA3KwOE2Zc8J7mansko3lplwoi4OABcT9fdCivJwc1AXkqpufimkrRUACZAjHn15nzPTUM5VtMBkm-aVxFWJPcuhFK-cwtavXxnnS-_eJNvKEoIBtyTbgv8x4FOnczLp2WYJci2aoPsarUW-skSQzmBEl78RL7yhGM7V9YIY32RGrl5WqDeAq2iEKpSgJoV9ovrlqql-tCoAy6tbpr2c6L2KzUZ6EQta45ACC4y5yONTwWiiZ3wLpMN_KtCaVHuYf3BMxiNJ-FBLOzkzcsU3Qch8urV4PQ0OzUcxtsaoN_OP-92Dk85lj9kqPEubbL5lx904ut2W8xoJLA3ZK0ziFXiJ6wdEy8X0f6qjmJAeK-Y6DtzHeEE',
    },
    data: {
      // id: '2393',
      // email: email_id,
      first_name: firstname,
      // last_name: 'last_name',
      // phone_number: '0511234555',
      mobile_number: mobilenumber,
      // temp_id: '11',
      city: city_id,
      // dob: dob_id,
      // address: address_id,
      // image: lastname,
    },
  };
  axios(profileConfig)
    .then(function (response) {
      console.log(response);
      Alert.alert('Profile successfully updated....');
      console.log(JSON.stringify(response.data));
      // navigation.navigate('HomeNavigation');
      //   value = response;
    })
    .catch(function (error) {
      console.log(error);
      console.log(
        // email_id,
        firstname,
        mobilenumber,
        // country_id,
        city_id,
        // dob_id,
        // address_id,
      );
      Alert.alert('Profile not updated');
    });
};
//========================================================

//=========================== socail_signup =======================
export const socail_signup = (
  firstname: any,
  lastname: any,
  email_id: any,
  photoUrl: any,
  id: any,
  authtoken: any,
  provider: any,
  navigation: any,
) => {
  var data = new FormData();
  data.append('firstName', firstname);
  data.append('lastName', lastname);
  data.append('authToken', authtoken);
  data.append('email', email_id);
  data.append('photoUrl', photoUrl);
  data.append('provider', provider);

  var config = {
    method: 'post',
    url: 'https://api-live.gharbaar.com/api/auth/socailSignup',
    headers: {
      Accept: 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response);
      AsyncStorage.setItem('profile', JSON.stringify(response.data));
      Alert.alert('Signup Successfully...');
      navigation.navigate('HomeNavigation');
      //   value = response;
    })
    .catch(function (error) {
      console.log(error);
      Alert.alert('Signup not Create');
    });
  // var data1 = {
  //   first_name: firstname,
  //   last_name: lastname,
  //   email: email_id,
  //   photoUrl: photoUrl,
  //   id: id,
  //   authToken: authtoken,
  //   provider: provider,
  // };
  // console.log('DATA :', data1);
  //   return value;
};
//========================================================

// export const request = Axios.create({
//   headers: {
//     app_platform: 'Mobile',
//     app_version: 1,
//     // Authorization:"Token b1028977e412f7e23fd4a56ad97f58c97e5caba6"
//   },
// });

// export async function apiPost(endpoint: any, data: any) {
//   try {
//     console.log('apiPost :: calling ::', `${endpoint}`, 'with data', data);
//     let res = await request.post(endpoint, data);
//     if (res) {
//       console.log(endpoint, '---res---:', res);
//       return res;
//     }
//   } catch (error) {
//     console.log('API POST ERROR endpoint:', endpoint, ' || error:', error);
//     return APIErrorHandler(error);
//   }
// }

// var config = {
//   method: 'post',
//   url: 'https://api-live.gharbaar.com/api/auth/update-profile',
//   headers: {
//     'Accept': 'application/json',
//     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE3ZGIxZjY5ODE0YjEyODdmNTc1YTI5Yjk1Y2NkYzc2NWM0NzMyZDEzZTIxMjUxNWQwMmRlNzY4MTNmNGE1NjgzZTVmMzg3NDY5Mjc5NDIxIn0.eyJhdWQiOiIxIiwianRpIjoiYTdkYjFmNjk4MTRiMTI4N2Y1NzVhMjliOTVjY2RjNzY1YzQ3MzJkMTNlMjEyNTE1ZDAyZGU3NjgxM2Y0YTU2ODNlNWYzODc0NjkyNzk0MjEiLCJpYXQiOjE1NzU3MDA0ODIsIm5iZiI6MTU3NTcwMDQ4MiwiZXhwIjoxNjA3MzIyODgyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Cm8hWWGP4pbL3xRUDQFXXTvAhYacuSEEJFzllAaMXw25NnGgQ4oskHsP-topRBRGg-RChvw9Bm3W3D75q73uwmVLXQE4N6ETjLdu8EF8P_COIuGyzvEZntrKjbb0yISzXV3YV6XK5D2DjYuS_wxRGkdul73OI85beXV79__eQDkwetmvr4wNJF6Fx8xagsT11kHmHjX_nWgavnANho81blXmziC27DOTY8ni4jq1-rA6X4U3_aGWDah9g0-Qg5Xj4to5zibsjO0NhFVO58t32rrkQiQTNOQnHW4E_3n0mGIh2TqnZrIGNC7hs0Wv3spdUWxuaWmAqVtdjNfNsnxj8vHX1XgluvnTonKiYgHnk-zSvZZurTRVBon3aOC-q5b-FjBc9oua3TOJxuWqVPQsGT5nIJ5JFYjugNM-3fmulNE8Rtb49yhNC8eHCRnNYqtX2CIRcAh9koqJp2zhH-BWDdbI38-ZrWgORDsUF0WCKhZNsikOX8wTpqnMWMEjESdjegyfAtNlOQoqxQt2VqX5NgsYDEtwe_dLmG0zctGQYhh9TJNPcKI_wVQB2KqxCSbQBFBJo6N5AHXYwp3Llwr9dn_2uiaQYs8R2yvMD4ztntSjbsFxHHWciOuZ5Cpk_PjMGWa5dYvh_9S5lhBVPgNfoqoU8WRJwkGBapgZttTuI5g',

//   },

// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
