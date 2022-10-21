export const TODO = (reason: string = "Not implemented") => {
  throw new Error(reason);
};

export const println = (...data: any[]) => {
  println(...data);
};

export const newLine = () => {
  println("");
};

export const repeat = (times: number, block: (index: number) => void): void => {
  for (let index = 0; index < times; index++) {
    block(index);
  }
};

export const measureTimeMillis = (block: () => {}): void => {
  TODO();
};

export class Pair<T1, T2> {
  constructor(readonly first: T1, readonly second: T2) {}
}

export const pair = <T1, T2>(first: T1, second: T2): Pair<T1, T2> => {
  return new Pair(first, second);
};

export class Triple<T1, T2, T3> {
  constructor(readonly first: T1, readonly second: T2, readonly third: T3) {}
}

export const triple = <T1, T2, T3>(
  first: T1,
  second: T2,
  third: T3
): Triple<T1, T2, T3> => {
  return new Triple(first, second, third);
};

export interface ILazy<T> {
  instance: T;
}

export const lazy = <T>(initializer: () => T): ILazy<T> => {
  return new Lazy(initializer);
};

class Lazy<T> implements ILazy<T> {
  private _instance?: T = undefined;

  constructor(private initializer: () => T) {}

  public get instance(): T {
    if (this._instance == null) {
      this._instance = this.initializer();
    }
    return this._instance;
  }
}
