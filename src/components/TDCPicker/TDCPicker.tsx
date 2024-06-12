/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ItemProps, ItemSeletedProps} from '../../types';

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const DATA = [
  {
    id: '1',
    front: require('../../assets/tdc/card-black-front.png'),
    back: require('../../assets/tdc/card-black-back.png'),
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
    front: require('../../assets/tdc/card-red-front.png'),
    back: require('../../assets/tdc/card-red-back.png'),
    title: 'Negro',
  },
];

const TDCPicker = () => {
  const [show, setShow] = useState(false);

  const handleItemSelected = (item: ItemSeletedProps) => {
    console.log(123, item);
    setShow(prevValue => !prevValue);
  };

  const handleShow = () => {
    setShow(prevValue => !prevValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleShow} style={styles.comboBoton}>
        <Text style={styles.comboText}>
          {show ? 'Ocultar lista de Colores' : 'Mostrar Lista de colores'}
        </Text>
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
    flex: 1,
    height: 300,
  },
  item: {
    backgroundColor: '#0a065c',
    marginVertical: 1,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
  },
  comboBoton: {
    backgroundColor: '0081F1',
    height: 35,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comboText: {
    fontSize: 20,
    color: '#FFF',
  },
});
