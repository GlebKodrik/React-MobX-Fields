import React from 'react';

import { observer } from 'mobx-react-lite';
import { TProps } from './types';

const Field: React.FC<TProps> = ({ fieldStore }) => {
  const {
    fieldType, name, value, handleChange, errorMessage,
  } = fieldStore;

  const isTextArea = fieldType === 'textarea';

  const onFieldChange = (event: React.ChangeEvent<
    HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement
    >) => {
    handleChange(event.target.value);
  };

  const renderField = () => {
    if (isTextArea) {
      return <textarea />;
    }
    return <input name={name} value={value} onChange={onFieldChange} />;
  };

  return (
    <>
      {errorMessage}
      {renderField()}
    </>
  );
};

export default observer(Field);
