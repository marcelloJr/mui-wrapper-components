import { GridSize } from '@mui/material';

export interface ISelectOption {
  label: string | number,
  value: string | number
} 

export default interface ISelect { 
  label: string,
  name: string,
  required?: true | false,
  options: Array<ISelectOption>,
  defaultValue?: any,
  onSelect?: (e: any) => void | undefined,
  span?: GridSize,
  style?: any,
  value?: any,
  control?: any,
  disabled?: true | false,
  helpText?: string
}