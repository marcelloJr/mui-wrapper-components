import { ReactInputMask } from 'react-input-mask';
import IInput from './IInput';

export default interface IInputMask extends IInput { 
  mask: ReactInputMask | ((value: string) => ReactInputMask);
}