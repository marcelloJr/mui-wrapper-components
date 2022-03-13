import React from 'react';
import { FormControlLabel, FormHelperText, Grid, InputLabel, Switch as MuiSwitch } from '@mui/material';
import { Controller } from 'react-hook-form';
import ISwitch from '@interfaces/ISwitch';

const Switch: React.FC<ISwitch> = (props) => {
  const { label, name, placeholder, span, style, helpText, required, onChange } = props;

  return (
    <Grid style={style} item xs={span ?? 12}>
      <Controller
        name={name}
        rules={{ required }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue } 
        }) => {
          return (
            <>
              <InputLabel style={{ marginBottom: -6 }}>{label}</InputLabel>
              <FormControlLabel
                onChange={(_, checked) => {
                  if (onChange) onChange(checked);
                  fieldOnChange(checked);
                }}
                value={fieldValue}
                name={name}
                control={<MuiSwitch defaultChecked={fieldValue} />}
                label={placeholder ? placeholder : ''}
              />
            </>
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Grid>
  );
}

export default Switch;