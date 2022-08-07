import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background_img: {
    width: wp(80),
    height: hp(50),
    justifyContent: 'center',
    alignSelf: 'center',
  },

  logo_gharbar: {
    alignSelf: 'center',
    marginTop: 25,
    marginRight: 10,
    width: wp(30),
    resizeMode: 'contain',
  },

  header_View: {
    width: wp(100),
    height: hp(14),

    // flex: 0.2,
  },
  log_View: {
    width: wp(100),
    height: hp(45),
    // backgroundColor: 'green',
  },
  signUp_View: {
    width: wp(100),
    height: hp(50),
    // flex: 0.4,
    backgroundColor: 'white',
    elevation: 2,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  bodyView: {
    width: wp(90),
    height: hp(10),
    // flex: 0.33,
    // backgroundColor: 'green',
    marginHorizontal: 15,
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  bodyText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: wp(7.5),
    textAlign: 'center',
    color: '#1F244B',
  },

  middleView: {
    // backgroundColor: 'red',
    width: wp(87),
    height: hp(5),
    // flex: 0.2,
    marginHorizontal: 15,
    marginTop: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  clickBtn: {
    backgroundColor: '#DFA72C',
    padding: 18,

    width: wp(85),
    height: hp(9),
    borderRadius: 16,
  },

  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  signTermView: {
    // backgroundColor: 'red',
    width: wp(87),
    height: hp(5),
    marginTop: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  signDesc: {
    fontFamily: 'Montserrat',
    // backgroundColor: 'red',
    fontSize: wp(4),
    color: '#555568',
    textAlign: 'center',
    marginTop: 15,
  },

  signInView: {
    width: wp(87),
    height: hp(5),
    marginHorizontal: 15,
    marginTop: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },

  checkSign: {
    fontFamily: 'Montserrat',
    fontSize: wp(4),
    color: '#555568',
    textAlign: 'center',
  },
  checkSign_Color: {
    fontFamily: 'Montserrat',
    fontSize: wp(4),
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#DFA72C',
  },

  termConditiontext: {
    fontFamily: 'Montserrat',
    fontSize: wp(4),
    color: '#DFA72C',
    textAlign: 'center',
  },
});
export default styles;
