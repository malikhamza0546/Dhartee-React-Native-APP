import DateTimePicker from '@react-native-community/datetimepicker';
import * as React from 'react';
import {
  Animated,
  Image,
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SvgXml} from 'react-native-svg';

import styles from './styles';

export interface Props {
  tags: Array<string>;
  // onSave: Function;
  type?: string;
  containerStyle?: ViewStyle;
  title?: string;
  placeholder?: string;
  onChangeValue?: Function;
  DropDownValueGetter?: Function;
  //((value: string) => void)
}

// to be use as stand-alone conponents
export const Dropdown = (props: Props) => {
  const {
    containerStyle,
    title,
    placeholder,
    onChangeValue,
    tags,
    DropDownValueGetter,
  } = props;
  const [isTagsVisible, setIsTagsVisible] = React.useState(false);
  const [value, setValue] = React.useState(title);
  return (
    <TouchableOpacity
      onPress={() => setIsTagsVisible(!isTagsVisible)}
      style={[styles.container, containerStyle]}>
      {/* <Text style={styles.modalHeading}>{title}</Text> */}
      <View
        style={{
          height: hp(7),
          borderWidth: 1,
          borderColor: 'lightgrey',
          paddingLeft: wp(2),
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: wp(2),
          borderBottomRightRadius: isTagsVisible ? 0 : wp(2),
          borderBottomLeftRadius: isTagsVisible ? 0 : wp(2),
          backgroundColor: '#FAF6F0',
        }}>
        <View style={{width: '85%', justifyContent: 'center'}}>
          <Text
            style={{color: '#77838F', fontFamily: 'Montserrat', fontSize: 16}}>
            {value}
          </Text>
        </View>
        {/* <TextInput
          placeholder={placeholder}
          multiline
          value={value}
          style={{color: 'grey', flex: 1, borderWidth: 1}}
          onChangeText={e => {
            setValue(e);
            try {
              onChangeValue(e);
              console.log(e);
            } catch (e) {
              // console.log('dksn')
            }
          }}
        /> */}
        <View
          // onPress={() => setIsTagsVisible(!isTagsVisible)}
          style={{justifyContent: 'center', width: '15%'}}>
          <Icon name={'down'} type={'antdesign'} size={wp(5)} color={'black'} />
        </View>
      </View>
      {isTagsVisible && (
        <View>
          {tags.map((d: any, i: any) => {
            return (
              <TouchableOpacity
                style={{
                  height: hp(7),
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  paddingHorizontal: wp(2),
                  justifyContent: 'center',
                  borderTopWidth: 0,
                  borderBottomLeftRadius: i === tags.length - 1 ? wp(2) : 0,
                  borderBottomRightRadius: i === tags.length - 1 ? wp(2) : 0,
                  backgroundColor: '#FAF6F0',
                }}
                onPress={() => {
                  setValue(d);
                  DropDownValueGetter(d);
                  setIsTagsVisible(false);
                }}>
                <Text>{d}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
      {/* <View style={[styles.line, {marginTop: hp(5)}]} /> */}
    </TouchableOpacity>
  );
};

// to be use in other conponents
export const DropdownUI = (props: Props) => {
  const [isTagsVisible, setIsTagsVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const {containerStyle, title, placeholder, onChangeValue, tags} = props;
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {paddingHorizontal: 0, marginBottom: 0},
      ]}>
      <View
        style={{
          height: hp(7),
          borderWidth: 1,
          borderColor: 'lightgrey',
          paddingHorizontal: wp(2),
          flexDirection: 'row',
          borderRadius: wp(2),
          borderBottomRightRadius: isTagsVisible ? 0 : wp(2),
          borderBottomLeftRadius: isTagsVisible ? 0 : wp(2),
        }}>
        <TextInput
          placeholder={placeholder}
          multiline
          value={value}
          style={{color: 'grey', flex: 1}}
          onChangeText={e => {
            setValue(e);
            try {
              onChangeValue(e);
              console.log(e);
            } catch (e) {
              // console.log('dksn')
            }
          }}
        />
        <Icon
          containerStyle={{width: wp(5), alignSelf: 'center'}}
          name={'down'}
          type={'antdesign'}
          size={wp(5)}
          color={'red'}
          onPress={() => setIsTagsVisible(!isTagsVisible)}
        />
      </View>
      {isTagsVisible && (
        <View>
          {tags.map((d: any, i: any) => {
            return (
              <TouchableOpacity
                style={{
                  height: hp(7),
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  paddingHorizontal: wp(2),
                  justifyContent: 'center',
                  borderTopWidth: 0,
                  borderBottomLeftRadius: i === tags.length - 1 ? wp(2) : 0,
                  borderBottomRightRadius: i === tags.length - 1 ? wp(2) : 0,
                }}
                onPress={() => {
                  setValue(d);
                }}>
                <Text>{d}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export const InvolvedPerson = (props: Props) => {
  return (
    <Dropdown
      title="Involved Person"
      tags={['tags', 'tags', 'tags']}
      onChangeValue={text => props.onChangeValue(text)}
    />
  );
};
