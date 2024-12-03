export type userObject = {
  password: string,
  firstName: string,
  lastName: string,
  email: string,
};

export type genericResponse = {
  errors?: {[key: string]: string},
  messageSuccess: string | null
};
