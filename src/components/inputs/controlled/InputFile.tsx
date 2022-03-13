import React from 'react';
import { FormHelperText, FormLabel, Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import IInputFile from '@interfaces/IInputFile';
import { validationsHelpers } from '@utils/ValidationsHelpers';

const InputFile: React.FC<IInputFile> = (props) => {
  const { required, placeholder, name, label, disabled, helpText, span,
    style, accept = 'application/pdf, image/png, image/jpeg', onChange } = props;

  return (
    <Grid style={style} item xs={span ?? 12}>
      <Controller
        name={name}
        rules={{ required }}
        render={({ 
          field: { onChange: fieldOnChange, ref }, 
          fieldState: { error }
        }) => {
          return (
            <>
              <FormLabel error={!!error}>{label}</FormLabel>
              <TextField
                helperText={error ? validationsHelpers(error.type, {}) : null}
                error={!!error}
                onChange={(e: any) => {
                  if (onChange) onChange(e.target.files[0]); 
                  fieldOnChange(e.target.files[0])
                }}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                inputProps={{ accept }}
                type='file'
                inputRef={ref}
                fullWidth
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

export default InputFile;