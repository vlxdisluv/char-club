import { Args, Query, Resolver } from '@nestjs/graphql';

import { userPersistence } from '../../database/user.persistence';
import { UserResponse } from '../../dtos/user.response.dto';
import { FindUsersRequest } from './find-users.request.dto';

@Resolver()
export class FindUsersGraphqlResolver {
  @Query(() => UserResponse, { name: 'usersFind', nullable: true })
  async findUser(@Args('input') input: FindUsersRequest): Promise<UserResponse | null> {
    const foundUser = userPersistence.find((u) => u.nickname.value === input?.nickname);

    if (!foundUser) {
      return null;
    }

    return new UserResponse(foundUser);
  }
}
