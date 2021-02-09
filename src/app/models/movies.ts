export class Movies {
  public id: number;
  public title: string;
  public year: number;
  public ageRestriction: number;
  public price: number;

  constructor(id: number, title: string, year: number, ageRestriction: number, price: number) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.ageRestriction = ageRestriction;
    this.price = price;
  }
}
