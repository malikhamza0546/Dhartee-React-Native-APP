import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  property_flex: {},

  propertyArea: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 16,
    color: '#06192C',
  },
  locationIcon: {
    // backgroundColor: 'green',
    marginTop: 5,
  },
  map_img: {},
  propertyLocationtext: {
    fontFamily: 'Raleway',
    fontWeight: 'normal',
    fontSize: wp(4),
    color: '#06192C',
  },

  location: {
    backgroundColor: '#fff',
    width: wp(80),
    borderRadius: 10,
    alignSelf: 'center',
    paddingVertical: hp(1.5),
    position: 'absolute',
    top: hp(2),
    zIndex: 10,
  },
  errorMsg: {
    textAlign: 'left',
    color: 'red',
    // paddingHorizontal: hp(2),
    // paddingBottom: hp(4),
  },

  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // width: 60,
    backgroundColor: 'transparent',
  },
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 5,
  },
});
export default styles;
