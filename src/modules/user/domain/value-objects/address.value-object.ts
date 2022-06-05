import { ValueObject } from '@libs/ddd/domain/base-classes/value-object.base';
import { Guard } from '@libs/ddd/domain/guard';
import { ArgumentOutOfRangeException } from '@libs/exceptions';

/** Note: Every property in address Value Object can be
 * it's own Value Object if needed.
 * Value Objects with multiple properties can contain
 * other Value Objects inside.
 * */

export interface AddressProps {
  country: string;
  postalCode: string;
  street: string;
}

export class AddressVO extends ValueObject<AddressProps> {
  get country(): string {
    return this.props.country;
  }

  get postalCode(): string {
    return this.props.postalCode;
  }

  get street(): string {
    return this.props.street;
  }

  /**
   * Note: This is a very simplified example of validation,
   * real world projects will have stricter rules
   */
  protected validate(props: AddressProps): void {
    if (!Guard.lengthIsBetween(props.country, 2, 50)) {
      throw new ArgumentOutOfRangeException('Country is out of range');
    }
    if (!Guard.lengthIsBetween(props.street, 2, 50)) {
      throw new ArgumentOutOfRangeException('Street is out of range');
    }
    if (!Guard.lengthIsBetween(props.postalCode, 2, 10)) {
      throw new ArgumentOutOfRangeException('Postal code is out of range');
    }
  }
}
