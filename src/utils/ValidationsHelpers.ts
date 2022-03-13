import IValidationsHelpersParams from '@interfaces/IValidationsHelpers';
export const validationsHelpers = (type: string, param?: IValidationsHelpersParams) => {
  return {
    required: 'Este campo é obrigatório',
    minLength: `Tamanho mínimo é ${param?.minLength ?? '-'} caracteres`,
    maxLength: `Tamanho máximo é ${param?.maxLength ?? '-'} caracteres`,
    email: 'Email inválido'
  }[type];
}