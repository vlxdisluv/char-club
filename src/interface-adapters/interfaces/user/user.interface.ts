import { ModelBase } from '@libs/ddd/domain/interface-adapters/interfaces/model.base.interface';

export interface User extends ModelBase {
  nickname: string;
  phone: string;
  avatar: string;
  email: string;
  country: string;
  postalCode: string;
  street: string;
}
