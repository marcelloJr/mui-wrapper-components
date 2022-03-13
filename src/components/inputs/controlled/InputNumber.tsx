import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Controller } from 'react-hook-form';
import IInputNumber from '@interfaces/IInputNumber';
import { inputErrorHelper } from '@utils/helpers';
import Container from '@components/layouts/InputContainer';

const InputNumber: React.FC<IInputNumber> = (props) => {
  const { required, placeholder, name, label, disabled, spans,
    style, minLength, maxLength, currencyChar, helpText, onChange } = props;

  return (
    <Container style={style} spans={spans}>
      <Controller
        name={name}
        rules={{
          required,
          maxLength,
          minLength
        }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue, ref }, 
          fieldState: { error }
        }) => {
          return (
            <TextField
              label={label}
              helperText={inputErrorHelper(error?.type, { minLength, maxLength })}
              error={!!error}
              onChange={(event) => {
                if (onChange) onChange(event.target.value);
                fieldOnChange(event);
              }}
              value={fieldValue || ''}
              type='number'
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              InputProps={{ startAdornment: currencyChar ? <InputAdornment position='start'>{currencyChar}</InputAdornment> : null }}
              inputRef={ref}
              fullWidth
            />
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Container>
  )
}

export default InputNumber;