export interface ISelectOption {
  label: string | number;
  value: string | number;
} 

export default interface ISelect { 
  label: string;
  name: string;
  required?: true | false;
  options: Array<ISelectOption>;
  defaultValue?: any;
  onSelect?: (e: any) => void | undefined;
  spans?: number[];
  style?: any;
  value?: any;
  control?: any;
  disabled?: true | false;
  helpText?: string;
}