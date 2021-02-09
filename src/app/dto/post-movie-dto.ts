export class PostMovieDto {
  title: string;
  year: number;
  ageRestriction: number;
  price: number;

  constructor(title: string, year: number, ageRestriction: number, price: number) {
    this.title = title;
    this.year = year;
    this.ageRestriction = ageRestriction;
    this.price = price;
  }
}
