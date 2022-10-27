import { IIdGenerator } from "./../../03 Lesson Practice Project/services/IIdGenerator";

class IdGeneratorInternal implements IIdGenerator {
  private cursor: number = 0;

  next(): number {
    this.cursor++;
    return this.cursor;
  }
}

export const IdGenerator: IIdGenerator = new IdGeneratorInternal();
