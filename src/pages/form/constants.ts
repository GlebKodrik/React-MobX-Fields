import { TFieldStoreProps } from '../../shared-store/field/types';

export const FIELD_NAMES = {
  FULL_ADDRESS: 'full_address',
  NAME: 'name',
} as const;

export const FIELD_SETTINGS: { [fieldName: string]: TFieldStoreProps } = {
  [FIELD_NAMES.FULL_ADDRESS]: {
    fieldType: 'input',
    name: FIELD_NAMES.FULL_ADDRESS,
    validationRule: [{
      rule: (value: string) => value.length === 10,
      errorMessage: 'Больше 10',
    }],
  },
  [FIELD_NAMES.NAME]: {
    fieldType: 'textarea',
    name: FIELD_NAMES.NAME,
  },
};
