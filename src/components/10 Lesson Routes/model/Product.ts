import { IProduct } from "./IProduct";

export class Product implements IProduct {
  constructor(
    public id: string,
    public title: string,
    public description: string
  ) {}

  static findById(id: string): IProduct | undefined {
    for (const product of this.findAll()) {
      if (product.id === id) {
        return product;
      }
    }
    return undefined;
  }

  static findAll(): Product[] {
    return [
      {
        id: "handy",
        title: "Handy",
        description: "A nice mobile phone for everybody",
      },
      {
        id: "notebook",
        title: "Notebook",
        description: "Nice to code and play games",
      },
      {
        id: "tablet",
        title: "Tablet",
        description:
          "Here we have a handy device for watching movies, playing games, surfing and more",
      },
    ];
  }
}
