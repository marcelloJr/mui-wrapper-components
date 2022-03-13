import React from 'react';
import { Autocomplete as MuiAutocomplete, TextField, Grid, Checkbox, FormHelperText } from '@mui/material';
import { CheckBoxOutlineBlank, CheckBox } from '@mui/icons-material';
import { Controller } from 'react-hook-form';
import IAutocomplete from '@interfaces/IAutocomplete';
import { validationsHelpers } from '@utils/ValidationsHelpers';

const Autocomplete: React.FC<IAutocomplete> = (props) => {
  const { name, label, options, required, disabled, helpText, defaultValue, span, style,
    placeholder, emptyOptionsText = 'No options', clearText = 'Clear', multiple, onChange, onSelect } = props;

  const icon = <CheckBoxOutlineBlank fontSize='small' />;
  const checkedIcon = <CheckBox fontSize='small' />;

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
          const emptyValue = multiple ? [] : '';

          return (
            <MuiAutocomplete
              onInputChange={(_, value) => onChange ? onChange(value) : null}
              noOptionsText={emptyOptionsText}
              onChange={(_, value) => {
                if (onSelect) onSelect(value);
                fieldOnChange(value);
              }}
              value={fieldValue || emptyValue}
              clearText={clearText}
              disabled={disabled}
              options={options}
              renderOption={(props, option, { selected }) => {
                return (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.label}
                  </li>
                )
              }}
              isOptionEqualToValue={(option, value) => (option.value === value.value)}
              getOptionLabel={(option) => option.label ?? option}
              renderInput={(params) =>
                <TextField
                  {...params}
                  required={required}
                  helperText={error ? validationsHelpers(error.type, {}) : null}
                  error={!!error}
                  label={label}
                  name={name}
                  onChange={fieldOnChange}
                  disabled={disabled}
                  placeholder={placeholder}
                  inputRef={ref}
                />
              }
              multiple={multiple}
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

export default Autocomplete;