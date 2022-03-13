import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from 'react-hook-form';
import IInputFile from '@interfaces/IInputFile';
import { responsivityHelper, inputErrorHelper } from '@utils/helpers';

const InputFile: React.FC<IInputFile> = (props) => {
  const { required, placeholder, name, label, disabled, helpText, spans,
    style, accept = 'application/pdf, image/png, image/jpeg', onChange } = props;

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
          field: { onChange: fieldOnChange, ref }, 
          fieldState: { error }
        }) => {
          return (
            <>
              <FormLabel error={!!error}>{label}</FormLabel>
              <TextField
                helperText={error ? inputErrorHelper(error.type, {}) : null}
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