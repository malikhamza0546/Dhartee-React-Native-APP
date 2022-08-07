import React, {Fragment, Component} from 'react';
import {PermissionsAndroid, Platform, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CameraRoll from '@react-native-community/cameraroll';
PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
);
import * as ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Entypo';
import {cross} from '../../../../assets/images/cross';
import AsyncStorage from '@react-native-async-storage/async-storage';
//  <Octicons name="magnifying-glass" color={'#000'} size={25} />;
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PhotoEditor from 'react-native-photo-editor';
import TextGradient from './TextGradient';
import Draggable from 'react-native-draggable';
import ViewShot from 'react-native-view-shot';
import {captureRef, viewRef} from 'react-native-view-shot';
import Video from 'react-native-video';
import {TextTrackType} from 'react-native-video';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Video as VideoCompressor,
  getVideoMetaData,
  generateFilePath,
} from 'react-native-compressor';
import PreviewHeader from '../PreviewHeader/PreviewHeader';
import {AddOption} from '../../../../assets/images/AddOption';
import {SvgXml} from 'react-native-svg';
import ButtonBottom from '../ButtonBottom/ButtonBottom';
import Modal from 'react-native-modal';
import ImageResizer from 'react-native-image-resizer';
import {
  UploadVideo,
  UploadImageForCameraImplemetation,
} from '../../../Services/APIs/auth';
import {REACT_APP_API_URL} from '../../../Services/APIs/auth';
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class CameraImplmentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
      Location: 'Location',
      IntailCoordinates: [],
      UIRenderer: false,
      ViewShoot: false,
      fileUriForVideo: '',
      VideoName: '',
      VideoType: '',
      VideoShower: false,
      isMuted: false,
      progress: null,
      setModalCameraVisible: false,
      setModalVisibleForOtherOption: false,
      RenderFeaturedImage: false,
      RenderOtherImage: false,
      Images: [],
      setImageGetFromServer: '',
      URIForVideoListingss: '',
      UploadOtherImagesArray: [],
      setError: '',
      URIForFeaturedImagesss: '',
      Loading: false,
    };
  }

  URLFromServerGeneratorForVideo = async urlObj => {
    console.log(urlObj, 'urlObj');

    // let VideoData = new FormData();
    // VideoData.append('VideoFor', urlObj);
    //  this.state.setImageGetFromServer(response.url);
    let formData = new FormData();
    formData.append('video', urlObj);
    try {
      this.setState({Loading: true});
      const response = await UploadVideo(formData);
      // console.log(response);
      if (response?.status === 200) {
        // console.log("response", response); //response.data.url => url of image
        console.log('Featured video uploaded successfully', response.data.url);
        this.setState({
          URIForVideoListingss: response.data.url,
        });

        // const newFile = {
        //   name: file.name,
        //   size: formatBytes(file.size),
        //   url: response.data.url,
        // };
        // setUploadedFiles((uf) => [...uf, newFile]);
        // navigate("/");

        // setImage(response.data.url);
      } else {
        console.log('Network Error');
      }
      // setLoading(false);
    } catch (err) {
      console.log('error in Catch', err);
    }
    this.setState({Loading: false});
  };

  URLFromServerGeneratorForFeaturedImages = async urlObj => {
    console.log(urlObj, 'urlObj in URLFromServerGeneratorForFeaturedImages');

    let formData = new FormData();
    formData.append('img', urlObj);
    try {
      const response = await UploadImageForCameraImplemetation(formData);
      // console.log(response);
      if (response?.status === 200) {
        // console.log("response", response); //response.data.url => url of image
        console.log('Featured Image uploaded successfully', response.data.url);
        this.setState({
          URIForFeaturedImagesss: response.data.url,
        });
      } else {
        console.log('Network Error');
      }
    } catch (err) {
      console.log('error in Catch', err);
    }
  };

  URLFromServerGeneratorForOtherImages = async urlObj => {
    console.log(urlObj, 'urlObj in URLFromServerGeneratorForFeaturedImages');
    let formData = new FormData();
    formData.append('img', urlObj);
    try {
      const response = await UploadImageForCameraImplemetation(formData);
      // console.log(response);
      if (response?.status === 200) {
        // console.log("response", response); //response.data.url => url of image
        console.log('Featured Image uploaded successfully', response.data.url);
        this.setState({
          UploadOtherImagesArray: [
            ...this.state.UploadOtherImagesArray,
            {
              URIFromServer: response.data.url,
              ComparingURI: urlObj.uri,
            },
          ],
        });
      } else {
        console.log('Network Error');
      }
    } catch (err) {
      console.log('error in Catch', err);
    }
  };

  PickImage = async () => {
    const DEFAULT_OPTIONS = {
      mediaType: 'photo',
      videoQuality: 'high',
      quality: 1,
      maxWidth: 0,
      maxHeight: 0,
      includeBase64: false,
      cameraType: 'back',
      // selectionLimit: 100,
      saveToPhotos: false,
      durationLimit: 0,
      includeExtra: false,
      presentationStyle: 'pageSheet',
    };
    // settoCaptureImage(false);
    this.setState({setModalVisibleForOtherOption: false});
    await ImagePicker.launchCamera({...DEFAULT_OPTIONS}, response => {
      // console.log('launch ', response);
      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        console.log(response.errorMessage);
        return;
      } else if (response.assets) {
        response.assets.map((item, index) => {
          {
            item.uri &&
              ImageResizer.createResizedImage(item.uri, 250, 250, 'JPEG', 50, 0)
                .then(response => {
                  // console.log('resized image size', response);
                  let resize = [
                    {
                      uri: response.uri,
                      name: response.name,
                      // size: response.size,
                      // index: index,
                      type: 'image/JPEG',
                    },
                  ];
                  this.URLFromServerGeneratorForOtherImages(resize[0]);
                  // console.log('Main Body');
                  // console.log('Images: ', this.state.Images);
                  // console.log('Images: ', this.state.Images);
                  let newAssets = [...this.state.Images, ...resize];
                  // console.log('New Assets: ', newAssets);
                  this.setState({
                    Images: newAssets,
                    RenderOtherImage: true,
                    setModalVisibleForOtherOption: false,
                  });
                })
                .catch(err => {
                  // console.log('err');
                  Alert.alert('Something Went Wrong', err);
                });
          }
        });
      }
    });
  };

  launchLibrary = async () => {
    const DEFAULT_OPTIONS = {
      mediaType: 'photo',
      videoQuality: 'high',
      quality: 1,
      maxWidth: 0,
      maxHeight: 0,
      includeBase64: false,
      cameraType: 'back',
      selectionLimit: 100,
      saveToPhotos: false,
      durationLimit: 0,
      includeExtra: false,
      presentationStyle: 'pageSheet',
    };
    // settoCaptureImage(false);
    this.setState({setModalVisibleForOtherOption: false});
    await ImagePicker.launchImageLibrary({...DEFAULT_OPTIONS}, response => {
      // console.log('launch ', response);
      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        console.log(response.errorMessage);
        return;
      } else if (response.assets) {
        response.assets.map((item, index) => {
          {
            item.uri &&
              ImageResizer.createResizedImage(item.uri, 250, 250, 'JPEG', 50, 0)
                .then(response => {
                  // console.log('resized image size', response);
                  let resize = [
                    {
                      uri: response.uri,
                      name: response.name,
                      // size: response.size,
                      // index: index,
                      type: 'image/JPEG',
                    },
                  ];
                  this.URLFromServerGeneratorForOtherImages(resize[0]);
                  // console.log('Main Body');
                  // console.log('Images: ', this.state.Images);
                  // console.log('Images: ', this.state.Images);
                  let newAssets = [...this.state.Images, ...resize];
                  // console.log('New Assets: ', newAssets);
                  this.setState({
                    Images: newAssets,
                    RenderOtherImage: true,
                    setModalVisibleForOtherOption: false,
                  });
                })
                .catch(err => {
                  // console.log('err');
                  Alert.alert('Something Went Wrong', err);
                });
          }
        });
      }
    });
  };

  //working
  launchCamera = () => {
    this.setState({setModalCameraVisible: false});
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        saveToPhotos: true,
        waitUntilSaved: true,
        cameraRoll: true,
      },
    };

    ImagePicker.launchCamera(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        {
          response?.assets[0]?.uri &&
            ImageResizer.createResizedImage(
              response?.assets[0]?.uri,
              250,
              250,
              'JPEG',
              50,
              0,
            )
              .then(response => {
                // console.log('resized image size', response);
                let URLOBJ = {
                  uri: response.uri,
                  name: response.name,
                  // size: response.size,
                  // index: index,
                  type: 'image/JPEG',
                };

                this.URLFromServerGeneratorForFeaturedImages(URLOBJ);

                this.setState(
                  {
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri,
                    RenderFeaturedImage: !this.state.RenderFeaturedImage,
                    setModalCameraVisible: false,
                    OBJforFeaturedImage: URLOBJ,
                  },
                  () => {
                    this.setData();
                  },
                );
              })
              .catch(err => {
                // console.log('err');
                Alert.alert('Something Went Wrong', err);
              });
        }
      }
    });
  };

  launchCameraForVideo = () => {
    let options = {
      mediaType: 'video',
      videoQuality: 'high',
      quality: 1,
      durationLimit: 45,
      allowsEditing: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
        saveToPhotos: true,
        waitUntilSaved: true,
        cameraRoll: true,
      },
    };
    ImagePicker.launchCamera(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        console.log(response, 'Response For Video Type and Name');
        this.setState(
          {
            filePath: response,
            fileData: response.data,
            // fileUri: response?.assets[0]?.uri,
            fileUriForVideo: response?.assets[0]?.uri,
            VideoName: response?.assets[0]?.fileName,
            VideoType: response?.assets[0]?.type,
            VideoShower: true,
          },
          () => {
            this.FileCompressor();
          },
        );
      }
    });
  };

  //working
  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        saveToPhotos: true,
        waitUntilSaved: true,
      },
      // selectionLimit: 1,
    };
    this.setState({setModalCameraVisible: false});
    ImagePicker.launchImageLibrary(options, response => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        {
          response?.assets[0]?.uri &&
            ImageResizer.createResizedImage(
              response?.assets[0]?.uri,
              250,
              250,
              'JPEG',
              50,
              0,
            )
              .then(response => {
                // console.log('resized image size', response);
                let URLOBJ = {
                  uri: response.uri,
                  name: response.name,
                  // size: response.size,
                  // index: index,
                  type: 'image/JPEG',
                };
                this.URLFromServerGeneratorForFeaturedImages(URLOBJ);

                this.setState(
                  {
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri,
                    RenderFeaturedImage: !this.state.RenderFeaturedImage,
                    setModalCameraVisible: false,
                  },
                  () => {
                    this.setData();
                  },
                );
              })
              .catch(err => {
                // console.log('err');
                Alert.alert('Something Went Wrong', err);
              });
        }
      }
    });
  };

  renderFileData = () => {
    if (this.state.fileData) {
      // console.log('renderFileData');
      return (
        <Image source={{uri: response?.assets[0]?.uri}} style={styles.images} />
      );
    } else {
      return (
        <Image
          source={require('../../../../assets/images/background_Login.png')}
          style={styles.images}
        />
      );
    }
  };

  renderFileUri() {
    if (this.state.fileUri) {
      return (
        <Image
          source={{uri: this.state.fileUri}}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
            // top: wp(3.5),
            bottom: wp(2.8),
            // resizeMode: 'contain',
          }}
        />
      );
    } else {
      return (
        <Image
          source={require('../../../../assets/images/background_Login.png')}
          style={styles.images}
        />
      );
    }
  }

  formatSizeUnits = bytes => {
    // if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    // else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    // else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    // else if (bytes > 1)           { bytes = bytes + " bytes"; }
    // else if (bytes == 1)          { bytes = bytes + " byte"; }
    // else                          { bytes = "0 bytes"; }
    bytes = (bytes / 1048576).toFixed(2);
    return bytes;
  };

  async FileCompressor() {
    const result = await VideoCompressor.compress(
      this.state.fileUriForVideo,
      {
        compressionMethod: 'auto',
      },
      progress => {
        if (backgroundMode) {
          // console.log('Compression Progress: ', progress);
        } else {
          // this.setstate({progress: 'Hamza'});
        }
      },
    );
    console.log(result, 'Result');
    let yourActualPath = `${result}?${new Date().getTime()}`;
    const metaData = await getVideoMetaData(yourActualPath);
    console.log(yourActualPath, 'yourActualPath in File Compressor');
    let item = {
      uri: result,
      name: this.state.VideoName,
      type: this.state.VideoType,
    };
    this.URLFromServerGeneratorForVideo(item);
    CameraRoll.save(result, 'Video')
      .then(onfulfilled => {
        console.log('saved');
        // console.log(onfulfilled, 'onfulfilled');

        // ToastAndroid.show(onfulfilled, ToastAndroid.SHORT);
      })
      .catch(error => {
        console.log(error, 'erro in catch');
      });
    return result;
  }

  renderFileUriForVideo() {
    if (this.state.fileUriForVideo) {
      return (
        <View style={{width: '100%'}}>
          <Video
            source={{uri: this.state.fileUriForVideo}}
            // Can be a URL or a local file.
            resizeMode={'contain'}
            // ref={player} // Store reference
            controls={true}
            repeat={true}
            fullscreen={true}
            muted={this.state.isMuted}
            // onBuffer={console.log('buffering')} // Callback when remote video is buffering
            // onError={err => console.warn(err)} // Callback when video cannot be loaded
            style={{
              // position: 'absolute',
              top: hp(2.5),
              left: 0,
              bottom: 0,
              right: 0,
              height: hp(25),
              width: '100%',
              // backgroundColor: '#ECECEC',
              // borderRadius: 15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <View
            style={{
              width: '100%',
              paddingHorizontal: wp(2),
              flexDirection: 'row',
              justifyContent: 'space-between',
              // alignItems: 'center',
              bottom: hp(22),
            }}>
            <TouchableOpacity
              onPress={() => this.setState({isMuted: !this.state.isMuted})}
              style={
                {
                  // height: 20,
                  // width: 24,
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // bottom: hp(20),
                }
              }>
              {this.state.isMuted ? (
                <Octicons name="mute" color={'#000'} size={25} />
              ) : (
                <Octicons name="unmute" color={'#000'} size={25} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this._onSelectLabel('address')}
              style={[{}]}>
              <View style={styles.mainLabel}>
                <TextGradient
                  icon={{
                    name: 'map-marker',
                    size: 16,
                  }}
                  text={this.state.Location}
                  style={{
                    fontSize: 16,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  VideoShower: false,
                  fileUriForVideo: '',
                  URIForVideoListingss: '',
                });
              }}
              style={{
                alignSelf: 'flex-start',
                borderRadius: 78,
                backgroundColor: '#DFA72C',
                padding: wp(1),
                left: wp(3),

                zIndex: 100,
              }}>
              <SvgXml width={wp(4)} height={wp(4)} xml={cross} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  setData = () => {
    // console.log(this.state.fileUri, 'this.state.fileUri');
    let ImageforPath = this.state.fileUri;
    let actualPath = ImageforPath.split('//');
    PhotoEditor.Edit({
      hiddenControls: [],
      path: actualPath[1],
      onDone: response => {
        let yourPath = 'file://' + response;
        // console.log(yourPath, 'yourPath');
        // console.log(response, 'response');
        let yourActualPath = `${yourPath}?${new Date().getTime()}`;
        // console.log(yourActualPath, 'yourActualPath');
        this.setState(
          {
            fileUri: yourActualPath,
            UIRenderer: true,
          },
          // () => {
          //   CameraRoll.save(yourActualPath, 'photo')
          //     .then(onfulfilled => {
          //       console.log('saved');
          //       console.log(onfulfilled, 'onfulfilled');
          //       // ToastAndroid.show(onfulfilled, ToastAndroid.SHORT);
          //     })
          //     .catch(error => {
          //       ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT);
          //     });
          // },
        );
      },
    });
  };
  onSelectedAddressLabel = address => {
    console.log(address.center, 'address.center');
    this.setState({
      Location: address.place_name,
      IntailCoordinates: address.center,
      ViewShoot: true,
    });
  };
  _onSelectLabel = type => {
    switch (type) {
      case 'address':
        this.props.navigation.navigate('StickerImplmentation', {
          onDone: this.onSelectedAddressLabel,
        });
    }
  };

  ViewShoot = () => {
    // console.log('ViewShoot');
    this.setState({ViewShoot: false}, () => {
      this.refs.viewShot.capture().then(uri => {
        // console.log('do something with ', uri);
        CameraRoll.save(uri, 'photo')
          .then(onfulfilled => {
            console.log('saved');
            console.log(onfulfilled, 'onfulfilled');
            this.setState({
              ViewShoot: true,
              UIRenderer: false,
              fileUri: uri,
              // fileUriForVideo: '',
              // VideoShower: false,
            });
            // ToastAndroid.show(onfulfilled, ToastAndroid.SHORT);
          })
          .catch(error => {
            ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT);
          });
      });
    });

    // captureRef(viewRef, {
    //   format: 'jpg',
    //   quality: 0.8,
    // }).then(
    //   uri => console.log('Image saved to', uri),
    //   error => console.error('Oops, snapshot failed', error),
    // );
  };

  FilterForArray = item => {
    let Array = [...this.state.Images];
    let ArrayofOtherImages = [...this.state.UploadOtherImagesArray];
    let data = Array.filter(obj => obj.uri !== item.uri);
    let Dummydata = ArrayofOtherImages.filter(
      obj => obj.ComparingURI !== item.uri,
    );
    console.log(Dummydata, 'Dummydata');

    // console.log(ArrayForOtherImagess, 'ArrayForOtherImagess');
    this.setState({Images: data, UploadOtherImagesArray: Dummydata});
  };

  FilterForFeaturedImage = () => {
    this.setState({
      RenderFeaturedImage: !this.state.RenderFeaturedImage,
      fileUri: '',
      URIForFeaturedImagesss: '',
    });
  };

  VideoCancelHandler = () => {
    this.setState({VideoShower: !this.state.VideoShower, fileUriForVideo: ''});
  };

  ValidatorHandler = () => {
    console.log(
      'ValidatorHandler',
      this.state.URIForVideoListingss.length,
      this.state.URIForFeaturedImagesss.length,
      this.state.UploadOtherImagesArray,
    );
    if (
      // this.state.URIForVideoListingss.length > 1 &&
      this.state.URIForFeaturedImagesss.length > 1 &&
      this.state.UploadOtherImagesArray.length > 0
    ) {
      this.props.navigation.navigate('Location', {
        AllURLS: {
          URIForVideoListingss: this.state.URIForVideoListingss,
          URIForFeaturedImagesss: this.state.URIForFeaturedImagesss,
          UploadOtherImagesArray: this.state.UploadOtherImagesArray,
          Decider: this.props.route.params.obj,
          Location: this.state.Location,
          IntailCoordinates: this.state.IntailCoordinates,
        },
      });
    } else {
      this.setState({setError: 'Please Upload All Images and Videos'});
    }
  };

  render() {
    console.log(this.props.route.params.obj.Decider, 'this Props');
    const {Decider} = this.props.route.params.obj;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <PreviewHeader name="Upload" />
        {!this.state.UIRenderer && (
          <ScrollView>
            <View style={{paddingHorizontal: hp(2)}}>
              {/* Modal For Video Uploader */}
              {this.state.Loading && (
                <Modal
                  onBackButtonPress={() => {
                    this.setState({Loading: false});
                  }}
                  isVisible={this.state.Loading}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={[
                      styles.cameraModalMain,
                      {
                        backgroundColor: 'white',
                        width: wp(60),
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: hp(25),
                      },
                    ]}>
                    <View style={[styles.container, styles.horizontal]}>
                      <ActivityIndicator size="large" color="#DFA72C" />
                      <Text>Video is Uploading</Text>
                    </View>
                  </View>
                </Modal>
              )}

              <Modal
                onBackButtonPress={() => {
                  this.setState({
                    setModalCameraVisible: !this.state.setModalCameraVisible,
                  });
                }}
                isVisible={this.state.setModalCameraVisible}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={[
                    styles.cameraModalMain,
                    {
                      backgroundColor: 'white',
                      width: wp(60),
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  ]}>
                  <Text style={styles.cameraModalText}>Select Options</Text>
                  <View style={styles.cameraModalButtonView}>
                    <TouchableOpacity
                      style={{
                        borderRadius: 10,
                        alignSelf: 'center',
                        backgroundColor: '#DFA72C',
                        flexDirection: 'row',
                        width: '50%',
                        padding: hp(1.5),
                        justifyContent: 'center',
                      }}
                      onPress={() => this.launchCamera()}>
                      <Icon name="camera" size={hp(3)} color="#fff" />
                      <Text
                        style={{
                          marginLeft: hp(1),
                          fontSize: hp(1.8),
                          color: '#fff',
                          fontWeight: '600',
                          justifyContent: 'center',
                          alignSelf: 'center',
                        }}>
                        Camera
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.launchImageLibrary();
                      }}
                      style={{
                        borderRadius: 10,
                        alignSelf: 'center',
                        backgroundColor: '#DFA72C',
                        flexDirection: 'row',
                        width: '40%',
                        padding: hp(1.5),
                        justifyContent: 'center',
                      }}>
                      <Icon name="image" size={hp(3)} color="#fff" />
                      <Text
                        style={{
                          marginLeft: hp(1),
                          fontSize: hp(1.8),
                          color: '#fff',
                          fontWeight: '600',
                          justifyContent: 'center',
                          alignSelf: 'center',
                        }}>
                        Gallery
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <Modal
                onBackButtonPress={() => {
                  this.setState({
                    setModalVisibleForOtherOption:
                      !this.state.setModalVisibleForOtherOption,
                  });
                }}
                isVisible={this.state.setModalVisibleForOtherOption}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={[
                    styles.cameraModalMain,
                    {
                      backgroundColor: 'white',
                      width: wp(60),
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  ]}>
                  <Text style={styles.cameraModalText}>Select Options</Text>
                  <View style={styles.cameraModalButtonView}>
                    <TouchableOpacity
                      style={{
                        borderRadius: 10,
                        alignSelf: 'center',
                        backgroundColor: '#DFA72C',
                        flexDirection: 'row',
                        width: '50%',
                        padding: hp(1.5),
                        justifyContent: 'center',
                      }}
                      onPress={() => this.PickImage()}>
                      <Icon name="camera" size={hp(3)} color="#fff" />
                      <Text
                        style={{
                          marginLeft: hp(1),
                          fontSize: hp(1.8),
                          color: '#fff',
                          fontWeight: '600',
                          justifyContent: 'center',
                          alignSelf: 'center',
                        }}>
                        Camera
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.launchLibrary();
                      }}
                      style={{
                        borderRadius: 10,
                        alignSelf: 'center',
                        backgroundColor: '#DFA72C',
                        flexDirection: 'row',
                        width: '40%',
                        padding: hp(1.5),
                        justifyContent: 'center',
                      }}>
                      <Icon name="image" size={hp(3)} color="#fff" />
                      <Text
                        style={{
                          marginLeft: hp(1),
                          fontSize: hp(1.8),
                          color: '#fff',
                          fontWeight: '600',
                          justifyContent: 'center',
                          alignSelf: 'center',
                        }}>
                        Gallery
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

              {/* Model End */}
              <View>
                <Text style={{color: '#DFA72C'}}>Upload Featured Video:</Text>
              </View>
              <View
                style={{
                  marginTop: hp(2),
                  height: hp(25),
                  backgroundColor: '#ECECEC',
                  borderRadius: 15,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {this.state.VideoShower ? (
                  <View style={{width: '100%'}}>
                    {this.renderFileUriForVideo()}
                  </View>
                ) : (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.launchCameraForVideo();
                      }}>
                      <SvgXml
                        style={{}}
                        width="29"
                        height="20"
                        xml={AddOption}
                      />
                    </TouchableOpacity>
                    <Text style={{color: '#DFA72C'}}>Add Video</Text>
                  </View>
                )}
              </View>
              <View style={{marginTop: hp(2)}}>
                <Text style={{color: '#DFA72C'}}>Upload Featured Image:</Text>
              </View>
              {this.state.RenderFeaturedImage ? (
                <View
                  style={{
                    marginTop: hp(2),
                    height: hp(25),

                    backgroundColor: '#ECECEC',
                    borderRadius: 15,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.FilterForFeaturedImage();
                    }}
                    style={{
                      alignSelf: 'flex-end',
                      borderRadius: 78,
                      backgroundColor: '#DFA72C',
                      padding: wp(1),
                      left: wp(3),
                      // top: wp(3.5),
                      zIndex: 100,
                    }}>
                    <SvgXml width={wp(4)} height={wp(4)} xml={cross} />
                  </TouchableOpacity>
                  {this.renderFileUri()}
                </View>
              ) : (
                <View
                  style={{
                    marginTop: hp(2),
                    // paddingVertical: hp(10),
                    height: hp(25),
                    backgroundColor: '#ECECEC',
                    borderRadius: 15,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({setModalCameraVisible: true});
                    }}>
                    <SvgXml style={{}} width="29" height="20" xml={AddOption} />
                  </TouchableOpacity>
                  <Text style={{color: '#DFA72C'}}>Add Image</Text>
                </View>
              )}
              <View style={{marginTop: hp(2)}}>
                <Text style={{color: '#DFA72C'}}>Upload Other Images:</Text>
              </View>
              <View
                style={{
                  marginTop: hp(2),
                  paddingVertical: hp(4),
                  backgroundColor: 'white',
                  borderRadius: 15,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderStyle: 'dotted',
                  borderRadiusColor: '#979BB5',
                }}>
                {this.state.RenderOtherImage ? (
                  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.state.Images.length > 0 ? (
                      <View>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                          {this.state.Images.map((item, index1) => {
                            return (
                              <View
                                key={index1}
                                style={{marginHorizontal: wp(5)}}>
                                <TouchableOpacity
                                  onPress={() => {
                                    // setImages([
                                    //   ...Images.slice(0, index1),
                                    //   ...Images.slice(index1 + 1, Images.length),
                                    // ]);
                                    this.FilterForArray(item);
                                  }}
                                  style={{
                                    alignSelf: 'flex-end',
                                    borderRadius: 78,
                                    backgroundColor: '#DFA72C',
                                    padding: wp(1),
                                    left: wp(3),
                                    top: wp(3.5),
                                    zIndex: 100,
                                  }}>
                                  <SvgXml
                                    width={wp(4)}
                                    height={wp(4)}
                                    xml={cross}
                                  />
                                </TouchableOpacity>

                                <Image
                                  source={{uri: item.uri}}
                                  style={{
                                    height: wp(35),
                                    width: wp(35),
                                    // margin: wp(5),
                                    borderRadius: 10,
                                  }}
                                />
                              </View>
                            );
                          })}
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: hp(2),
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              this.setState({
                                setModalVisibleForOtherOption:
                                  !this.state.setModalVisibleForOtherOption,
                              });
                              // this.PickImage();
                            }}>
                            <SvgXml
                              style={{}}
                              width="29"
                              height="20"
                              xml={AddOption}
                            />
                          </TouchableOpacity>
                          <Text style={{color: '#DFA72C'}}>Upload More</Text>
                        </View>
                      </View>
                    ) : (
                      this.setState({RenderOtherImage: false})
                    )}
                  </View>
                ) : (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          setModalVisibleForOtherOption:
                            !this.state.setModalVisibleForOtherOption,
                        });
                      }}>
                      <SvgXml
                        style={{}}
                        width="29"
                        height="20"
                        xml={AddOption}
                      />
                    </TouchableOpacity>
                    <Text style={{color: '#DFA72C'}}>Add Image</Text>
                  </View>
                )}
              </View>
              <View>
                <Text
                  style={{
                    color: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {this.state.setError}
                </Text>
              </View>
              <View style={{marginTop: hp(2)}}>
                <ButtonBottom name="Next" onPress={this.ValidatorHandler} />
              </View>
            </View>
          </ScrollView>
        )}
        {this.state.UIRenderer && (
          <ViewShot
            style={{flex: 1, backgroundColor: 'black'}}
            ref="viewShot"
            options={{format: 'jpg', quality: 0.8}}>
            <ImageBackground
              source={{
                uri: this.state.fileUri,
              }}
              resizeMode="contain"
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                // backgroundColor: 'red',
              }}>
              <Draggable x={50} y={50}>
                <TouchableOpacity
                  onPress={() => this._onSelectLabel('address')}
                  style={styles.labelItemWrapper}>
                  <View style={styles.mainLabel}>
                    <TextGradient
                      icon={{
                        name: 'map-marker',
                        size: 16,
                      }}
                      text={this.state.Location}
                      style={{
                        fontSize: 16,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </Draggable>
            </ImageBackground>
            {this.state.ViewShoot && (
              <TouchableOpacity
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  paddingRight: wp(4),
                  marginBottom: hp(3),
                }}
                onPress={() => {
                  this.ViewShoot();
                }}>
                <AntDesign name="picture" color={'white'} size={50} />
              </TouchableOpacity>
            )}
          </ViewShot>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cameraModalMain: {
    color: '#333',
    justifyContent: 'center',
  },
  cameraModalText: {
    textAlign: 'center',
    fontSize: hp(2),
    marginVertical: hp(2),
    color: '#333',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  cameraModalButtonView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(3),
    width: '100%',
    // paddin,
  },
  ImageCapture: {
    // backgroundColor: 'green',
    width: wp(70),
    height: hp(20),
    borderRadius: 8,
    // justifyContent: 'center',
    alignSelf: 'center',
    // marginHorizontal: hp(2.5),
  },
  backgroundVideo: {
    position: 'absolute',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  labelItemWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLabel: {
    paddingVertical: hp(1),
    flexDirection: 'row',
    paddingHorizontal: 10,
    // paddingVertical: 5,
    // height: 36,
    maxWidth: wp(80),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width,
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    justifyContent: 'center',
    padding: 10,
  },
});
