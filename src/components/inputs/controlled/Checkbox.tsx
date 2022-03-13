import React from 'react';
import CheckboxMUI from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller } from 'react-hook-form';
import ICheckbox from '@interfaces/ICheckbox';
import Container from '@components/layouts/InputContainer';

const Checkbox: React.FC<ICheckbox> = (props) => {
  const { disabled, spans, style, name, label, helpText, onChange } = props;
  return (
    <Container style={style} spans={spans}>
      <Controller
        name={name}
        render={({ field: { onChange: fieldOnChange, value: fieldValue } }) => {
          return (
            <FormControlLabel
              label={label}
              control={
                <CheckboxMUI
                  onChange={(e) => {
                    if (onChange) onChange(e.target.checked);
                    fieldOnChange(e.target.checked);
                  }}
                  checked={fieldValue}
                />}
              disabled={disabled}
            />
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Container>
  )
}

export default Checkbox;