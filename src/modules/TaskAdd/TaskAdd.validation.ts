import { object as yupObject, string as yupString, boolean as yupBoolean } from 'yup';
import { VALIDATION } from 'constants/index';

export const taskAddSchema = yupObject().shape({
  name: yupString().required(VALIDATION.REQUIRED),
  info: yupString().required(VALIDATION.REQUIRED),
  isImportant: yupBoolean(),
});
