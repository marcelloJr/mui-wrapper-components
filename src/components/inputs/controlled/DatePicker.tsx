import React from 'react';
import { DesktopDatePicker } from '@mui/lab';
import { FormControl, FormHelperText, Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import IDatePicker from '@interfaces/IDatePicker';
import { validationsHelpers } from '@utils/ValidationsHelpers';

const DatePicker: React.FC<IDatePicker> = (props) => {
  const { label, placeholder, helpText, span, style, name, required, disabled, onDateChange } = props;

  return (
    <Grid style={style} item xs={span ?? 12}>
      <Controller
        name={name}
        rules={{ required }}
        render={({ 
          field: { onChange: fieldOnChange, ref, value: fieldValue }, 
          fieldState: { error }
        }) => {
          return (
            <FormControl error={!!error} fullWidth>
              <DesktopDatePicker
                label={label}
                value={fieldValue}
                onChange={(value) => {
                  if (onDateChange) onDateChange(value);
                  fieldOnChange(value)
                }}
                renderInput={(params: any) =>
                  <TextField {...params} placeholder={placeholder} value={fieldValue} error={!!error} required={required} />
                }
                disabled={disabled}
                inputRef={ref}
              />
              <FormHelperText error>{error ? validationsHelpers(error.type, {}) : ''}</FormHelperText>
            </FormControl>
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Grid>
  );
}

export default DatePicker;