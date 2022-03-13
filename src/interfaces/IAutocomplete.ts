import IInput from './IInput';

export default interface IAutocomplete extends IInput {
  options: Array<any>,
  onSelect?: (value: any) => void,
  emptyOptionsText?: string,
  clearText?: string,
  multiple?: boolean
}