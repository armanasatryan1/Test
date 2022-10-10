import FormField from '../../components/FormField/FormField';
import styles from './Registration.module.scss';

export const getFields = (registrationData, onChangeField) => {
  return registrationData.map((row, rowIndex) => {
    if (Array.isArray(row)) {
      return (
        <div
          className={styles.registration_page_columns}
          key={`row-${rowIndex}`}
        >
          {row.map((field, fieldIndex) => (
            <FormField
              key={`row-field-${rowIndex}--${fieldIndex}`}
              onChange={onChangeField(field.id)}
              {...field}
            />
          ))}
        </div>
      );
    }
    return (
      <FormField
        key={`row-${rowIndex}`}
        {...row}
        onChange={onChangeField(row.id)}
      />
    );
  });
};