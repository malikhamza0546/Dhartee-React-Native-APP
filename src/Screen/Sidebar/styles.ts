import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  crossContainer: {
    width: wp(80),
    // backgroundColor: 'green',
    marginTop: 10,
    marginHorizontal: 15,
  },
  cross_img: {
    // bgcolor: 'black',
  },
  headerContainer: {
    width: wp(76),
    height: hp(20),
    // backgroundColor: 'red',
    marginTop: 20,
    // marginHorizontal: 15,
    marginRight: 12,
    flexDirection: 'row',
    borderBottomColor: '#D0D0D0',
    // borderWidth: 1,
    borderBottomWidth: 1,
    alignSelf: 'center',
    // marginBottom: 20,
  },
  cameraIcon: {
    width: wp(22),
    height: hp(20),
    // height: hp(20),
    // alignSelf: 'center',

    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'green',
  },
  headertxt_container: {
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 15,
    marginBottom: 35,
    // bottom: 7,
  },
  headertxt: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#06192C',
    textAlign: 'center',
    // backgroundColor: 'green',
    // bottom: 13,
    // marginRight: 24,
  },
  bodyConatiner: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  menu_Container: {
    width: wp(80),
    marginTop: 17,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  image_Container: {
    width: wp(10),
    // backgroundColor: 'green',
  },
  Icon_container: {
    // backgroundColor: 'green',
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignSelf: 'center',
    // marginLeft: 10,
    // color: 'red',
    // marginTop: 7,
  },
  bodytxt_Container: {
    width: wp(70),
  },
  bodytxt: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    color: '#06192C',
    // textAlign: 'center',
    marginHorizontal: 10,
    top: 2,
  },
  menulogout_Container: {
    width: wp(80),
    marginTop: 10,
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 15,

    // backgroundColor: 'red',
    flexDirection: 'row',
    // alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    // alignContent: 'flex-end',
  },
});

export default styles;
