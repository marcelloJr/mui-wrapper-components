import { Mask } from 'react-text-mask';
import IInput from './IInput';

export default interface IInputMask extends IInput { 
  mask: Mask | ((value: string) => Mask)
}