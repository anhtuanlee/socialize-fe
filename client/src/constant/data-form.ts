export const DATA_FORM_SIGNIN = [
  [
    {
      required: true,
      name: 'firstname',
      placeholder: 'First Name',
      typeInput: 'input',
      type: 'text',
      messageError: 'Username should be 3-16 characters ',
      pattern: '^.{3,10}$',
    },
    {
      required: true,
      name: 'lastname',
      placeholder: 'Last Name',
      typeInput: 'input',
      type: 'text',
      pattern: '^.{3,10}$',
      messageError: 'Username should be 3-16 characters',
    },
  ],
  {
    required: true,
    name: 'email',
    placeholder: 'Email',
    typeInput: 'input',
    type: 'email',
    messageError: 'It should be a valid email address!',
    pattern: '^[w-.]+@([w-]+.)+[w-]{2,4}$',
  },
  {
    required: true,
    name: 'password',
    placeholder: 'Password',
    typeInput: 'input',
    type: 'password',
    messageError: 'Password should be 8-20 characters, just charactor or number!',
    // pattern: "^[A-Za-zd]{8,20}$",
  },
  [
    {
      required: true,
      name: 'phone',
      placeholder: 'Phone',
      typeInput: 'input',
      type: 'text',
      messageError: 'Phone number is not valid',
      pattern: '^[0-9]{1,12}',
    },
    {
      name: 'gender',
      placeholder: 'Gender',
      typeInput: 'select',
      type: 'text',
      options: ['Male', 'Female', 'Others'],
    },
  ],
];
export const DATA_FORM_LOGIN = [
  {
    name: 'mailphone',
    placeholder: 'Email or Phone',
    typeInput: 'input',
    type: 'text',
    messageError: 'Type correct your phone or email',
  },
  {
    name: 'password',
    placeholder: 'Password',
    typeInput: 'input',
    type: 'password',
    messageError: 'Password should have 8 text',
  },
];
