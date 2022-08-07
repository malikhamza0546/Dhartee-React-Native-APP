import * as yup from 'yup';

export const UpdateUserSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'First name must have at least 3 characters')
    .max(15)
    .required(),
  lastName: yup
    .string()
    .min(3, 'Last name must have at least 8 characters')
    .max(15)
    .required(),

  phone: yup
    .string()
    .min(12, 'Phone Number must be exactyly 12 digits')
    .max(12, 'Phone Number must be exactyly 12 digits')
    .required('Phone number is required'),
  email: yup.string().email().required('Email is required'),
  telephone: yup
    .string()
    .notRequired()
    .nullable()
    .min(10, 'Tele Number must be exactyly 10 digits')
    .max(10, 'Tele Number must be exactyly 10 digits')
    .transform(value => (!!value ? value : null)),
  faxCode: yup
    .string()
    .notRequired()
    .min(4, 'Fax Number must be exactyly 4 digits')
    .nullable(true)
    .max(4, 'Fax Number must be exactyly 4 digits')
    .transform(value => (!!value ? value : null)),
  faxNumber: yup
    .string()
    .notRequired()
    .min(10, 'Fax Number must be exactyly 10 digits')
    .nullable(true)
    .max(10, 'Fax Number must be exactyly 10 digits')
    .transform(value => (!!value ? value : null)),
  address: yup.string().notRequired(),
  country: yup.string().notRequired(),
  ntn: yup.string().notRequired(),
  zipcode: yup
    .string()
    .min(5, 'ZipCode must have 5 Digits')
    .max(5, 'ZipCode must have 5 Digits')
    .required('ZipCode is required'),
  
  city: yup.string().notRequired(),
  AboutYourself: yup.string().notRequired(),
});
