import IInput from "./IInput";

export interface ISelectOption {
  label: string | number;
  value: string | number;
} 

export default interface ISelect extends IInput { 
  options: Array<ISelectOption>;
  onSelect?: (e: any) => void | undefined;
  placeholder?: string;
}