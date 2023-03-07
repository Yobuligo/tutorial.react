import { IProduct } from "./IProduct";

export class Product implements IProduct {
  private static products: IProduct[] = [
    {
      id: "book",
      title: "Book",
      description: "Relax with a book in your hand",
      path: "book.png",
    },
    {
      id: "handy",
      title: "Handy",
      description: "A nice mobile phone for everybody",
      path: "mobilePhone.png",
    },
    {
      id: "notebook",
      title: "Notebook",
      description: "Nice to code and play games",
      path: "notebook.png",
    },
    {
      id: "tablet",
      title: "Tablet",
      description:
        "Here we have a handy device for watching movies, playing games, surfing and more",
      path: "tablet.png",
    },
    {
      id: "tv",
      title: "TV",
      description: "Watch your favorite series right now",
      path: "tv.png",
    },
  ];

  constructor(
    public id: string,
    public title: string,
    public description: string,
    public path: string
  ) {}

  static findById(id: string): IProduct | undefined {
    for (const product of this.findAll()) {
      if (product.id === id) {
        return product;
      }
    }
    return undefined;
  }

  static save(product: Product) {
    this.products.push(product);
  }

  static findAll(): Product[] {
    return Product.products;
  }
}
