/**
 * BizB Store - Codistan Pvt.
 * Developer - Anjuman
 */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image, BackHandler, Alert, SafeAreaView} from 'react-native';
import styles from './styles';
import {SvgXml} from 'react-native-svg';
import buy from './../Buy/buy';
import rent from './../Rent/rent';
import home from './../HomeScreen/homeScreen';
import invest from './../Invest/invest';
import property from './../Property/property';
// custom imports

const Tab = createMaterialBottomTabNavigator();
const TabBarIconBuy = (focused: any) => {
  return (
    <Image
      style={[styles.tabImageStyle, {tintColor: focused ? '#DFA72C' : '#000'}]}
      source={require('../../../assets/images/Buy.png')}
    />
  );
};
const TabBarIconRent = (focused: any) => {
  return (
    <Image
      style={[styles.tabImageStyle, {tintColor: focused ? '#DFA72C' : '#000'}]}
      source={require('../../../assets/images/Rent.png')}
    />
  );
};
const TabBarIconMyHome = (focused: any) => {
  return (
    <Image
      style={[styles.tabImageStyle, {tintColor: focused ? '#DFA72C' : '#000'}]}
      source={require('../../../assets/images/Home.png')}
    />
  );
};
const TabBarIconInvest = (focused: any) => {
  return (
    <Image
      style={[
        styles.tabImageStyle,
        {
          tintColor: focused ? '#DFA72C' : '#000',
          resizeMode: 'contain',
        },
      ]}
      source={require('../../../assets/images/invest.png')}
    />
  );
};
const TabBarIconProperty = (focused: any) => {
  return (
    <Image
      style={[
        styles.tabImageStyle,
        {
          tintColor: focused ? '#DFA72C' : '#000',
          resizeMode: 'contain',
        },
      ]}
      source={require('../../../assets/images/property.png')}
    />
  );
};
import {useFocusEffect} from '@react-navigation/native';
import HomeScreen from '../Welcome/Welcome';

export const HomeNavigation = () => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={'#DFA72C'}
      barStyle={{
        backgroundColor: 'white',
        borderTopWidth: 2,
        paddingTop: 10,
        borderTopColor: '#F0F0F0',
        height: '11%',
      }}>
      <Tab.Screen
        name="Buy"
        component={buy}
        options={{
          tabBarLabel: 'Buy',
          tabBarIcon: ({focused}) => TabBarIconBuy(focused),
        }}
      />

      <Tab.Screen
        name="Rent"
        component={rent}
        options={{
          tabBarLabel: 'Rent',
          tabBarIcon: ({focused}) => TabBarIconRent(focused),
        }}
      />
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({focused}) => TabBarIconMyHome(focused),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={invest}
        options={{
          tabBarLabel: 'Invest',
          tabBarIcon: ({focused}) => TabBarIconInvest(focused),
        }}
      />
      <Tab.Screen
        name="Property"
        component={property}
        options={{
          tabBarLabel: 'Property',
          tabBarIcon: ({focused}) => TabBarIconProperty(focused),
        }}
      />
    </Tab.Navigator>
  );
};
