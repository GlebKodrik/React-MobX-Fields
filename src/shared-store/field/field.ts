import { makeAutoObservable } from 'mobx';
import { TFieldStoreProps, TFieldType } from './types';

class FieldStore {
  private readonly _fieldType: TFieldType = null;

  private readonly _name: string = null;

  private readonly _validationRule: {rule: Function, errorMessage: string}[] = null;

  private _errorMessage: string = null;

  private _value: string = null;

  constructor(props: TFieldStoreProps) {
    makeAutoObservable(this);
    this._fieldType = props.fieldType ?? 'input';
    this._name = props.name ?? null;
    this._value = props.value ?? '';
    this._validationRule = props.validationRule ?? null;
    this._errorMessage = props.errorMessage ?? null;
  }

  public get fieldType() {
    return this._fieldType;
  }

  public get name() {
    return this._name;
  }

  public get value() {
    return this._value;
  }

  public get errorMessage() {
    return this._errorMessage;
  }

  private setErrorMessage = (message: string) => {
    this._errorMessage = message;
  };

  private resetErrorMessage = () => {
    this._errorMessage = null;
  };

  private validation = () => {
    this._validationRule?.every(({ rule, errorMessage }) => {
      if (this._value && rule(this._value)) {
        this.setErrorMessage(errorMessage);
        return false;
      }
      this.resetErrorMessage();
      return true;
    });
  };

  public handleChange = (value: string) => {
    this._value = value;
    this.validation();
  };
}

export default FieldStore;
