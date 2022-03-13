import React from 'react';
import IInput from './IInput';

export interface IRadioButtonOption {
  value: string | number | boolean;
  label: string;
}

export default interface IRadioButtons extends IInput { 
  options: Array<IRadioButtonOption>;
  row?: true | false;
  labelStyle?: React.CSSProperties;
}