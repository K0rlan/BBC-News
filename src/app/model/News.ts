export class News {
  id: number;
  categoryId: number;
  favStatus: boolean;
  category: string;
  name: string;
  image: string;
  image2: string;
  image3: string;
  information: string;


  constructor(id: number, categoryId: number, category: string, name: string,
              image: string, image2: string, image3: string, information: string) {
    this.id = id;
    this.categoryId = categoryId;
    this.favStatus = false;
    this.category = category;
    this.name = name;
    this.image = image;
    this.image2 = image2;
    this.image3 = image3;
    this.information = information;
  }
}
