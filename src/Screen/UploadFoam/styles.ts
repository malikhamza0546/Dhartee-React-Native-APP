import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp(5),
  },
  propertyContainer: {
    // flex: 0.8,
    width: '100%',
    backgroundColor: '#F0F4FA',
    borderRadius: 16,
    marginTop: hp(2),
  },
  propertyImg: {
    // flex: 0.4,
    width: '100%',

    height: hp(37.5),
    // backgroundColor: 'red',
  },
  property_icon: {
    width: '100%',
    height: hp(37.5),
    // borderRadius: 16,
    resizeMode: 'stretch',
    bottom: 2,
    // marginBottom: 21,
    // backgroundColor: 'red',
    // width: 392,
    // height: 287,
    // right: 28,
  },
  property_flex: {
    width: '100%',
    // flex: 0.4,
    // backgroundColor: 'red',
    marginTop: hp(2),
    paddingVertical: hp(2),
    borderBottomColor: '#DEEBFE',
    borderBottomWidth: 1,
    marginHorizontal: wp(2),
  },
  tabFlex: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  propertyPrice: {
    marginTop: 5,
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: wp(4.8),
    color: '#DFA72C',
  },
  propertyArea: {
    fontFamily: 'Raleway',
    fontWeight: 'normal',
    fontSize: wp(4),
    color: '#06192C',
  },
  map_img: {
    width: wp(5),
    height: hp(2),
    marginTop: hp(0.5),
    marginLeft: wp(1),
  },
  propertyLocationtext: {
    fontFamily: 'Raleway',
    fontWeight: 'normal',
    fontSize: wp(4),
    color: '#06192C',
    marginTop: hp(0.5),
    marginLeft: wp(2),
  },
  propertyDetail: {
    // flex: 0.1,
    width: '100%',
    height: hp(6),
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart_img: {
    width: wp(2),
    height: hp(2),
    marginTop: hp(2),
  },
  locationIcon: {
    // backgroundColor: 'green',
    marginTop: 5,
  },
  bath_img: {
    marginTop: 15,
    marginRight: 2,
  },
  aparttext: {
    fontFamily: ' Montserrat',
    fontWeight: 'normal',
    fontSize: wp(3),
    color: '#000000',

    marginTop: 18,
  },
  bedroom_img: {
    marginTop: 15,
    marginRight: 5,
  },
  tabContainer: {marginLeft: wp(3)},
  tabText_All: {
    fontFamily: ' Montserrat',
    fontWeight: 'normal',
    fontSize: wp(4),
    color: '#77838F',
    textAlign: 'center',
    // textDecorationColor: '#006AFF',
  },
});

export default styles;
