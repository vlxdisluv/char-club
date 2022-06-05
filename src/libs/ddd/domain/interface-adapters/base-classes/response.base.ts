import { BaseEntityProps } from '@libs/ddd/domain/base-classes/entity.base';
import { Field, ObjectType } from '@nestjs/graphql';

import { IdResponse } from '../dtos/id.response.dto';

/**
 * Most of our response objects will have properties like
 * id, createdAt and updatedAt so we can move them to a
 * separate class and extend it to avoid duplication.
 */

@ObjectType()
export class ResponseBase extends IdResponse {
  constructor(entity: BaseEntityProps) {
    super(entity.id.value);
    this.createdAt = entity.createdAt.value.toISOString();
    this.updatedAt = entity.updatedAt.value.toISOString();
  }

  @Field(() => String)
  readonly createdAt: string;

  @Field(() => String)
  readonly updatedAt: string;
}
