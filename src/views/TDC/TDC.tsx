/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import FrontImage from '../../components/TDCImage/FrontImage';
import TypeImageMap from '../../components/TypeImage/TypeImageMap';

const MyScreen = () => {
  const [urlLogo, setUrlLogo] = useState(
    require('../../assets/logos/master-logo.png'),
  );
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleLogoPress = (url: ImageSourcePropType) => {
    setUrlLogo(url);
  };

  const handleNumberPress = (text: string) => {
    console.log(123, text.length, text);
    setNumber(text.length === 0 ? '**** **** **** ****' : text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.nortContainer}>
        <FrontImage urlLogo={urlLogo} number={number} name={name} date={date} />
        <TypeImageMap press={handleLogoPress} />
      </View>

      <View style={styles.sourthContainer}>
        <ScrollView>
          <TextInput
            style={styles.numberInput}
            placeholder="Número de tarjeta"
            value={number}
            onChangeText={handleNumberPress}
          />
          <TextInput
            style={styles.nameInput}
            placeholder="Nombre del usuario"
            value={name}
            onChangeText={input => setName(input.toUpperCase())}
          />
          <TextInput
            style={styles.dateInput}
            placeholder="Fecha de expedición"
            value={date}
            onChangeText={input => setDate(input.toUpperCase())}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nortContainer: {
    height: 300,
    backgroundColor: '#056740',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    resizeMode: 'contain',
  },
  sourthContainer: {
    flex: 1,
    backgroundColor: '#056740',
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  numberInput: {
    borderRadius: 4,
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 10,
    width: '95%',
    backgroundColor: '#52e16aec',
    fontSize: 24,
    color: '#000',
  },
  nameInput: {
    borderRadius: 4,
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 10,
    width: '95%',
    backgroundColor: '#52e16aec',
    fontSize: 24,
    color: '#000',
  },
  dateInput: {
    borderRadius: 4,
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 10,
    width: '95%',
    backgroundColor: '#52e16aec',
    fontSize: 24,
    color: '#000',
  },
  space: {
    paddingBottom: 20,
  },
});

export default MyScreen;
