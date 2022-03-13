import IInput from './IInput';

export interface ICheckboxesOption {
  label: string,
  value?: string | number
}

export default interface ICheckboxes extends IInput { 
  options: Array<ICheckboxesOption>
}