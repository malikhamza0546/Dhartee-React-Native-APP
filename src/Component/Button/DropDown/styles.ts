import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    // marginVertical: hp(3),
    // paddingHorizontal: wp(4),
  },
  line: {
    // backgroundColor: '#969696',
    backgroundColor: 'lightgrey',
    height: hp(0.1),
    width: '100%',
    marginTop: hp(2),
  },
  modalHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: wp(4.7),
    color: 'red',
    marginVertical: hp(1),
  },
  filePicker: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: wp(2),
    borderStyle: 'dotted',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(22),
    marginRight: wp(2),
  },
});
export default styles;
