import { ArgsType, Field, InputType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsEmail,
  IsMobilePhone,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateUser } from 'src/interface-adapters/interfaces/user/create.user.interface';

@ArgsType()
@InputType()
export class CreateUserRequest implements CreateUser {
  @MinLength(5)
  @MaxLength(16)
  @IsString()
  @Field()
  readonly nickname: string;

  @MinLength(8)
  @MaxLength(16)
  @IsMobilePhone()
  @Field()
  readonly phone: string;

  @MinLength(5)
  @MaxLength(320)
  @IsEmail()
  @Field()
  readonly email: string;

  @IsUrl({ protocols: ['http', 'https'] })
  @IsString()
  @Field()
  readonly avatar: string;

  @MinLength(4)
  @MaxLength(50)
  @IsString()
  @Matches(/^[a-zA-Z ]*$/)
  @Field()
  readonly country: string;

  @MinLength(4)
  @MaxLength(10)
  @IsAlphanumeric()
  @Field()
  readonly postalCode: string;

  @MinLength(5)
  @MaxLength(50)
  @Matches(/^[a-zA-Z ]*$/)
  @Field()
  readonly street: string;
}
