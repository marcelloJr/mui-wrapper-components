import React from 'react';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { Controller } from 'react-hook-form';
import IRadioButtons from '@interfaces/IRadioButtons';

const RadioButtons: React.FC<IRadioButtons> = (props) => {
  const { label, name, row, options, span, style, defaultValue,
    labelStyle, disabled, required, helpText, onChange } = props;

  return (
    <Grid style={style} item xs={span ?? 12}>
      <Controller
        name={name}
        rules={{ required }}
        defaultValue={defaultValue}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue, ref }
        }) => {
          return (
            <FormControl component='fieldset' disabled={disabled} fullWidth>
              <FormLabel component='legend' style={labelStyle} required={required}>{label}</FormLabel>
              <RadioGroup
                name={name}
                row={row}
                value={fieldValue}
                defaultValue={defaultValue}
                onChange={(_, value) => {
                  if (onChange) onChange(value);
                  fieldOnChange(value);
                }}
                ref={ref}
              >
                {options.map(option => <FormControlLabel value={option.value} control={<Radio />} label={option.label} />)}
              </RadioGroup>
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

export default RadioButtons;