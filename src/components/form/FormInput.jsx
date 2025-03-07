import FormError from './FormError';
import FormInputField from './FormInputField';
import FormLabel from './FormLabel';

/**
 * FormInput component.
 *
 * @component
 * @param {Object} props
 * @param {string} props.label - The label for the input field (optional).
 * @param {string} props.name - The name of the input field.
 * @param {Object} props.validations - The validation rules of react-hook-form (optional).
 * @param {string} props.className - The additional class names for styling the input field (optional).
 * @param {string} props.containerClassName - The additional class names for styling container div (optional).
 * @param {any} props... - Additional props to be spread on the FormInputField component.
 * @returns {JSX.Element} - The rendered FormInput component.
 */
const FormInput = ({
  label,
  name,
  validations = {},
  className,
  labelClassName,
  containerClassName,
  ...props
}) => {
  return (
    <div className={containerClassName}>
      <FormLabel
        name={name}
        label={label}
        validations={validations}
        className={labelClassName}
      />

      <FormInputField
        className={className}
        validations={validations}
        name={name}
        {...props}
      />

      <FormError name={name} />
    </div>
  );
};

export default FormInput;
