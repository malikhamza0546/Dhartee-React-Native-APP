import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

import Slider from 'rn-range-slider';
import {colors} from 'react-native-elements';
const THUMB_RADIUS = 12;

const Notch = props => {
  return <View style={styles.notch} {...props} />;
};

const Label = ({text}) => {
  return (
    <View style={styles.label}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const RailSelected = () => {
  return <View style={styles.railSelected} />;
};

const Thumb = () => {
  return <View style={styles.root} />;
};

const Rail = () => {
  return <View style={styles.rail} />;
};

const RangeSlider = props => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(high => <Label text={high} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <View>
      <Slider
        min={0}
        max={100}
        step={1}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        onValueChanged={handleValueChange}
      />
    </View>
  );
};

export default RangeSlider;
const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor: '#DFA72C',
    backgroundColor: '#ffffff',
  },
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#DEEBFE',
  },
  railSelected: {
    height: 4,
    backgroundColor: '#DFA72C',
    borderRadius: 2,
  },
  label: {
    alignItems: 'center',
    backgroundColor: '#4499ff',
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  notch: {
    width: 8,
    height: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#DFA72C',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});
