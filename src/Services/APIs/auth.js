import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// let url = "https://dhartee-backend.herokuapp.com";
// let local_url = "http://192.168.18.135:8000";
// let ngrok_url = "https://a70b-101-50-109-1.ap.ngrok.io";
// let url = "http://3.73.98.144:8001";
// const url = ;
// export const REACT_APP_API_URL = 'http://3.68.70.27';
export const REACT_APP_API_URL = 'http://3.73.178.50';
export const SendOtp = phone_no => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${REACT_APP_API_URL}/users/sendotp`,
      data: {
        phone_no: phone_no,
      },
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const Verify_Otp = (phone_no, otp) => {
  console.log('Verify_OTP');
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${REACT_APP_API_URL}/users/verifyotp`,
      data: {
        phone_no: phone_no,
        otp: otp,
      },
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
export const SignUp = (phone_no, password) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${REACT_APP_API_URL}/users/signup`,
      data: {
        phone_no,
        password,
      },
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const LoginUser = (phone_no, password) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${REACT_APP_API_URL}/users/login`,
      data: {
        phone_no,
        password,
      },
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

// Reset Password

export const SendResetOtp = phone_no => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${REACT_APP_API_URL}/users/senduserotp`,
      data: {
        phone_no: phone_no,
      },
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const VerifyResetOtp = (phone_no, otp) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${REACT_APP_API_URL}/users/verifyuserotp`,
      data: {
        phone_no: phone_no,
        otp: otp,
      },
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ResetPassword = (phone_no, newPwd, cnfrmPwd) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${REACT_APP_API_URL}/users/forgotpwd`,
      data: {
        phone_no: phone_no,
        newPwd,
        cnfrmPwd,
      },
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const GetUser = async () => {
  const token = await AsyncStorage.getItem('api_token');
  console.log(token, 'token');
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${REACT_APP_API_URL}/users/getuser`,
      headers: {
        'x-access-token': token,
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => resolve(res))
      .catch(err => {
        // console.log("error", err);
        if (err.code === 'ERR_NETWORK') {
          // reject(err);
          // console.log("timeout error");
          return 'timeout';
        }
        reject(err);
      });
  });
};

export const UpdateUser = async data => {
  const token = await AsyncStorage.getItem('api_token');
  console.log(data, 'data in Update User');
  console.log(token, 'token in Update User');
  return new Promise((resolve, reject) => {
    axios({
      method: 'put',
      url: `${REACT_APP_API_URL}/users/profile`,
      headers: {
        'x-access-token': token,
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then(res => {
        console.log(res, 'res in Update User');
        resolve(res);
      })
      .catch(err => {
        console.log(err, 'err in Update User');
        reject(err);
      });
  });
};

export const UploadImage = async formData => {
  const token = await AsyncStorage.getItem('api_token');
  console.log(token, 'token');
  // return new Promise((resolve, reject) => {
  var formdata = new FormData();
  formdata.append('img', formData);
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  return fetch(`${REACT_APP_API_URL}/users/justImg`, requestOptions);
  // .then(response => response.json())
  // .then(result => console.log('result::', result))
  // .catch(error => console.log('error', error));

  // axios({
  //   method: 'post',
  //   url: `${REACT_APP_API_URL}/users/justImg`,
  //   headers: {
  //     'x-access-token': token,
  //     Authorization: `Bearer ${token}`,
  //   },
  //   data: formData,
  // })
  //   .then(res => resolve(res))
  //   .catch(err => reject(err));
  // });
};

export const UploadVideo = async formData => {
  const token = await AsyncStorage.getItem('api_token');
  console.log(token, 'token in Upload Video');
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${REACT_APP_API_URL}/listings/justvideo`,
      headers: {
        'x-access-token': token,
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const UploadImageForCameraImplemetation = async formData => {
  const token = await AsyncStorage.getItem('api_token');
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${REACT_APP_API_URL}/users/justImg`,
      headers: {
        'x-access-token': token,
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

////LisTingFlow

export const createListingforSale = async listingData => {
  const token = await AsyncStorage.getItem('api_token');
  console.log(token, 'token');
  return new Promise((resolve, reject) => {
    axios({
      url: `${REACT_APP_API_URL}/listings/salelisting`,
      method: 'post',
      headers: {
        'x-access-token': token,
        Authorization: `Bearer ${token}`,
      },
      data: listingData,
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const createListingforRent = async listingData => {
  const token = await AsyncStorage.getItem('api_token');
  console.log(token, 'token');
  return new Promise((resolve, reject) => {
    axios({
      url: `${REACT_APP_API_URL}/listings/rentlisting`,
      method: 'post',
      headers: {
        'x-access-token': token,
        Authorization: `Bearer ${token}`,
      },
      data: listingData,
    })
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const GetAllListing = async () => {
  const token = await AsyncStorage.getItem('api_token');

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${REACT_APP_API_URL}/listings/getalllistings`,
      headers: {
        'x-access-token': token,
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err, 'err in Update User');
        reject(err);
      });
  });
};
