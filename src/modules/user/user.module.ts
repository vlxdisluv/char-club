import { Module } from '@nestjs/common';

import { CreateUserGraphqlResolver } from './commands/create-user/create-user.graphql-resolver';
import { FindUsersGraphqlResolver } from './queries/find-users/find-users.graphql-resolver';

const graphqlResolvers = [CreateUserGraphqlResolver, FindUsersGraphqlResolver];

@Module({
  providers: [...graphqlResolvers],
})
export class UserModule {}
