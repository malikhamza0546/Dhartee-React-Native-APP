import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SvgXml} from 'react-native-svg';
import {Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
import HorizantalLine from '../../Component/Button/HorizantalLine/HorizantalLine';
import {mappin} from '../../../assets/images/mappin';
import {OpenletterIcon} from '../../../assets/images/OpenletterIcon';
import PreviewHeader from '../../Component/Button/PreviewHeader/PreviewHeader';

const AboutUS = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <PreviewHeader name="About Us" />
      <ScrollView contentContainerStyle={{paddingHorizontal: hp(2)}}>
        <Text
          style={{
            marginTop: hp(2),
            color: '#06192C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Welcome to Gharbaar - Pakistan’s #1 Home Buying Resource!
        </Text>
        <Text style={{marginTop: hp(2), fontSize: 12}}>
          We only have ONE MISSION: to change the way properties in Pakistan are
          bought, sold, leased, and rented.
        </Text>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          How can we do this?
        </Text>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            By giving you a behind-the-curtain view of property deals,
            availability, and the profit potential for all your property
            transactions
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            By giving you direct access to real-time listings and opportunities.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            By giving you the information you need to navigate a dynamic and
            ever-evolving real estate market.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            By helping you to intelligently buy, sell, rent, invest, or develop
            property at a profit.
          </Text>
        </View>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Who are we?
        </Text>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            We’re a highly-educated team of Real Estate and technology
            professionals with the experience and vision to help you profit from
            today’s real estate opportunities.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            We have proprietary cutting-edge tools to keep you ahead of the
            crowd.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            We have the vision and the solutions to help you succeed on any
            level of real estate transaction.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            We eliminate the guesswork with up-to-the-minute listing, pricing,
            and financing data.
          </Text>
        </View>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          We are revolutionizing Pakistan’s real estate industry with three
          objectives:
        </Text>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Take the hassle and uncertainty out of buying, leasing, and owning a
            home.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Deliver professional information into the hands of the buyers (no
            more secrets!).
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            Help buyers and sellers deal with each other ethically, efficiently,
            and in complete transparency.
          </Text>
        </View>

        <Text
          style={{
            marginTop: hp(4),
            color: '#DFA72C',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          How are we building this new standard of a real estate market where
          everyone wins?
        </Text>
        <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            By eliminating the traditional friction between seller and buyers,
            between landlords and tenants, between developers and investors…
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>{'\u2022'}</Text>
          <Text style={{flex: 1, paddingLeft: 5, fontSize: 12}}>
            By building trust through universal access to marketplace
            information, financial resources, and value trends.
          </Text>
        </View>
        <View
          style={{
            width: '85%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: hp(4),
            paddingHorizontal: wp(4),
            borderRadius: 16,
            backgroundColor: '#FFFFFF',
            elevation: 2,
            marginVertical: hp(2),
          }}>
          <Avatar
            size={70}
            rounded
            containerStyle={{
              backgroundColor: 'white',
            }}
            source={require('../../../assets/images/Frankli.png')}
          />
          <Text style={{color: '#DFA72C', fontWeight: 'bold', fontSize: 14}}>
            Franklin D. Roosevelt
          </Text>
          <Text
            style={{
              color: '#06192C',
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Real estate cannot be lost or stolen, nor can it be carried away.
            Purchased with common sense, paid for in full, and managed with
            reasonable care, it is about the safest investment in the world.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default AboutUS;
