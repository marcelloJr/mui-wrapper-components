import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Controller } from 'react-hook-form';
import IRadioButtons from '@interfaces/IRadioButtons';
import { responsivityHelper } from '@utils/helpers';

const RadioButtons: React.FC<IRadioButtons> = (props) => {
  const { label, name, row, options, spans, style, defaultValue,
    labelStyle, disabled, required, helpText, onChange } = props;

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