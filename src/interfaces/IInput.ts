export default interface IInput {
  label: string;
  name: string;
  required?: true | false;
  disabled?: true | false;
  spans?: number[];
  style?: React.CSSProperties;
  onChange?: (value: any) => void | undefined;
  helpText?: string;
}