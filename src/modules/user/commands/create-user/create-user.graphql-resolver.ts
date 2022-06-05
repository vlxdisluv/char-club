import { IdResponse } from '@libs/ddd/domain/interface-adapters/dtos/id.response.dto';
import { userPersistence } from '@modules/user/database/user.persistence';
import { UserEntity } from '@modules/user/domain/entities/user.entity';
import { AddressVO, EmailVO, NicknameVO, PhoneVO, UrlVO } from '@modules/user/domain/value-objects';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CreateUserRequest } from './create-user.request.dto';

@Resolver()
export class CreateUserGraphqlResolver {
  @Mutation(() => IdResponse, { name: 'userCreate' })
  async create(@Args('input') input: CreateUserRequest): Promise<IdResponse> {
    const user = UserEntity.create({
      phone: new PhoneVO(input.phone),
      nickname: new NicknameVO(input.nickname),
      avatar: new UrlVO(input.avatar),
      email: new EmailVO(input.email),
      address: new AddressVO({
        country: input.country,
        postalCode: input.postalCode,
        street: input.street,
      }),
    });

    userPersistence.push(user);

    return new IdResponse(user.id.unpack());
  }
}
