import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    height: hp(85),
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp(5),
  },
  tabFlex: {
    flexDirection: 'row',
    marginTop: hp(2),
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
