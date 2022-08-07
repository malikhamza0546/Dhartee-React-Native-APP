import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SvgXml} from 'react-native-svg';
import {filter} from '../../../assets/images/Filter';
import {useNavigation} from '@react-navigation/native';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
import FilterArray from '../../Component/Button/FiltersArray/FiltersArray';
import {Dropdown} from '../../Component/Button/DropDown/DropDown';
const FiltersAccordain = () => {
  const navigation = useNavigation();
  const Cities = ['Lahore', 'Karachi', 'Islamabad'];
  const Projects = ['Blue World City', 'Capital Smart City', 'Kingdom Valley'];
  return (
    <ScrollView style={[styles.container]}>
      <View
        style={{
          height: hp(85),
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <View>
          <View style={[styles.tabFlex]}>
            <View style={[styles.tabContainer, {marginLeft: 0}]}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text
                  style={[
                    styles.tabText_All,
                    {textDecorationLine: 'underline', color: '#D5A72C'},
                  ]}>
                  All
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
                <Text style={styles.tabText_All}>Commercial projects</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabContainer}>
              <TouchableOpacity>
                <Text style={styles.tabText_All}>Housing projects</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: hp(2)}}>
            <Dropdown tags={Cities} title="City" />
          </View>
          <View style={{marginTop: hp(2)}}>
            <Dropdown tags={Projects} title="Projects" />
          </View>
        </View>
        <View>
          <ButtonBottom
            name="Show Properties"
            onPress={() => console.log('Hello World')}
          />
          <View
            style={{
              borderColor: '#EDEDED',
              marginTop: hp(2),
            }}></View>
        </View>
      </View>
    </ScrollView>
  );
};
export default FiltersAccordain;
