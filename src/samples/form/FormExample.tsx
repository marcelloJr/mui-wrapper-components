import React from 'react';
import Form from '@components/form/Form';
import InputText from '@components/inputs/controlled/InputText';
import DatePicker from '@components/inputs/controlled/DatePicker';
import TimePicker from '@components/inputs/controlled/TimePicker';
import Autocomplete from '@components/inputs/controlled/Autocomplete';
import formService from '@samples/services/form';

const FormExample: React.FC = () => {
  const favoriteFood = [
    {value: 'food_01', label: 'Banana'},
    {value: 'food_02', label: 'Apple'},
    {value: 'food_03', label: 'Pinneaple'},
    {value: 'food_04', label: 'Orange'}
  ];

  return (
    <Form
      service={formService()}
    >
      <InputText 
        label='Name'
        name='name'
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <InputText 
        label='Lastname'
        name='lastname'
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <DatePicker
        label='Birthdate'
        name='birthdate'
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <TimePicker 
        label='Lunch time'
        name='lunch_time'
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <Autocomplete
        label='Select your favorite fruit'
        name='favorite_food'
        options={favoriteFood}
        spans={[12, 4, 4, 4, 4]}
        required
      />
      <Autocomplete
        label='Select yours favorite fruit'
        name='favorites_food'
        options={favoriteFood}
        spans={[12, 4, 4, 4, 4]}
        multiple
        required
      />
    </Form>
  )
}

export default FormExample;