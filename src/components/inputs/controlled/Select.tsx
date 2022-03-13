import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MuiSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller } from 'react-hook-form';
import ISelect, { ISelectOption } from '@interfaces/ISelect';
import { responsivityHelper, inputErrorHelper } from '@utils/helpers';

const Select: React.FC<ISelect> = (props) => {
  const { label, name, required, options, spans, style, disabled, helpText, onSelect } = props;

  const id = `${name}-label`;
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
                fullWidth
              >
                {options.map((option: ISelectOption, index: number) =>
                  <MenuItem key={`${index}-${name}-option`} value={option.value}>{option.label}</MenuItem>
                )}
              </MuiSelect>
              <FormHelperText error>{error ? inputErrorHelper(error.type, {}) : ''}</FormHelperText>
            </FormControl>
          )
        }}
      />
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </Grid>
  );
}

export default Select;