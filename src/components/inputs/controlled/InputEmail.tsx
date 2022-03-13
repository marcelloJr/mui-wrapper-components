import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import IInputEmail from '@interfaces/IInputEmail';
import { inputErrorHelper } from '@utils/helpers';
import Container from '@components/layouts/InputContainer';

const InputText: React.FC<IInputEmail> = (props) => {
  const { required, placeholder, name, label, disabled, spans, style, helpText, 
    maxLength, minLength, onChange } = props;

  return (
    <Container style={style} spans={spans}>
      <Controller
        name={name}
        rules={{
          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          required,
          maxLength,
          minLength
        }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue, ref }, 
          fieldState: { error }
        }) => {
          const type = error && error.type === 'pattern' ? 'email' : error?.type;

          return (
            <TextField
              label={label}
              helperText={inputErrorHelper(type, { minLength, maxLength })}
              error={!!error}
              onChange={(event) => {
                if (onChange) onChange(event.target.value);
                fieldOnChange(event);
              }}
              value={fieldValue || ''}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              type='email'
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

export default InputText;