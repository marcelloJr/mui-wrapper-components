import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Controller } from 'react-hook-form';
import { FormHelperText, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import IInputPassword from '@interfaces/IInputPassword';
import { validationsHelpers } from '@utils/ValidationsHelpers';

const InputPassword: React.FC<IInputPassword> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { required, placeholder, name, label, disabled, span, 
    helpText, style, minLength, maxLength, onChange } = props;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
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
              label={label}
              helperText={error ? validationsHelpers(error.type, { minLength, maxLength }) : null}
              error={!!error}
              onChange={(event) => {
                if (onChange) onChange(event.target.value);
                fieldOnChange(event);
              }}
              value={fieldValue || ''}
              placeholder={placeholder}
              disabled={disabled}
              fullWidth
              required={required}
              type={showPassword ? 'text' : 'password'}
              inputProps={{
                maxLength: maxLength
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              inputRef={ref}
            />
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Grid>
  )
}

export default InputPassword;