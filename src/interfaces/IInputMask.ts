import IInput from './IInput';
import IInputRestProps from './IInputRestProps';

export default interface IInputMask extends IInput, IInputRestProps { 
  mask: string | (string | RegExp)[];
}