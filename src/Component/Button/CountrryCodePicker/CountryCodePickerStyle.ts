import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: hp(2),
    paddingHorizontal: wp(0),
    // backgroundColor: 'green',
  },
  formHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#555568',
    marginHorizontal: 2,
  },
});
