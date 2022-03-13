import React from 'react';
import { FormHelperText, Grid, TextField } from '@mui/material';
import ReactInputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';
import { validationsHelpers } from '@utils/ValidationsHelpers';
import IInputMask from '@interfaces/IInputMask';

const InputMask: React.FC<IInputMask> = (props) => {
  const { label, name, mask, style, required, disabled, span, minLength, maxLength, helpText, onChange } = props;

  const Mask = (props: any) => {
    const { inputRef, ...others } = props;
    return (
      <ReactInputMask {...others} mask={mask} />
    )
  };

  return (
    <Grid style={style} item xs={span ?? 12}>
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
              helperText={error ? validationsHelpers(error.type, { minLength, maxLength }) : null}
              error={!!error}
              label={label}
              name={name}
              onChange={(event) => {
                if (onChange) onChange(event.target.value);
                fieldOnChange(event);
              }}
              disabled={disabled}
              defaultValue={fieldValue}
              InputLabelProps={{
                shrink: !!fieldValue
              }}
              InputProps={{
                inputComponent: Mask
              }}
              inputRef={ref}
              fullWidth
            />
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Grid>
  );
}

export default InputMask;