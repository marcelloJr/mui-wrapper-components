import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import TimePickerMui from '@mui/lab/TimePicker';
import { Controller } from 'react-hook-form';
import ITimePicker from '@interfaces/ITimePicker';
import { inputErrorHelper, regexHelper } from '@utils/helpers';
import { format } from 'date-fns';
import Container from '@components/layouts/InputContainer';

const TimePicker: React.FC<ITimePicker> = (props) => {
  const { label, spans, style, name, required, disabled, helpText, placeholder, onChange } = props;

  return (
    <Container style={style} spans={spans}>
      <Controller
        name={name}
        rules={{ required, pattern: regexHelper().time }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue = null, ref }, 
          fieldState: { error }
        }) => {
          let errorHelpText = error?.type === 'pattern' ? inputErrorHelper('pattern.time') : inputErrorHelper(error?.type);
          
          return (
            <>
              <TimePickerMui
                label={label}
                onChange={(date) => {
                  if (onChange) onChange(date);
                  fieldOnChange(date);
                }}
                value={fieldValue}
                inputRef={ref}
                disabled={disabled}
                renderInput={(params) => (
                  <TextField 
                    {...params}
                    error={!!error}
                    value={fieldValue}
                    helperText={errorHelpText}
                    required={required}
                    onBlur={() => {       
                      try {
                        format(fieldValue, 'HH:mm');
                      } catch (e) {
                        if (fieldValue) fieldOnChange('99:99');
                        else fieldOnChange(null);
                      }
                    }}
                    placeholder={placeholder}
                    fullWidth
                  />
                )}
              />
            </>
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Container>
  )
}

export default TimePicker;