import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    elevation: 4,
  },
  headerView: {
    flex: 0.1,
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  btn_backarrow: {
    width: 50,
    height: 50,
    borderRadius: 16,
    padding: 10,
    backgroundColor: '#956229',
    marginTop: 20,
    alignSelf: 'center',
  },
  headerText: {
    alignSelf: 'center',
    marginTop: 30,
    marginRight: 60,
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 20,
    color: '#DFA72C',
  },
  bodyContainer: {
    flex: 0.15,

    marginHorizontal: 12,
  },
  cameraIcon: {
    flex: 1,
  },
  cameraIcontext: {
    flex: 0.5,
  },
  cameraIconTextstyles: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#06192C',
    textAlign: 'center',
  },
  form: {
    flex: 0.7,
    marginHorizontal: 18,
    marginTop: 15,
  },
  formField_email_invisible: {
    flex: 0.1,
    backgroundColor: '#F0F4FA',
    justifyContent: 'center',
    // color: 'white',
    // borderColor: '#979BB5',
    // borderWidth: 1,
    borderRadius: 16,
    marginTop: 20,
    flexDirection: 'row',
  },
  formField_email: {
    flex: 0.1,
    backgroundColor: 'white',
    justifyContent: 'center',
    color: 'black',
    borderColor: '#979BB5',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 20,
    flexDirection: 'row',
  },
  formInput_email: {
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#555568',
    marginHorizontal: 15,
    flex: 1,
    // backgroundColor: 'red',
  },
  emailIcon: {
    // backgroundColor: 'green',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 15,
    marginTop: 7,
  },
  formField_country_dropdown: {
    flex: 0.1,
    borderWidth: 1,
    borderColor: '#979BB5',
    marginTop: 20,
    borderRadius: 16,
  },
  middleView: {
    flex: 0.2,
    marginHorizontal: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 6,
  },

  clickBtn: {
    backgroundColor: '#DFA72C',
    padding: 12,
    width: 315,
    height: 50,
    borderRadius: 16,
  },

  btnText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
  },
});

export default styles;
