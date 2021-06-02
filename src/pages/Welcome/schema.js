import * as yup from 'yup';

const TEXT_FIELD_REQUIRED_ERROR = 'El campo es requerido';

const formSchema = yup.object().shape({
  brand: yup.string()
    .required(TEXT_FIELD_REQUIRED_ERROR),
  year: yup.string()
    .required(TEXT_FIELD_REQUIRED_ERROR)
});

export default formSchema;
