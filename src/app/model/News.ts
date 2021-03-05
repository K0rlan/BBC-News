export class News{
  id: number;
  name: string;
  image: string;
  info: string;


  constructor(id: number, name: string, image: string, info: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.info = info;
  }
}
