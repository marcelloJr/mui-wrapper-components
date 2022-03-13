import React from 'react';
import { FormHelperText, FormLabel, Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import ITimePicker from '@interfaces/ITimePicker';
import { validationsHelpers } from '@utils/ValidationsHelpers';

const TimePicker: React.FC<ITimePicker> = (props) => {
  const { label, span, style, name, required, disabled, helpText, onChange } = props;

  return (
    <Grid style={style} item xs={span ?? 12}>
      <Controller
        name={name}
        rules={{ required }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue, ref }, 
          fieldState: { error }
        }) => {
          return (
            <>
              <FormLabel>{label}</FormLabel>
              <TextField
                value={fieldValue}
                type='time'
                onChange={(value) => {
                  if (onChange) onChange(value);
                  fieldOnChange(value)
                }}
                required={required}
                disabled={disabled}
                inputRef={ref}
                fullWidth
              />
              <FormHelperText error>{error ? validationsHelpers(error.type, {}) : ''}</FormHelperText>
            </>
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Grid>
  )
}

export default TimePicker;