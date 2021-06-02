import * as yup from 'yup';

const TEXT_FIELD_REQUIRED_ERROR = 'El campo es requerido';
const TEXT_PLATE_CHARACTERS_ERROR = 'la placa debe tener más de  5 caracteres';
const TEXT_DNI_CHARACTERS_ERROR = 'El DNI/CE debe tener 8 caracteres';
const TEXT_PHONE_MAX_CHARACTERS_ERROR = 'El telefono no debe tener más de 9 digitos';
const TEXT_PHONE_MIN_CHARACTERS_ERROR = 'El telefono no debe tener menos de 7 digitos';

const formSchema = yup.object().shape({
  phone: yup.string()
    .required(TEXT_FIELD_REQUIRED_ERROR)
    .min(7, TEXT_PHONE_MIN_CHARACTERS_ERROR)
    .max(9, TEXT_PHONE_MAX_CHARACTERS_ERROR),
  plate: yup.string()
    .required(TEXT_PLATE_CHARACTERS_ERROR),
  identification: yup.string()
    .required(TEXT_DNI_CHARACTERS_ERROR),
  // password: yup.string().when('userId', {
  //   is: '',
  //   then: yup.string().required(TEXT_FIELD_REQUIRED_ERROR).min(8, TEXT_PASSWORD_MIN_CHARACTERS_ERROR)
  // }),
});

export default formSchema;
