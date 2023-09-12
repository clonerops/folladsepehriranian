import { FormikProps } from "formik";

export const getFormikFieldValidationProps = (
  formikProps: FormikProps<any>,
  fieldName: string,
) => {
  const { touched, errors, getFieldProps } = formikProps;
  const error = touched?.[fieldName] && Boolean(errors?.[fieldName]);

  const helperText = <>{touched?.[fieldName] && errors?.[fieldName]}</>;

  return { error: error, helperText: helperText, ...getFieldProps(fieldName) };
};
