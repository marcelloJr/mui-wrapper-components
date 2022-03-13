import { GridSize } from '@mui/material';

export default interface IInput {
  label: string,
  name: string,
  placeholder?: string,
  required?: true | false,
  disabled?: true | false,
  span?: GridSize,
  style?: React.CSSProperties,
  defaultValue?: any,
  onChange?: (value: any) => void | undefined,
  maxLength?: number,
  minLength?: number,
  value?: any,
  helpText?: string
}