import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller } from 'react-hook-form';
import ICheckboxes from '@interfaces/ICheckboxes';
import { inputErrorHelper } from '@utils/helpers';
import FormControl from '@mui/material/FormControl';
import Container from '@components/layouts/InputContainer';

const Checkboxes: React.FC<ICheckboxes> = (props) => {
  const { options, disabled, spans, style, name, helpText, required, label, onChange } = props;

  return (
    <Container style={style} spans={spans}>
      <Controller
        name={name}
        rules={{ required }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue },
          fieldState: { error }
        }) => {
          return (
            <FormControl error={!!error} required={required}>
              <FormHelperText>{label} {required && '*'}</FormHelperText>
              {options.map((option, index) =>
                <FormControlLabel
                  key={`form-label-checkbox-${index}`}
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
                />
              )}
              <FormHelperText error>{inputErrorHelper(error?.type)}</FormHelperText>
            </FormControl>
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Container>
  )
}

export default Checkboxes;