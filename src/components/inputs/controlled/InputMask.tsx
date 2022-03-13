import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ReactInputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';
import IInputMask from '@interfaces/IInputMask';
import { responsivityHelper, inputErrorHelper } from '@utils/helpers';

const InputMask: React.FC<IInputMask> = (props) => {
  const { label, name, mask, style, required, disabled, spans, minLength, maxLength, helpText, onChange } = props;

  const Mask = (props: any) => {
    const { inputRef, ...others } = props;
    return (
      <ReactInputMask {...others} mask={mask} />
    )
  };

  return (
    <Grid
      style={style}  
      xs={responsivityHelper('xs', spans)}  
      sm={responsivityHelper('sm', spans)} 
      md={responsivityHelper('md', spans)} 
      lg={responsivityHelper('lg', spans)} 
      xl={responsivityHelper('xl', spans)}
      item
    >
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
              helperText={error ? inputErrorHelper(error.type, { minLength, maxLength }) : null}
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