import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, Text} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import Welcome from './Welcome/Welcome';
import LogIn from './LogIn/logIn';
import SignUp from './SignUp/signUp';
import otpAuthentication from './SignUp/OTP';
import PasswordVerification from './SignUp/PasswordVerification';
import Splash from './Splash/Splash';
import PhoneNumber from './Forgot Password/PhoneNumber';
import resetPassword from './Reset Password/resetPassword';
import {HomeNavigation} from './HomeNavigator/HomeNavigator';
import profile from './Profile/profile';
import buy from './../Screen/Buy/buy';
import rent from './../Screen/Rent/rent';
import home from './../Screen/HomeScreen/homeScreen';
import invest from './../Screen/Invest/invest';
import property from './../Screen/Property/property';
import PropertyTypePriceMonthly from './PropertyTypePriceMonthly/PropertyTypePriceMonthly';
import FiltersAccordain from './FiltersAccordain/FiltersAccordain';
import Preview from './Preview/Preview';
import Location from './Location/Location';
import UploadFoam from './UploadFoam/UploadFoam';
import PropertyDetails from './PropertyDetails/PropertyDetails';
import ManagePassword from './ManagePasswords/ManagePassword';
import CustomDrawer from '../CustomDrawer/CustomDrawer';
import MapDirection from './MapDirection/MapDirection';
import ContactUs from './ContactUs/ContactUs';
import DrawerNavigation from './Sidebar/DrawerNavigation';
import Guide from './Guide/Guide';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import CameraImplmentation from '../Component/Button/CameraModule/CameraImplmentation';
import StickerImplmentation from '../Component/Button/CameraModule/StickerImplmentation';
import PropertyDeatilsForCards from './PropertyDetailsForCards/PropertyDeatilsForCards';
const Stack = createStackNavigator();
// import {store} from '../Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import OtpAuthenticationForgetPassword from './Forgot Password/OtpAuthenticationForgetPassword';
import ConfirmPassword from './Forgot Password/ConfirmPassword';
import configureStore from '../Redux/store';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyDrawer"
            component={DrawerNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CameraImplmentation"
            component={CameraImplmentation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="StickerImplmentation"
            component={StickerImplmentation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LogIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="otpAuthentication"
            component={otpAuthentication}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PasswordVerification"
            component={PasswordVerification}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HomeNavigation"
            component={HomeNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Property"
            component={property}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Location"
            component={Location}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PropertyTypePriceMonthly"
            component={PropertyTypePriceMonthly}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FiltersAccordain"
            component={FiltersAccordain}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Preview"
            component={Preview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UploadFoam"
            component={UploadFoam}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PropertyDetails"
            component={PropertyDetails}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PropertyDeatilsForCards"
            component={PropertyDeatilsForCards}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MapDirection"
            component={MapDirection}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Guide"
            component={Guide}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={PhoneNumber}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OtpAuthenticationForgetPassword"
            component={OtpAuthenticationForgetPassword}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ConfirmPassword"
            component={ConfirmPassword}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={resetPassword}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManagePassword"
            component={ManagePassword}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
