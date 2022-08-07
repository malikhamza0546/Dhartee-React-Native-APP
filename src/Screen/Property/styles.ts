import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerView: {
    flex: 0.1,
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  slide_img: {
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  searchField: {
    flex: 0.1,
    backgroundColor: '#F0F4FA',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  emailIcon: {
    // backgroundColor: 'green',
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },

  formInput_email: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#555568',
    // marginHorizontal: 15,
    flex: 1,
  },
  searchIcon: {
    flex: 0.1,
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  searchText: {
    flex: 0.4,
    alignSelf: 'center',
  },
  searchDropdown: {
    flex: 0.3,
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
  searchFilter: {
    flex: 0.2,
    alignSelf: 'center',
    borderLeftWidth: 1,
    borderColor: '#DCE1E5',
  },
  filter_img: {
    alignSelf: 'center',
  },
  bodyContainer: {
    flex: 0.05,
    // backgroundColor: 'red',
    marginTop: 20,
    marginHorizontal: 12,
  },
  propertyText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#06192C',
  },
  propertyContainer: {
    // flex: 0.8,
    width: wp(93),
    height: hp(45),
    backgroundColor: '#F0F4FA',
    borderRadius: 16,
    marginTop: 10,
    marginHorizontal: 12,
  },
  propertyImg: {
    // flex: 0.67,
    width: wp(93),
    height: hp(38),
    // backgroundColor: 'red',
  },
  property_icon: {
    width: wp(93),
    height: hp(38),
    // borderRadius: 16,

    resizeMode: 'stretch',
    bottom: 3,
  },
  property_flex: {
    // flex: 0.2,
    width: wp(87),
    height: hp(12),
    // backgroundColor: 'red',
    marginTop: 10,
    marginHorizontal: 7,
    borderBottomWidth: 1,

    borderColor: '#DEEBFE',
  },
  propertyPrice: {
    marginTop: 2,
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
  locationIcon: {
    // backgroundColor: 'green',
    marginTop: 5,
  },
  map_img: {
    width: 24,
    height: 21,
    marginTop: 5,
  },
  propertyLocationtext: {
    fontFamily: 'Raleway',
    fontWeight: 'normal',
    fontSize: wp(4),
    color: '#06192C',
    marginTop: 3,
    marginHorizontal: 10,
  },
  propertyDetail: {
    // flex: 0.1,
    width: wp(87),
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
  aparttext: {
    fontFamily: ' Montserrat',
    fontWeight: 'normal',
    fontSize: wp(3.3),
    color: '#000000',
    marginTop: 15,
  },
  tabFlex: {
    flex: 0.05,
    flexDirection: 'row',
    marginTop: 20,
  },
  tabContainer: {flex: 0.16, marginHorizontal: 8},
  tabText_All: {
    fontFamily: ' Montserrat',
    fontWeight: 'normal',

    fontSize: wp(4),
    color: '#DFA72C',
    borderBottomWidth: 3,
    textAlign: 'center',
    borderColor: '#DFA72C',

    // textDecorationColor: '#006AFF',
  },
  tabText_Buy: {
    fontFamily: ' Montserrat',
    fontWeight: 'normal',
    fontSize: wp(4),
    color: '#77838F',
    textAlign: 'center',

    // textDecorationLine: 'underline',
  },
  tabText_Rent: {
    fontFamily: ' Montserrat',
    fontWeight: 'normal',
    fontSize: wp(4),
    color: '#77838F',
    textAlign: 'center',
  },
  tabText_Invest: {
    fontFamily: ' Montserrat',
    fontWeight: 'normal',
    fontSize: wp(4),
    color: '#77838F',
    textAlign: 'center',
  },
});

export default styles;
