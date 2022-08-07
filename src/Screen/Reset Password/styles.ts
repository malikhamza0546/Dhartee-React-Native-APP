import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor:'#006AFF'
  },
  headerView: {
    flex: 0.15,
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  backArrow_img: {
    alignSelf: 'center',
    marginTop: 30,
  },
  logo_gharbar: {
    alignSelf: 'center',
    marginTop: 20,
    marginRight: 60,
  },
  bodyView: {
    flex: 0.85,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bodyHeading: {
    flex: 0.05,
    marginTop: 25,
    marginHorizontal: 20,
  },
  headingText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1F244B',
  },
  form: {
    flex: 0.15,
    marginHorizontal: 18,
    marginTop: 20,
  },
  formHeading: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#555568',
    marginHorizontal: 2,
  },
  formField_email: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    color: 'black',
    borderColor: '#979BB5',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 7,
  },
  formInput_email: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#555568',
    marginHorizontal: 15,
  },
  nameValidation: {
    flex: 0.05,
    marginHorizontal: 18,
    marginTop: 7,
    flexDirection: 'row',
  },
  nameValidation_Text: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#FD0707',
  },
  formInput_password: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#555568',
    marginHorizontal: 15,

    flex: 1,
  },
  formField_password: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    color: 'black',
    flexDirection: 'row',

    borderColor: '#979BB5',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 7,
  },
  passwordDesc_View: {
    flex: 0.15,
    marginHorizontal: 20,
    marginTop: 7,
  },
  passwordDesc_Text: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#555568',
  },
  btnBody: {
    flex: 0.2,
    marginTop: 20,
    alignSelf: 'center',
  },
  btn_recoverPassword: {
    backgroundColor: '#DFA72C',
    padding: 17,
    width: 315,
    height: 60,
    borderRadius: 16,
  },
  btn_recoverPassword_text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  ////////////////////////// Modal /////////////////////
  modalContainer: {
    flex: 0.5,
    backgroundColor: '#ffff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#006AFF',
  },
  modalImgcontainer: {
    flex: 0.55,
    // backgroundColor: 'green',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  modalPassword: {
    flex: 0.1,
    // backgroundColor: 'green',
    marginTop: 20,
    alignSelf: 'center',
  },
  modalPassword1: {
    flex: 0.1,
    // backgroundColor: 'green',
    marginTop: 5,
    alignSelf: 'center',
  },
  modalPassword3: {
    flex: 0.1,
    // backgroundColor: 'green',
    marginTop: 5,
    alignSelf: 'center',
  },
  modalPassword_txt1: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 20,
    color: '#1F244B',
  },
  modalPassword_txt2: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#1F244B',
  },
  modalPassword_txt3: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#006AFF',
  },
});
export default styles;
