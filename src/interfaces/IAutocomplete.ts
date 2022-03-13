import IInput from './IInput';

export default interface IAutocomplete extends IInput {
  options: Array<any>;
  optionLabel?: string;
  optionValue?: string;
  onSelect?: (value: any) => void;
  emptyOptionsText?: string;
  clearText?: string;
  multiple?: boolean;
  placeholder?: string;
}