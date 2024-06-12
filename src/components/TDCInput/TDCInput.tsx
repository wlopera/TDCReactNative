/* eslint-disable prettier/prettier */
import {TextInput, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {TextNumberProps} from '../../types';

const TDCInput: FC<TextNumberProps> = ({value, onChange}) => {
  const formatCardNumber = (number: string) => {
    // Elimina todos los caracteres que no sean dígitos
    const cleaned = ('' + number).replace(/\D/g, '');
    // Aplica el formato: cada 4 dígitos se agrega un espacio
    const match = cleaned.match(/.{1,4}/g);

    // Generar numero formateado a mostrar en la TDC
    const input = number.replaceAll(' ', '');
    let data = input;
    for (let index = 0; index < 16 - input.length; index++) {
      data = data + '*';
    }
    const cleanedData = data.replaceAll(' ', '');
    const matchData = cleanedData.match(/.{1,4}/g);

    const result = match ? match.join(' ') : number;
    const text = matchData ? matchData.join(' ') : data;

    onChange(result, text);
  };

  return (
    <TextInput
      style={styles.textInput}
      placeholder="Número de tarjeta"
      value={value}
      onChangeText={formatCardNumber}
      maxLength={19} // 16 numeros y 3 espacios
      keyboardType="numeric"
    />
  );
};

export default TDCInput;

const styles = StyleSheet.create({
  textInput: {
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
});
