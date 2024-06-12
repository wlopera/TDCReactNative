/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  ImageSourcePropType,
  Button,
} from 'react-native';
import FrontImage from '../../components/TDCImage/FrontImage';
import TypeImageMap from '../../components/TypeImage/TypeImageMap';
import TDCInput from '../../components/TDCInput';
import TDCDate from '../../components/TDCDate';
import BackImage from '../../components/TDCImage/BackImage';
import TDCPicker from '../../components/TDCPicker/TDCPicker';

const NUMBER_BASE = '**** **** **** ****';

const TDC = () => {
  const [urlLogo, setUrlLogo] = useState(
    require('../../assets/logos/master-logo.png'),
  );
  const [number, setNumber] = useState('');
  const [textNumber, setTextNumber] = useState(NUMBER_BASE);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [isCVC, setIsCVC] = useState(false);

  const handleLogoPress = (url: ImageSourcePropType) => {
    if (isCVC) {
      return;
    }
    setUrlLogo(url);
  };

  const handleClean = () => {
    setNumber('');
    setTextNumber(NUMBER_BASE);
    setName('');
    setDate('');
    setCvc('');
  };

  const handleNumber = (value: string, text: string) => {
    setNumber(value);
    setTextNumber(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.nortContainer}>
        <View style={styles.botton}>
          <TDCPicker />
          <Button title="Limpiar" onPress={handleClean} />
        </View>

        {isCVC ? (
          <BackImage cvc={cvc} />
        ) : (
          <FrontImage
            urlLogo={urlLogo}
            number={textNumber}
            name={name}
            date={date}
          />
        )}

        <TypeImageMap press={handleLogoPress} />
      </View>

      <View style={styles.sourthContainer}>
        <ScrollView>
          <TDCInput value={number} onChange={handleNumber} />
          <TextInput
            style={styles.nameInput}
            placeholder="Nombre del usuario"
            value={name}
            maxLength={20}
            onChangeText={input => setName(input.toUpperCase())}
          />
          <View style={styles.dataView}>
            <TDCDate value={date} onChange={setDate} />
            <TextInput
              style={styles.cvcInput}
              placeholder="CVC"
              value={cvc}
              maxLength={3}
              onChangeText={setCvc}
              keyboardType="numeric"
              onFocus={() => setIsCVC(true)}
              onBlur={() => setIsCVC(false)}
            />
          </View>
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
    height: 320,
    backgroundColor: '#FFF',
  },
  botton: {
    width: 300,
    height: 35,
    alignSelf: 'flex-end',
    right: 25,
    margin: -8,
    flexDirection: 'row',
    zIndex: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    resizeMode: 'contain',
  },
  sourthContainer: {
    flex: 1,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  nameInput: {
    borderRadius: 4,
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 10,
    width: '95%',
    borderWidth: 1,
    borderColor: '#a19e9e',
    fontSize: 24,
    color: '#000',
  },
  cvcInput: {
    borderRadius: 4,
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 10,
    width: '45%',
    borderWidth: 1,
    borderColor: '#a19e9e',
    fontSize: 24,
    color: '#000',
  },
  dataView: {flexDirection: 'row'},
});

export default TDC;
