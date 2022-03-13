import IInput from './IInput';
import IInputRestProps from './IInputRestProps';

export default interface IInputText extends IInput, IInputRestProps { 
  multiline?: true | false;
}