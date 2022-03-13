import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TimePickerMui from '@mui/lab/TimePicker';
import { Controller } from 'react-hook-form';
import ITimePicker from '@interfaces/ITimePicker';
import { responsivityHelper, inputErrorHelper } from '@utils/helpers';

const TimePicker: React.FC<ITimePicker> = (props) => {
  const { label, spans, style, name, required, disabled, helpText, onChange } = props;

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
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue = null, ref }, 
          fieldState: { error },
        }) => {
          // console.log('TimePicker', fieldValue);
          let invalidTime = false;
          // const errorType = invalidTime ? 'time' : error?.type;

          return (
            <>
              <TimePickerMui
                label={label}
                onChange={(date, value = '') => {
                  // fieldOnChange(date);
                  if (value.length > 3) {
                    invalidTime = false;
                  } else {
                    invalidTime = true;
                  }
                  console.log(invalidTime, value.length);
                }}
                value={fieldValue}
                renderInput={(params) => (
                  <TextField 
                    {...params}
                    error={!!error}
                    value={fieldValue}
                    helperText={error ? inputErrorHelper(error.type, {}) : null}
                    required={required}
                    inputRef={ref}
                    onBlur={() => {             
                      if (invalidTime) {
                        fieldOnChange(null);
                        console.log('aqui dentroo porras', fieldValue);
                      }
                    }}
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
    </Grid>
  )
}

export default TimePicker;