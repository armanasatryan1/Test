import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useGetUserFields from '../../api/useGetUserFields';

import { validateFields } from './validation';
import {getFields} from "./getFields";

const useRegistration = () => {
  const [registrationData, setRegistrationData] = useGetUserFields();
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const onChangeField = (id) => {
    return (event) => {
      const changedData = [...registrationData].map((item) => {
        if (Array.isArray(item)) {
          return item.map((field) => {
            if (field.id === id) {
              field.value = event.target.value;
            }
            return field;
          });
        } else if (item.id === id) {
          item.value = event.target.value;
        }
        return item;
      });
      setRegistrationData(changedData);
    };
  };

  const onSubmit = (event) => {
    const validatedFields = validateFields(registrationData);
    event.preventDefault();
    if (validatedFields.isFormValid) {
      const { firstName, lastName } = validatedFields.fields.reduce(
        (user, field, index) => {
          if (index === 0) {
            user = {
              firstName: field[0].value,
              lastName: field[1].value,
            };
          }
          return user;
        },
        { firstName: '', lastName: '' }
      );

      dispatch({ type: 'SIGN_UP', payload: { firstName, lastName } });
      navigate('../thanks', { replace: true });
    } else {
      setRegistrationData(validatedFields.fields);
    }
  };

  const fields = getFields(registrationData, onChangeField);

  return {
    onSubmit,
    fields
  };
};

export default useRegistration;
