export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: IRating;
  title: string;
  quantity: number;
}

interface IRating {
  rate: number;
  count: number;
}
