import { userResponseObjectType } from '@src/services/user/types/genericTypes';

export interface UserLoggedType extends userResponseObjectType {
  rememberMe?: boolean;
}
