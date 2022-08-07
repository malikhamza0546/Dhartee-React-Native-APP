import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: windowWidth,
    // height: windowHeight,
  },
  ghaarbar_logo: {
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    // width: wp(100),
    // height: hp(100),
    // alignSelf: '',
    borderEndWidth: 1,
    flex: 1,
  },
  logo: {
    // justifyContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 200,
    width: wp(170),
    resizeMode: 'contain',
  },
  design_logo: {
    width: wp(100),
    height: hp(15),
    // flex: 0.15,
    // backgroundColor: 'red',
    flexDirection: 'row',

    // alignItems: 'flex-end',
  },
  design_momument_container: {
    width: wp(30),
    height: hp(15),
    // flex: 0.3,
    // backgroundColor: 'green',
  },
  design_badshahi_container: {
    width: wp(33),
    height: hp(15),
    // backgroundColor: 'green',
  },
  design_minar_container: {
    width: wp(12),
    height: hp(15),
    // backgroundColor: 'pink',
  },
  design_faisal_container: {
    width: wp(26),
    height: hp(15),
    // backgroundColor: 'purple',
  },
});

export default styles;
