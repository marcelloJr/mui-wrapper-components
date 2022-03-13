export interface IService {
  save: (payload: any) => Promise<void>;
  update: (id: number, payload: any) => Promise<void>;
  getById: (id: number) => Promise<any>;
  isSaving: boolean;
  defaultValues: Object;
}

export default interface IForm {
  service?: IService;
  goBackAfterSave?: Boolean;
  hasReset?: Boolean;
  afterSave?: () => void;
  afterUpdate?: () => void;
  submitForm?: (payload: any) => void;
}