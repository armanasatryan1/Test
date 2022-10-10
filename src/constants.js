export const errorConstants = {
  phoneFieldError: 'This is not a valid phone',
  emailFieldError: 'This is not a valid email',
  requiredFieldError: 'This field is required',
  onlyTextAllowedError: 'This field only accepts text symbols'
}

export const regExConstants = {
  phoneRegex: /^\d{10}$/,
  emailRegex: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
  textRegex: /^[a-zA-Z ]*$/
}