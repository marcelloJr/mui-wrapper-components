import React from 'react';
import AutocompleteMui from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller } from 'react-hook-form';
import IAutocomplete from '@interfaces/IAutocomplete';
import { responsivityHelper, inputErrorHelper } from '@utils/helpers';

const Autocomplete: React.FC<IAutocomplete> = (props) => {
  const { name, label, options, required, disabled, helpText, spans, style,
    placeholder, emptyOptionsText = 'No options', clearText = 'Clear', multiple, 
    optionLabel = 'label', optionValue = 'value', onChange, onSelect } = props;

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
          const emptyValue = multiple ? [] : null;
          
          return (
            <AutocompleteMui
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
                    <Checkbox style={{ marginRight: 8 }} checked={selected} />
                    {option[optionLabel]}
                  </li>
                )
              }}
              isOptionEqualToValue={(option, value) => option[optionValue] === value[optionValue]}
              getOptionLabel={(option) => option[optionLabel] || option}
              renderInput={(params) =>
                <TextField
                  {...params}
                  required={required}
                  helperText={error ? inputErrorHelper(error.type, {}) : null}
                  error={!!error}
                  label={label}
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