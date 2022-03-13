import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MuiSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller } from 'react-hook-form';
import ISelect, { ISelectOption } from '@interfaces/ISelect';
import { inputErrorHelper } from '@utils/helpers';
import Container from '@components/layouts/InputContainer';

const Select: React.FC<ISelect> = (props) => {
  const { label, name, required, options, spans, style, disabled, placeholder, 
    helpText, onSelect } = props;

  const id = `${name}-label`;
  return (
    <Container style={style} spans={spans}>
      <Controller
        name={name}
        rules={{ required }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue, ref }, 
          fieldState: { error } 
        }) => {
          return (
            <FormControl fullWidth>
              <InputLabel id={id} required={required} error={!!error}>{label}</InputLabel>
              <MuiSelect
                error={!!error}
                labelId={id}
                label={label}
                value={fieldValue || ''}
                onChange={(event) => {
                  if (onSelect) onSelect(event);
                  fieldOnChange(event);
                }}
                disabled={disabled}
                inputRef={ref}
                placeholder={placeholder} 
                fullWidth
              >
                {options.map((option: ISelectOption, index: number) =>
                  <MenuItem key={`${index}-${name}-option`} value={option.value}>{option.label}</MenuItem>
                )}
              </MuiSelect>
              <FormHelperText error>{inputErrorHelper(error?.type)}</FormHelperText>
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

export default Select;