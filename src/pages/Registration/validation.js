
import { regExConstants, errorConstants } from '../../constants';

export const validateField = (field) => {
  const { phoneRegex, emailRegex, textRegex } = regExConstants;
  const { phoneFieldError, emailFieldError, requiredFieldError, onlyTextAllowedError } =
    errorConstants;
  console.log(field)

  if (field.required && !field.value.trim()) {
    return requiredFieldError;
  }
  if (field.id === 'phone' && !field.value.trim().match(phoneRegex)) {
    return phoneFieldError;
  }
  if (field.id === 'email' && !field.value.trim().match(emailRegex)) {
    return emailFieldError;
  }
  if (field.required && !field.value.trim().match(textRegex)) {
    return onlyTextAllowedError;
  }

  return;
};

export const validateFields = (registrationData) => {
  let isFormValid = true;
  const changedData = [...registrationData].map((item) => {
    if (Array.isArray(item)) {
      return item.map((field) => {
        field.error = validateField(field);
        isFormValid = field.error ? false : isFormValid;
        return field;
      });
    } else {
      item.error = validateField(item);
      isFormValid = item.error ? false : isFormValid;
    }
    return item;
  });
  return {
    fields: changedData,
    isFormValid,
  };
};
