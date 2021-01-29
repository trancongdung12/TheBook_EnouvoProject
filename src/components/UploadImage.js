import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import ImagePicker, { launchCamera , launchImageLibrary} from 'react-native-image-picker';

const UploadImage = () => {
  const [filePath, setPath] = useState('');
  const [fileData, setData] = useState('');
  const [fileUri, settUri] = useState('');
  const chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        setPath(response);
        setData(response.data);
        settUri(response.uri);
      }
    });
  };
  const launchCamera = () => {};
  const launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        setPath(response);
        setData(response.data);
        settUri(response.uri);
      }
    });
  };
  return (
    <View style={styles.body}>
      <Text style={{ textAlign: 'center', fontSize: 20, paddingBottom: 10 }}>
        Pick Images from Camera & Gallery
      </Text>
      <View style={styles.ImageSections}>
        <View>
          <Text style={{ textAlign: 'center' }}>Base 64 String</Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center' }}>File Uri</Text>
        </View>
      </View>

      <View style={styles.btnParentSection}>
        <TouchableOpacity onPress={chooseImage} style={styles.btnSection}>
          <Text style={styles.btnText}>Choose File</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={launchCamera} style={styles.btnSection}>
          <Text style={styles.btnText}>Directly Launch Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={launchImageLibrary} style={styles.btnSection}>
          <Text style={styles.btnText}>Directly Launch Image Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadImage;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
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
});
