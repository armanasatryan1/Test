import PropTypes from 'prop-types';

import styles from './FormField.module.scss';
import useFormField from "./useFormField";

const FormField = ({ name, type, options, error, onChange, placeholder }) => {
  const {field} = useFormField({type, placeholder, options, onChange})

  return (
    <div className={styles.form_field}>
      <label>{name}</label>
      {field}
      {error && <p className={styles.error_message}>{error}</p>}
    </div>
  );
};

export default FormField;

FormField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};



