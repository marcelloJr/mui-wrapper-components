import IInput from './IInput';

export default interface IDatePicker extends IInput {
  onDateChange?: (value: any) => void
}