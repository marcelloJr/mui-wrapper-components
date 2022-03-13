import React from 'react';
import Form from '@components/form/Form';
import InputText from '@components/inputs/controlled/InputText';
import InputEmail from '@components/inputs/controlled/InputEmail';
import Checkboxes from '@components/inputs/controlled/Checkboxes';
import DatePicker from '@components/inputs/controlled/DatePicker';
import TimePicker from '@components/inputs/controlled/TimePicker';
import Autocomplete from '@components/inputs/controlled/Autocomplete';
import formService from '@samples/services/form';
import InputFile from '@components/inputs/controlled/InputFile';
import InputMask from '@components/inputs/controlled/InputMask';

const FormExample: React.FC = () => {
  const favoritesFoods = [
    {value: 'food_01', label: 'Banana'},
    {value: 'food_02', label: 'Apple'},
    {value: 'food_03', label: 'Pinneaple'},
    {value: 'food_04', label: 'Orange'}
  ];

  const checkboxes = [
    {value: 'checkbox_01', label: 'Value 01'},
    {value: 'checkbox_02', label: 'Value 02'},
    {value: 'checkbox_03', label: 'Value 03'},
    {value: 'checkbox_04', label: 'Value 04'}
  ];

  return (
    <Form
      service={formService()}
    >
      <InputText 
        label='Text'
        name='text'
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <InputEmail 
        label='Email'
        name='email'
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <DatePicker
        label='Date Picker'
        name='datepicker'
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <TimePicker 
        label='Time Picker'
        name='timepicker'
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <Autocomplete
        label='Select'
        name='select'
        options={favoritesFoods}
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <Autocomplete
        label='Multiple Select'
        name='multiple_select'
        options={favoritesFoods}
        spans={[12, 4, 4, 4, 4]}
        multiple
        required
      />
      <InputFile 
        label='File'
        name='file'
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <InputMask 
        label='Mask'
        name='mask'
        mask='(99) 99999-9999'
      />
      <Checkboxes
        label='Checkboxes'
        name='checkboxes'
        options={checkboxes}
        spans={[6, 4, 4, 4, 4]}
        required
      />
    </Form>
  )
}

export default FormExample;