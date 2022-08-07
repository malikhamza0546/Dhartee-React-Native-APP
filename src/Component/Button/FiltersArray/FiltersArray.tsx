import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const FilterArray = props => {
  const [filtersArray, setFilterArray] = useState([
    {id: 1, value: 'All', selected: false},
    {id: 2, value: 'Buy', selected: false},
    {id: 3, value: 'Rent', selected: true},
    {id: 4, value: 'Invest', selected: false},
  ]);

  const FiltersHandler = value => {
    const newFilterArray = filtersArray.map((obj, index) => {
      if (obj.id === value.id) {
        props.onButtonPressed(value);
        const new_selection = !obj.selected;
        return {id: obj.id, value: obj.value, selected: new_selection};
      } else {
        return {...obj, selected: false};
      }
    });
    setFilterArray(newFilterArray);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',

        marginTop: hp(4),
      }}>
      {filtersArray.map((obj, index) => {
        return (
          <TouchableOpacity
            style={{
              width: wp(18),
              height: hp(6),
              borderRadius: 14,
              borderWidth: 1,
              borderColor: '#DCE1E5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: obj.selected ? '#DFA72C' : '#fff',
            }}
            onPress={() => {
              FiltersHandler(obj);
            }}>
            <Text
              style={{
                color: obj.selected ? '#fff' : '#77838F',
                fontSize: 14,
                fontFamily: 'Montserrat',
              }}>
              {obj.value}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default FilterArray;
