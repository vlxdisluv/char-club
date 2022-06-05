import parsePhoneNumberFromString from 'libphonenumber-js';

export class UserGuard {
  static isPhoneNumber(value: string) {
    if (typeof value !== 'string') {
      throw new Error('Value of phone number must be a string');
    }

    const parsed = parsePhoneNumberFromString(value);

    if (parsed) {
      return true;
    }

    return false;
  }

  static isNickName(value: string) {
    if (typeof value !== 'string') {
      throw new Error('Value of nickname must be a sting');
    }

    const regexp = /^[a-z]{1}[a-z._0-9]+[a-z0-9]$/;

    const isValid = regexp.test(value);

    if (isValid) {
      return true;
    }

    return false;
  }

  static isUrl(value: string) {
    if (typeof value !== 'string') {
      throw new Error('Value of url must be a string');
    }

    const regexp =
      /^(?:(?:(?:https?|http):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    const isValid = regexp.test(value);

    if (isValid) {
      return true;
    }

    return false;
  }

  static isEmail(value: string) {
    if (typeof value !== 'string') {
      throw new Error('Value of email must be a string');
    }

    const regexp =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    const isValid = regexp.test(value);

    if (isValid) {
      return true;
    }

    return false;
  }
}
