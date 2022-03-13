import React, { forwardRef } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import ReactInputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';
import IInputMask from '@interfaces/IInputMask';
import { inputErrorHelper } from '@utils/helpers';
import Container from '@components/layouts/InputContainer';

const InputMask: React.FC<IInputMask> = (props) => {
  const { label, name, mask, style, required, disabled, placeholder, spans, 
    minLength, maxLength, helpText, onChange } = props;

  const Mask = forwardRef((props: any, inputRef) => {
    return (
      <ReactInputMask {...props} mask={mask} inputRef={inputRef} />
    )
  });

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
              required={required}
              helperText={inputErrorHelper(error?.type, { minLength, maxLength })}
              error={!!error}
              label={label}
              onChange={(event) => {
                if (onChange) onChange(event.target.value);
                fieldOnChange(event);
              }}
              disabled={disabled}
              defaultValue={fieldValue}
              InputLabelProps={{ shrink: !!fieldValue }}
              InputProps={{ inputComponent: Mask }}
              inputRef={ref}
              placeholder={placeholder} 
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

export default InputMask;