import { get } from 'lodash';
import React, { useEffect, useState, useCallback } from 'react';

import { EuiComboBox, EuiComboBoxOptionOption, EuiFormRow } from '@elastic/eui';
import { i18n } from '@osd/i18n';

import { IndexPatternField } from '../../../../src/plugins/data/public';
import { ComboBoxGroupedOptions } from '../../../../src/plugins/vis_default_editor/public/utils';

const label = i18n.translate('visDefaultEditor.controls.field.fieldLabel', {
  defaultMessage: 'Field',
});

export interface FieldParamEditorProps {
  customLabel?: string;
  indexPatternFields: IndexPatternField[];
  showValidation: boolean;
  value: IndexPatternField;
  setValue(value?: IndexPatternField): void;
}

function createIndexedFields(indexPatternFields: IndexPatternField[]): ComboBoxGroupedOptions<IndexPatternField> {
  const indexedFields = [];
  indexPatternFields.forEach(field => {
    let indexedField = indexedFields.find(f => f.label === field.type);
    if (!indexedField) {
      indexedField = { label: field.type, options: [] };
      indexedFields.push(indexedField);
    }
    indexedField.options.push({ label: field.displayName || field.name, target: field });
  });

  indexedFields.sort((a, b) => a.label < b.label ? -1 : 1);
  return indexedFields;
}

function FieldParamEditor({
  customLabel,
  indexPatternFields = [],
  showValidation,
  value,
  setValue,
}: FieldParamEditorProps) {
  const indexedFields = React.useMemo(() => createIndexedFields(indexPatternFields), indexPatternFields);
  const [isDirty, setIsDirty] = useState(false);
  const selectedOptions: ComboBoxGroupedOptions<IndexPatternField> = value
    ? [{ label: value.displayName || value.name, target: value }]
    : [];

  const onChange = (options: EuiComboBoxOptionOption[]) => {
    const selectedOption: IndexPatternField = get(options, '0.target');
    setValue(selectedOption);
  };

  const isValid = !!value || (!isDirty && !showValidation);

  useEffect(() => {
    // set field if only one available
    if (indexedFields.length !== 1) {
      return;
    }

    const indexedField = indexedFields[0];

    if (!('options' in indexedField)) {
      setValue(indexedField.target);
    } else if (indexedField.options.length === 1) {
      setValue(indexedField.options[0].target);
    }
  }, []);

  const onSearchChange = useCallback(searchValue => setIsDirty(Boolean(searchValue)), []);

  return (
    <EuiFormRow
      label={customLabel || label}
      isInvalid={!isValid}
      fullWidth={true}
    >
      <EuiComboBox
        compressed
        placeholder={i18n.translate('visDefaultEditor.controls.field.selectFieldPlaceholder', {
          defaultMessage: 'Select a field',
        })}
        options={indexedFields}
        isDisabled={!indexedFields.length}
        selectedOptions={selectedOptions}
        singleSelection={{ asPlainText: true }}
        isClearable={false}
        isInvalid={!isValid}
        onChange={onChange}
        onBlur={() => setIsDirty(true)}
        onSearchChange={onSearchChange}
        fullWidth={true}
      />
    </EuiFormRow>
  );
}

export { FieldParamEditor };
