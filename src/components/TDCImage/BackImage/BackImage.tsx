/* eslint-disable prettier/prettier */
import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {BackImageProps} from '../../../types';

const BackImage: FC<BackImageProps> = ({url, cvc}) => {
  const fadeAnim = useState(new Animated.Value(0))[0];
  const [showValue, setShowValue] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setShowValue(true);
    });
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={url}
        style={[styles.image, {opacity: fadeAnim}]}
      />
      {showValue && (
        <View style={styles.cvcView}>
          <Text style={styles.cvc}>{cvc}</Text>
        </View>
      )}
    </View>
  );
};

export default BackImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  cvcView: {
    position: 'absolute',
    top: 95,
    right: 85,
  },
  cvc: {
    color: '#000',
    fontSize: 25,
  },
});
