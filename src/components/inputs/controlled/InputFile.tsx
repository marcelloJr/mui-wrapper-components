import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import { Controller } from 'react-hook-form';
import IInputFile from '@interfaces/IInputFile';
import { inputErrorHelper } from '@utils/helpers';
import Container from '@components/layouts/InputContainer';

const InputFile: React.FC<IInputFile> = (props) => {
  const { required, placeholder, name, label, disabled, helpText, spans,
    style, accept = 'application/pdf, image/png, image/jpeg', onChange } = props;

  return (
    <Container style={style} spans={spans}>
      <Controller
        name={name}
        rules={{ required }}
        render={({ 
          field: { onChange: fieldOnChange, value: fieldValue = '', ref }, 
          fieldState: { error }
        }) => {
          return (
            <>
              <TextField
                helperText={inputErrorHelper(error?.type)}
                error={!!error}
                onChange={(e: any) => {
                  if (onChange) onChange(e.target.files[0]); 
                  fieldOnChange(e.target.files[0]);
                }}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                inputProps={{ accept }}
                InputLabelProps={{shrink: true}}
                type='file'
                label={label}
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
    </Container>
  );
}

export default InputFile;