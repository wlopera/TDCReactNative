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
  url: ImageSourcePropType;
  urlLogo: ImageSourcePropType;
  number: string;
  name: string;
  date: string;
};

export type TextNumberProps = {
  value: string;
  onChange: (value: string, text: string) => void;
};

export type TextDateProps = {
  value: string;
  onChange: (text: string) => void;
};

export type BackImageProps = {
  url: ImageSourcePropType;
  cvc: string;
};

export type ItemProps = {title: string};

export type ItemSeletedProps = {
  id: string;
  front: ImageSourcePropType;
  back: ImageSourcePropType;
  title: string;
};

export type TDCPickerProps = {
  press: (front: ImageSourcePropType, back: ImageSourcePropType) => void;
};
