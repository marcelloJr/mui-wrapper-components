import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MuiSwitch from '@mui/material/Switch';
import { Controller } from 'react-hook-form';
import ISwitch from '@interfaces/ISwitch';
import Container from '@components/layouts/InputContainer';

const Switch: React.FC<ISwitch> = (props) => {
  const { label, name, placeholder = '', spans, style, helpText, required, onChange } = props;

  return (
    <Container style={style} spans={spans}>
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
                control={<MuiSwitch defaultChecked={fieldValue} />}
                label={placeholder}
              />
            </>
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Container>
  );
}

export default Switch;