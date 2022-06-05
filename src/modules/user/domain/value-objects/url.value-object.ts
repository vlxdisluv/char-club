import { DomainPrimitive, ValueObject } from '@libs/ddd/domain/base-classes/value-object.base';
import { ArgumentInvalidException } from '@libs/exceptions';

import { UserGuard } from '../user.guard';

export class UrlVO extends ValueObject<string> {
  constructor(value: string) {
    super({ value });
    this.props.value = UrlVO.format(value);
  }

  get value(): string {
    return this.props.value;
  }

  protected validate({ value }: DomainPrimitive<string>): void {
    if (!UserGuard.isUrl(value)) {
      throw new ArgumentInvalidException('Url has incorrect format');
    }
  }

  static format(email: string): string {
    return email.trim().toLowerCase();
  }
}
