import { ResponseBase } from '@libs/ddd/domain/interface-adapters/base-classes/response.base';
import { UserEntity } from '@modules/user/domain/entities/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserResponse extends ResponseBase {
  constructor(user: UserEntity) {
    super(user);

    const props = user.getPropsCopy();
    this.nickname = props.nickname.value;
    this.phone = props.phone.value;
    this.avatar = props.avatar.value;
    this.street = props.address.street;
    this.email = props.email.value;
    this.country = props.address.country;
    this.postalCode = props.address.postalCode;
    this.street = props.address.street;
  }

  @Field(() => String)
  nickname: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  avatar: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  postalCode: string;

  @Field(() => String)
  street: string;
}
