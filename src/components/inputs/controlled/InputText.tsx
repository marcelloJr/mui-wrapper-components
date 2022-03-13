import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import IInputText from '@interfaces/IInputText';
import { inputErrorHelper } from '@utils/helpers';
import Container from '@components/layouts/InputContainer';

const InputText: React.FC<IInputText> = (props) => {
  const { required, placeholder, name, label, disabled, spans, style,
    maxLength, minLength, multiline, helpText, onChange } = props;

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
          field: { onChange: fieldOnChange, ref, value: fieldValue }, 
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
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              multiline={multiline}
              rows={multiline ? 4 : 0}
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
  );
}

export default InputText;