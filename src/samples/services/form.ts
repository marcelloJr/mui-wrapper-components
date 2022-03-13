export default function formService() {
  const isSaving = false;

  const defaultValues = {};

  const save = (formData: any) => {
    console.log('Save', formData);

    return Promise.resolve();
  }

  const update = (id: number, formData: any) => {
    console.log('update', id, formData);

    return Promise.resolve();
  }

  const getById = (id: number) => {
    console.log('getDataById', id);

    return Promise.resolve();
  }

  return {
    save,
    update,
    getById,
    isSaving,
    defaultValues
  }
}