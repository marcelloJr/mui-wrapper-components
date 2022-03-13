import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '@mui/material';
import { Save, Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import IForm from '@interfaces/IForm';
import { ActionButtons, FormContent } from '@styled/Layout.styled';

const Form: React.FC<IForm> = (props) => {
  const [loading, setLoading] = useState(true);
  
  const params: any = useParams();
  const navigate = useNavigate();

  const { service, children, goBackAfterSave = true, hasReset = true, afterSave, afterUpdate } = props;
  const { save, update, getById, isSaving, defaultValues } = service;

  const allMethods = useForm({
    defaultValues: defaultValues
  });

  const { reset, handleSubmit } = allMethods;

  const onSubmitForm = async (payload: any) => {
    try {
      if (!Object.keys(params).length && save) {
        await save(payload);

        if (goBackAfterSave) navigate(-1);
        else 
          if (afterSave) afterSave();

      } else {
        if (update) {
          await update(payload.id, payload);
          if (afterUpdate) afterUpdate();
        }
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }

  const getData = async () => {
    try {
      if (Object.keys(params).length && getById) {
        const res = await getById(parseInt(params.id));
        if (Object.keys(res).length) reset(res);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <FormProvider {...allMethods}>
      <ActionButtons spacing={2} direction='row'>
        {hasReset && <Button variant='outlined' startIcon={<Add />} onClick={() => reset()} disabled={isSaving}>Novo</Button>}
        <Button variant='contained' startIcon={<Save />} onClick={handleSubmit(onSubmitForm)} disabled={isSaving}>Salvar</Button>
      </ActionButtons>
      <FormContent container={Array.isArray(children)} rowSpacing={3} columnSpacing={2}>
        {!loading && children}
      </FormContent>
    </FormProvider>
  )
}

export default Form;