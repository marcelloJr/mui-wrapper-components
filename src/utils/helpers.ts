import { IInputError } from '@interfaces/IHelpers';

export const responsivityHelper = (spanType: 'xs' | 'sm' | 'md' | 'lg' | 'xl', data?: number[]) => {
  const index = {'xs': 0, 'sm': 1, 'md': 2, 'lg': 3, 'xl': 4};
  return (data && data[index[spanType]]) || 12;
}

export const inputErrorHelper = (type: string, param?: IInputError) => {
  return {
    required: 'Este campo é obrigatório',
    minLength: `Tamanho mínimo é ${param?.minLength ?? '-'} caracteres`,
    maxLength: `Tamanho máximo é ${param?.maxLength ?? '-'} caracteres`,
    email: 'Email inválido',
    time: 'Horário inválido',
    date: 'Data inválida'
  }[type];
}