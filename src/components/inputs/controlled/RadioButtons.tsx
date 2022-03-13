import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Controller } from 'react-hook-form';
import IRadioButtons from '@interfaces/IRadioButtons';
import Container from '@components/layouts/InputContainer';

const RadioButtons: React.FC<IRadioButtons> = (props) => {
  const { label, name, row, options, spans, style,
    labelStyle, disabled, required, helpText, onChange } = props;

  return (
    <Container style={style} spans={spans}>
      <Controller
        name={name}
        rules={{ required }}
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
    </Container>
  );
}

export default RadioButtons;