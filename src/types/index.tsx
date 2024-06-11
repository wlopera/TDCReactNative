/* eslint-disable prettier/prettier */
import {ImageSourcePropType} from 'react-native';

export type TypeImageItemProps = {
  url: ImageSourcePropType;
};

export type TypeImageActionProps = {
  press: (url: ImageSourcePropType) => void;
};

export type TypeImageProps = TypeImageItemProps & TypeImageActionProps;

export type FrontImageProps = {
  urlLogo: ImageSourcePropType;
  number: string;
  name: string;
  date: string;
};
