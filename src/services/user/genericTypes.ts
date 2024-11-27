export type userObject = {
  password: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type genericResponse = {
  errors?: {};
  success: boolean;
};
