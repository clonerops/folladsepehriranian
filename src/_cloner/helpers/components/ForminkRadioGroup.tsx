import React from 'react';
import { Field, useField, useFormikContext } from 'formik';
import { getFormikFieldValidationProps } from '../GetFormikFieldValidationProp';

interface RadioOption {
  label: string;
  value: string | number;
}

interface RadioGroupProps {
  name: string;
  divClassName: string;
  options: RadioOption[];
}

const FormikRadioGroup: React.FC<RadioGroupProps> = ({ name, options, divClassName, ...rest }) => {
  const [field] = useField(name);
  const formikProps = useFormikContext();
  const formikValidation = getFormikFieldValidationProps(formikProps, name);
  return (
    <div className={divClassName}>
      {options?.map(option => (
        <label className="tw-ml-4" key={option.value}>
          <input
            {...field} // Use field[0] instead of destructuring
            {...rest}
            {...formikValidation}
            type="radio"
            name={name}
            // defaultChecked={field.value}
            id={option.label}
            value={option.value}
          />
          {option.label}
        </label>
      ))}
      {formikValidation.error && (
        <div className="tw-text-red-500 tw-text-right tw-text-sm">
          {formikValidation.helperText}
        </div>
      )}
    </div>
  );
};

export default FormikRadioGroup;
