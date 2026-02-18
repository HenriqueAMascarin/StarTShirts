export type userObjectType = {
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  id?: number;
  currentPassword?: string;
};

export type userResponseObjectType = {
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  id: number;
};
