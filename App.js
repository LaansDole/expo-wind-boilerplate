import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
const PlaceholderImg = require('./assets/images/background-image.png');

import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import './global.css';
import "./nativewind-output";

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.')
    };
  }

  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImg}
          selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View></View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 20,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItem: 'center',
  }
});
