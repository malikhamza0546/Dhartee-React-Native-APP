import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  property_flex: {
    width: '100%',
  },
  propertyLocationtext: {
    fontFamily: 'Raleway',
    fontWeight: 'normal',
    fontSize: wp(4),
    color: '#06192C',
    marginTop: hp(0.5),
    marginLeft: wp(2),
  },
  map_img: {
    width: wp(5),
    height: hp(2),
    marginTop: hp(0.5),
  },
  propertyDetail: {
    // flex: 0.1,
    width: '95%',
    height: hp(6),
    marginHorizontal: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart_img: {
    width: 24,
    height: 21,
    marginTop: 15,
  },
  locationIcon: {
    // backgroundColor: 'green',
    marginTop: 5,
  },
  aparttext: {
    fontFamily: ' Montserrat',
    fontWeight: 'normal',
    fontSize: wp(3.3),
    color: '#000000',
    marginTop: 15,
  },
});
export default styles;
