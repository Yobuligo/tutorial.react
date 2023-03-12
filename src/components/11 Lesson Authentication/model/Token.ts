import { ifNotNull } from "@yobuligo/core.typescript";

export class Token {
  static keyToken: string = "token";
  readonly value: string = "";

  constructor(value: string) {
    this.value = value;
  }

  static create(email: string, password: string): Token {
    return new Token(`${email} ${password}`);
  }

  static login(email: string, password: string): Token | undefined {
    return ifNotNull(localStorage.getItem(this.keyToken), (value) => {
      const credentials = value.split(" ");
      if (credentials[0] === email && credentials[1] === password) {
        return new Token(value);
      }
      return undefined;
    });
  }

  static delete() {
    localStorage.removeItem(this.keyToken);
  }

  static has(): boolean {
    return Token.find() !== undefined;
  }

  static hasNot(): boolean {
    return !this.has();
  }

  static find(): Token | undefined {
    return ifNotNull(localStorage.getItem(this.keyToken), (value) => {
      return new Token(value);
    });
  }

  static save(token: Token) {
    localStorage.setItem(this.keyToken, token.value);
  }
}
