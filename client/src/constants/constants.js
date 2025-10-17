export const VALIDATION_ERRORS = {
  invalidCredentials: false,
  invalidPasswordLength: false,
  emptyCredentials: false,
  invalidEmail: false,
  emptyEmail: false,
  emptyPassword: false,
};

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emptyCredentials = {
  email: "",
  password: "",
};
