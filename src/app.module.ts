import { loadConfiguration, validationSchema } from '@libs/infrastructure/configs/environment.config';
import { GraphQLConfigService } from '@libs/infrastructure/configs/graphql-config.factory';
import { UserModule } from '@modules/user/user.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphQLConfigService,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadConfiguration],
      validationSchema: validationSchema,
      validationOptions: { abortEarly: true },
    }),
    UserModule,
  ],
})
export class AppModule {}
