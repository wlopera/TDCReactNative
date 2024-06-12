/* eslint-disable prettier/prettier */
import {StyleSheet, TextInput} from 'react-native';
import React, {FC} from 'react';
import {TextDateProps} from '../../types';

const TDCDate: FC<TextDateProps> = ({value, onChange}) => {
  const formatDate = (input: string) => {
    let data = input.replace('/', '');

    // validar el mes
    if (Number(data.substring(0, 2)) > 12) {
      return;
    }
    if (data.length > 1) {
      data = data.substring(0, 2) + '/' + data.substring(2, data.length + 1);
    }
    if (data.length === 3 && input === data) {
      data = data.replace('/', '');
    }

    onChange(data);
  };

  return (
    <TextInput
      style={styles.textInput}
      placeholder="F. expedición"
      value={value}
      maxLength={5}
      onChangeText={formatDate}
      keyboardType="numeric"
    />
  );
};

export default TDCDate;

const styles = StyleSheet.create({
  textInput: {
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
});
