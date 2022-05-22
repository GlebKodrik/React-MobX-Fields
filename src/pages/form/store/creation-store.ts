import FieldStore from '../../../shared-store/field';

import { FIELD_NAMES, FIELD_SETTINGS } from '../constants';

class CreationStore {
  private [FIELD_NAMES.FULL_ADDRESS] = new FieldStore(FIELD_SETTINGS[FIELD_NAMES.FULL_ADDRESS]);

  private [FIELD_NAMES.NAME] = new FieldStore(FIELD_SETTINGS[FIELD_NAMES.NAME]);

  public getField = (name: typeof FIELD_NAMES[keyof typeof FIELD_NAMES]) => this[name];
}

export default CreationStore;
