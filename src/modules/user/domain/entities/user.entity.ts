import { AggregateRoot } from '@libs/ddd/domain/base-classes/aggregate-root.base';
import { UUID } from '@libs/ddd/domain/value-objects/uuid.value-object';

import { UserCreatedDomainEvent } from '../events/user-created.domain-event';
import { AddressVO, EmailVO, NicknameVO, PhoneVO, UrlVO } from '../value-objects';
import { UserRoles } from './user.types';

export interface CreateUserProps {
  phone: PhoneVO;
  email: EmailVO;
  nickname: NicknameVO;
  avatar: UrlVO;
  address: AddressVO;
}

// All properties that a User has
export interface UserProps extends CreateUserProps {
  role: UserRoles;
}

export class UserEntity extends AggregateRoot<UserProps> {
  protected readonly _id: UUID;

  static create(create: CreateUserProps): UserEntity {
    const id = UUID.generate();

    /* Setting a default role since we are not accepting it during creation. */
    const props: UserProps = { ...create, role: UserRoles.guest };

    const user = new UserEntity({ id, props });

    /* adding "UserCreated" Domain Event that will be published
    eventually so an event handler somewhere may receive it and do an
    appropriate action */
    user.addEvent(
      new UserCreatedDomainEvent({
        aggregateId: id.value,
        phone: props.phone.unpack(),
        email: props.email.unpack(),
        nickname: props.nickname.unpack(),
        ...props.address.unpack(),
      }),
    );

    return user;
  }

  public get nickname() {
    return this.props.nickname;
  }

  makeAdmin(): void {
    this.props.role = UserRoles.admin;
  }

  makeModerator(): void {
    this.props.role = UserRoles.moderator;
  }

  validate(): void {
    // TODO: example
    // entity business rules validation to protect it's invariant
  }
}
