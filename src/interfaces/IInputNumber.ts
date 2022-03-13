import IInput from './IInput';
import IInputRestProps from './IInputRestProps';

export default interface IInputNumber extends IInput, IInputRestProps { 
  style?: any;
  currencyChar?: string;
}