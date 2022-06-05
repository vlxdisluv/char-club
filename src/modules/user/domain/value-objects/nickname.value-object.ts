import { DomainPrimitive, ValueObject } from '@libs/ddd/domain/base-classes/value-object.base';
import { Guard } from '@libs/ddd/domain/guard';
import { ArgumentInvalidException, ArgumentOutOfRangeException } from '@libs/exceptions';

import { UserGuard } from '../user.guard';

export class NicknameVO extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
    this.props.value = NicknameVO.format(value);
  }

  get value(): string {
    return this.props.value;
  }

  protected validate({ value }: DomainPrimitive<string>): void {
    if (!Guard.lengthIsBetween(value, 5, 16)) {
      throw new ArgumentOutOfRangeException('Nickname must be a range from 5 to 16');
    }

    if (!UserGuard.isNickName(value)) {
      throw new ArgumentInvalidException('Nickname has incorrect format');
    }
  }

  static format(email: string): string {
    return email.trim().toLowerCase();
  }
}
