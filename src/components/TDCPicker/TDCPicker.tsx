/* eslint-disable prettier/prettier */
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import {ItemProps, ItemSeletedProps, TDCPickerProps} from '../../types';

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const DATA = [
  {
    id: '1',
    front: require('../../assets/tdc/card-red-front.png'),
    back: require('../../assets/tdc/card-red-back.png'),
    title: 'Rojo',
  },

  {
    id: '2',
    front: require('../../assets/tdc/card-blue-front.png'),
    back: require('../../assets/tdc/card-blue-back.png'),
    title: 'Azul',
  },
  {
    id: '3',
    front: require('../../assets/tdc/card-black-front.png'),
    back: require('../../assets/tdc/card-black-back.png'),
    title: 'Negro',
  },
];

const TDCPicker: FC<TDCPickerProps> = ({press}) => {
  const [show, setShow] = useState(false);

  const handleItemSelected = (item: ItemSeletedProps) => {
    press(item.front, item.back);
    setShow(prevValue => !prevValue);
  };

  const handleShow = () => {
    setShow(prevValue => !prevValue);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleShow} style={styles.comboBoton}>
        <Text style={styles.comboText}>{show ? 'Ocultar' : 'Color'}</Text>
      </TouchableOpacity>
      {show && (
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleItemSelected(item)}>
              <Item title={item.title} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default TDCPicker;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 300,
  },
  item: {
    backgroundColor: '#e6e4e4',
    marginVertical: 1,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#a19e9e',
  },
  title: {
    fontSize: 24,
    color: '#000',
  },
  comboBoton: {
    backgroundColor: '#0081F1',
    height: 35,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  comboText: {
    fontSize: 20,
    color: '#FFF',
  },
});
