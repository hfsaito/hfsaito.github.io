const FiveMinutes = 1000 * 60 * 5;

export class Token {
  private static value = '';
  private static expiresAt = 0;

  static set(token: string, expiresIn: number) {
    Token.value = token;
    Token.expiresAt = Date.now() + expiresIn - FiveMinutes;
  }

  static get() {
    return Token.value;
  }

  static clear() {
    Token.value = '';
    Token.expiresAt = 0;
  }

  static isExpired() {
    return Date.now() > Token.expiresAt;
  }
}