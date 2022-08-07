import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {List} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Accordain = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section
      style={{
        backgroundColor: '#FAF6F0',
        borderRadius: 16,
        elevation: 15,
      }}>
      <List.Accordion
        theme={{colors: {background: '#FAF6F0'}}}
        style={{
          backgroundColor: '#FAF6F0',
          overflow: 'hidden',
          borderBottomWidth: 1,
          borderBottomColor: '#DCE1E5',
        }}
        titleStyle={{
          fontSize: 14,
          color: '#77838F',
        }}
        title="Search Agencies">
        <TouchableOpacity>
          <List.Item
            title="First item"
            style={{borderBottomWidth: 1, borderBottomColor: '#DCE1E5'}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <List.Item
            title="Second item"
            style={{borderBottomWidth: 1, borderBottomColor: '#DCE1E5'}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <List.Item title="Third item" />
        </TouchableOpacity>
      </List.Accordion>
    </List.Section>
  );
};

export default Accordain;
