import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../Sidebar/CustomDrawer';
import {HomeNavigation} from '../HomeNavigator/HomeNavigator';
import ContactUs from '../ContactUs/ContactUs';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import AboutUS from '../AboutUs/AboutUs';
const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="HomeNavigation"
      drawerContent={(props: any) => (
        <CustomDrawer
          {...props}
          // route={route}
          // navigation={navigation}
          // props={route.props}
        />
      )}>
      <Drawer.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="AboutUS"
        component={AboutUS}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
