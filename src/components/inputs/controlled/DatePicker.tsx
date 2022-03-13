import React from 'react';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import IDatePicker from '@interfaces/IDatePicker';
import { inputErrorHelper, regexHelper } from '@utils/helpers';
import Container from '@components/layouts/InputContainer';
import { format } from 'date-fns';

const DatePicker: React.FC<IDatePicker> = (props) => {
  const { label, placeholder, helpText, spans, style, name, required, disabled, onChange } = props;

  return (
    <Container style={style} spans={spans}>
      <Controller
        name={name}
        rules={{ required, pattern: regexHelper().date }}
        render={({ 
          field: { onChange: fieldOnChange, ref, value: fieldValue = null}, 
          fieldState: { error }
        }) => {
          let errorHelpText = error?.type === 'pattern' ? inputErrorHelper('pattern.date') : inputErrorHelper(error?.type);     
          return (
            <FormControl error={!!error} fullWidth>
              <DesktopDatePicker
                label={label}
                value={fieldValue}
                onChange={(date) => {                
                  if (onChange) onChange(date);
                  fieldOnChange(date)
                }}
                renderInput={(params: any) =>
                  <TextField 
                    {...params} 
                    placeholder={placeholder} 
                    value={fieldValue} 
                    error={!!error} 
                    required={required}
                    onBlur={() => {       
                      try {
                        format(fieldValue, 'dd/MM/yyy');
                      } catch (e) {
                        if (fieldValue) fieldOnChange('99/99/9999');
                        else fieldOnChange(null);
                      }
                    }}
                    fullWidth 
                  />
                }
                disabled={disabled}
                inputRef={ref}
              />
              <FormHelperText error>{errorHelpText}</FormHelperText>
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

export default DatePicker;