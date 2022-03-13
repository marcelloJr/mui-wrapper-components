import React from 'react';
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, Grid, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import ISelect, { ISelectOption } from '@interfaces/ISelect';
import { validationsHelpers } from '@utils/ValidationsHelpers';

const Select: React.FC<ISelect> = (props) => {
  const { label, name, required, options, defaultValue,
    onSelect, span, style, disabled, helpText } = props;

  const id = `${name}-label`;
  return (
    <Grid style={style} item xs={span ?? 12}>
      <Controller
        name={name}
        rules={{ required }}
        defaultValue={defaultValue}
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
                name={name}
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
              <FormHelperText error>{error ? validationsHelpers(error.type, {}) : ''}</FormHelperText>
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