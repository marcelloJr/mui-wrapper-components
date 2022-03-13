import { IInputError } from '@interfaces/IHelpers';

export const responsivityHelper = (spanType: 'xs' | 'sm' | 'md' | 'lg' | 'xl', data?: number[]) => {
  const index = {'xs': 0, 'sm': 1, 'md': 2, 'lg': 3, 'xl': 4};
  return (data && data[index[spanType]]) || 12;
}

export const inputErrorHelper = (type: string | undefined, param: IInputError = {}) => {
  return type ? {
    required: 'Este campo é obrigatório',
    minLength: `Tamanho mínimo é ${param?.minLength ?? '-'} caracteres`,
    maxLength: `Tamanho máximo é ${param?.maxLength ?? '-'} caracteres`,
    email: 'Email inválido',
    'pattern.time': 'Horário inválido',
    'pattern.date': 'Data inválida'
  }[type] : '';
}

export const regexHelper = () => {
  return {
    time: /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/,
    date: /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/d{4}$/
  }
}