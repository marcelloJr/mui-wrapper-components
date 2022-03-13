export default interface IInput {
  label: string;
  name: string;
  placeholder?: string;
  required?: true | false;
  disabled?: true | false;
  spans?: number[];
  style?: React.CSSProperties;
  defaultValue?: any;
  onChange?: (value: any) => void | undefined;
  maxLength?: number;
  minLength?: number;
  value?: any;
  helpText?: string;
}