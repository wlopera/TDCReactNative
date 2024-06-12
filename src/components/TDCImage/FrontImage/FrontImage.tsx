/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {FrontImageProps} from '../../../types';

const FrontImage: FC<FrontImageProps> = ({
  url,
  urlLogo,
  number = '**** **** **** ****',
  name = 'NOMBRE',
  date = 'fecha',
}) => {
  return (
    <View style={styles.constainer}>
      <Image source={url} style={styles.image} />

      <Image source={urlLogo} style={styles.logo} />

      <View style={styles.numberView}>
        <Text style={styles.number}>{number}</Text>
      </View>

      <View style={styles.nameView}>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.validView}>
        <Text style={styles.valid}>VALIDO/HASTA</Text>
      </View>

      <View style={styles.dateView}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default FrontImage;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    margin: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  logo: {
    position: 'absolute',
    width: '22%',
    height: '22%',
    top: 20,
    right: 30,
    borderRadius: 4,
  },
  numberView: {
    position: 'absolute',
    top: 100,
    right: 25,
    alignItems: 'center',
    width: '90%',
  },
  number: {
    color: '#FFF',
    fontSize: 30,
  },
  nameView: {
    position: 'absolute',
    top: 170,
    left: 20,
  },
  name: {
    color: '#FFF',
    fontSize: 20,
  },
  validView: {
    position: 'absolute',
    top: 160,
    right: 30,
  },
  valid: {
    color: '#FFF',
    fontSize: 12,
  },
  dateView: {
    position: 'absolute',
    top: 180,
    right: 40,
  },
  date: {
    color: '#FFF',
    fontSize: 25,
  },
});
