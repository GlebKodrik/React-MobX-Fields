import React from 'react';

import CreationStore from './store/creation-store';

import Field from '../../shared-components/field';

import { FIELD_NAMES } from './constants';

function Form() {
  const { getField } = new CreationStore();
  return (
    <div>
      {Object.values(FIELD_NAMES).map((fieldName) => (
        <Field fieldStore={getField(fieldName)} />
      ))}
    </div>
  );
}

export default Form;
