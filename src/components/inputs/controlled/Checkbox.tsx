import React from 'react';
import { Checkbox as CheckboxMUI, FormControlLabel, FormHelperText, Grid } from '@mui/material';
import { Controller } from 'react-hook-form';
import ICheckbox from '@interfaces/ICheckbox';

const Checkbox: React.FC<ICheckbox> = (props) => {
  const { disabled, span, style, name, label, defaultValue, helpText, required, onChange } = props;
  return (
    <Grid style={style} item xs={span ?? 12}>
      <Controller
        name={name}
        rules={{ required }}
        defaultValue={defaultValue}
        render={({ field: { onChange: fieldOnChange, value: fieldValue} }) => {
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
    </Grid>
  )
}

export default Checkbox;