/* eslint-disable prettier/prettier */
import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import TypeImageItem from '../TypeImageItem';
import {TypeImageActionProps} from '../../../types';

const TypeImageMap: FC<TypeImageActionProps> = ({press}) => {
  return (
    <View style={styles.constainer}>
      <TypeImageItem
        url={require('../../../assets/logos/visa-logo.png')}
        press={press}
      />
      <TypeImageItem
        url={require('../../../assets/logos/american-logo.png')}
        press={press}
      />
      <TypeImageItem
        url={require('../../../assets/logos/master-logo.png')}
        press={press}
      />
      <TypeImageItem
        url={require('../../../assets/logos/paypal-logo.png')}
        press={press}
      />
      <TypeImageItem
        url={require('../../../assets/logos/discover-logo.png')}
        press={press}
      />
    </View>
  );
};

export default TypeImageMap;

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    width: '100%',
  },
});
