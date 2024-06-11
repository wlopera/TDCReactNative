/* eslint-disable prettier/prettier */
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {TypeImageProps} from '../../../types';

const TypeImageItem: FC<TypeImageProps> = ({url, press}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => press(url)}>
      <Image source={url} style={styles.image} />
    </TouchableOpacity>
  );
};

export default TypeImageItem;

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 35,
    margin: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
