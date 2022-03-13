import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import { Controller } from 'react-hook-form';
import ICheckboxes from '@interfaces/ICheckboxes';
import { responsivityHelper } from '@utils/helpers';

const Checkboxes: React.FC<ICheckboxes> = (props) => {
  const { options, disabled, spans, style, name, helpText, required, onChange } = props;

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
          field: { onChange: fieldOnChange, value: fieldValue }
        }) => {
          return (
            <>
              {options.map(option =>
                <FormControlLabel
                  label={option.label}
                  control={
                    <Checkbox
                      value={option.value}
                      checked={fieldValue ? fieldValue.some((existingValue: any) => existingValue === option.value) : false}
                      onChange={(event, checked) => {
                        let newValue = [];

                        if (checked) {
                          newValue = fieldValue ? [...fieldValue, event.target.value] : [event.target.value];
                          
                          if (onChange) onChange(newValue);
                          fieldOnChange(newValue);
                        } else {
                          newValue = fieldValue.filter((v: any) => v !== event.target.value);

                          if (onChange) onChange(newValue);
                          fieldOnChange(newValue);
                        }
                      }}
                    />
                  }
                  disabled={disabled}
                  style={{ width: '100%' }}
                />
              )}
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

export default Checkboxes;