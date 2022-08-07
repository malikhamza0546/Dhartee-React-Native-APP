import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  Touchable,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import PreviewHeader from '../../Component/Button/PreviewHeader/PreviewHeader';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styles from './styles';
import {SvgXml} from 'react-native-svg';
import {map} from '../../../assets/images/map';
import ButtonBottom from '../../Component/Button/ButtonBottom/ButtonBottom';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MapboxGL from '@react-native-mapbox-gl/maps';
// import {NavigationEvents} from 'react-navigation';
import {PointAnnotationProps} from '@react-native-mapbox-gl/maps';
import {StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
// import {transparent} from 'react-native-paper/lib/typescript/styles/colors';
// import RNRestart from 'react-native-restart';
//  @refresh reset
const locationConfig = {
  skipPermissionRequests: false,
  authorizationLevel: 'whenInUse',
};
Geolocation.setRNConfiguration(locationConfig);
const Location = ({route, navigation}) => {
  // <NavigationEvents onWillFocus={() => goBackReload()} />;
  console.log(route.params, 'route.params');
  const {AllURLS} = route.params;
  const Location = AllURLS.Location;
  const IntailCoordinates = AllURLS.IntailCoordinates;
  console.log(AllURLS, 'route.params');
  MapboxGL.setAccessToken(
    'pk.eyJ1Ijoid2FzZWVtOTkiLCJhIjoiY2piaGxvaTU2MG80NzJ3cjN2dDFxenprZSJ9.PRAIPF1xLhilQmS49e_zXQ',
  );
  const MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1Ijoid2FzZWVtOTkiLCJhIjoiY2w0emRmejBlMjhpczNrbWw4N3VyaHA2OCJ9.Fj1fOKYNuo6uj0SdfqENrw';
  // const navigation = useNavigation();
  const [PickUpLocation, onChangePickUpLocation] = React.useState('');
  const [query, setQuery] = useState('');
  const [city, setCity] = useState(Location);
  const [number, onChangeNumber] = React.useState(null);
  const [result, setResult] = useState([]);
  const [DropDownHandler, setDropDownHandler] = useState(true);
  // const [draggable, setDraggable] = useState(false);

  const [societyLong, setSocietyLong] = useState(73.0479);
  const [societyLat, setSocietyLat] = useState(33.6844);
  const [mapsCoord, setmapsCoord] = useState([...IntailCoordinates]);
  const [cameraCoord, setCameraCoord] = useState([10.451526, 51.165691]);
  const [cameraZoom, setCameraZoom] = useState(4);

  const searchLocation = query => {
    let qry = query.trim();
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${qry}.json?country=pk&access_token=${MAPBOX_ACCESS_TOKEN}`,
      )
        .then(res => res.json())
        .then(data => {
          console.log(data, 'data of searchLocation');
          const address = [];
          const result = data;
          result.features.map(feature => {
            address.push({
              id: feature.id,
              place_name: feature.place_name,
              center: feature.center,
            });
          });

          resolve(address);
        })
        .catch(err => reject(err, 'error'));
    });
  };

  const searchLocationwithLongLatitude = query => {
    console.log(query, 'searchLocationwithLongLatitude');
    var longitude = query[0]; // only working for This API
    var laltitude = query[1];
    console.log(typeof longitude, laltitude, 'longitude and latidue');
    // 34.227208816373164;

    const curl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${laltitude}.json?access_token=pk.eyJ1Ijoid2FzZWVtOTkiLCJhIjoiY2w0emRmejBlMjhpczNrbWw4N3VyaHA2OCJ9.Fj1fOKYNuo6uj0SdfqENrw`;

    return new Promise((resolve, reject) => {
      fetch(curl)
        .then(res => res.json())
        .then(data => {
          console.log(
            data,
            'data in searchLocationwithLongLatitude in Location',
          );
          const address = [];
          const result = data;
          console.log('result', result);
          result.features.map(feature => {
            address.push({
              id: feature.id,
              place_name: feature.place_name,
              center: feature.center,
            });
          });

          // onDone({...addressItem});
          // goBack();
          resolve(address);
        })
        .catch(err => reject(err, 'error'));
    });
  };

  useEffect(() => {
    if (query.length > 0) {
      let x = setTimeout(() => {
        searchLocation(query).then(data => {
          console.log(data, 'dataa in useEffect');
          setDropDownHandler(true);
          setResult([...data]);
        });
      }, 200);
    }
  }, [query]);
  const mapRef = 'map';

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <View style={{paddingHorizontal: hp(2)}}>
        <PreviewHeader name="Location" />
      </View>
      <View style={{width: '100%', height: hp(70), position: 'relative'}}>
        <View style={styles.location}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderBottomWidth: 1,

              marginHorizontal: wp(5),
            }}>
            <TextInput
              style={{
                paddingVertical: wp(2),
                borderBottomWidth: 1,
                borderColor: 'grey',
              }}
              onChangeText={setQuery}
              value={query}
              placeholder="Search Location"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            top: hp(12),
            borderRadius: 8,
            // left: 35,
            marginLeft: wp(9),
            zIndex: 15,

            width: wp(80),
            backgroundColor: '#DFA72C',
          }}>
          {DropDownHandler &&
            result.map((addressItem, index) => (
              <View
                key={index}
                style={{
                  marginVertical: 5,
                  backgroundColor: '#000',
                  backgroundColor: '#DFA72C',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    // console.log(addressItem, 'On Press in DropDown');
                    setDropDownHandler(false);
                    setCity(addressItem.place_name);
                    setmapsCoord(addressItem.center);
                  }}
                  activeOpacity={0.9}
                  style={{
                    backgroundColor: '#fff',
                    height: 44,
                    borderRadius: 10,
                    justifyContent: 'center',
                    paddingHorizontal: 15,
                  }}>
                  <Text
                    numberOfLines={2}
                    style={{
                      width: '100%',
                      fontSize: 16,
                    }}>
                    {addressItem.place_name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </View>

        <MapboxGL.MapView style={{flex: 1}}>
          <View>
            <MapboxGL.Camera
              zoomLevel={4}
              animationMode={'flyTo'}
              animationDuration={3000}
              centerCoordinate={mapsCoord}
            />

            <MapboxGL.PointAnnotation
              key="pointAnnotation"
              id="pointAnnotation"
              draggable={true}
              onDragEnd={id => {
                console.log(id.geometry.coordinates, 'Drag');
                // setCameraCoord(id.geometry.coordinates);
                // setCameraZoom(10);
                searchLocationwithLongLatitude(id.geometry.coordinates).then(
                  data => {
                    console.log(
                      data,
                      'searchLocationwithLongLatitude Promised Data',
                    );
                    setCity(data[0].place_name);
                    setmapsCoord(data[0].center);
                  },
                );
              }}
              coordinate={[...mapsCoord]}>
              <View style={styles.markerContainer}>
                {city.length > 0 && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: hp(12),
                    }}>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>{city}</Text>
                    </View>
                    <View
                      style={{
                        transform: [{rotate: '45deg'}],
                        height: 30,
                        width: 30,
                        // borderTopRadius: '50%',
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        borderBottomLeftRadius: 50,
                        // borderBottomRightRadius: 50,
                        // marginTop: hp(3),
                        // backgroundColor: 'transparent',
                        backgroundColor: '#DFA72C',
                        // borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          transform: [{rotate: '45deg'}],
                          height: 15,
                          width: 15,
                          backgroundColor: 'white',
                          borderTopLeftRadius: 50,
                          borderTopRightRadius: 50,
                          borderBottomLeftRadius: 50,
                          borderBottomRightRadius: 50,
                        }}></View>
                    </View>
                  </View>
                )}
              </View>
            </MapboxGL.PointAnnotation>
          </View>
        </MapboxGL.MapView>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
          paddingHorizontal: wp(5),
          marginTop: hp(-2),
          backgroundColor: '#fff',
        }}>
        <View style={{marginTop: hp(2)}}>
          <View>
            <Text style={[styles.propertyArea, {paddingLeft: wp(0.5)}]}>
              Property Location
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <SvgXml style={styles.map_img} width="18" height="18" xml={map} />
            <Text style={styles.propertyLocationtext}>{city}</Text>
          </View>
        </View>
        <View style={{marginTop: hp(4)}}>
          <ButtonBottom
            name="Next"
            onPress={() =>
              navigation.navigate('Preview', {
                OBJ: {
                  AllURLS: AllURLS,
                  city: city,
                  mapsCoord: mapsCoord,
                },
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Location;
