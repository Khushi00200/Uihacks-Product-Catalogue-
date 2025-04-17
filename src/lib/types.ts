export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  specs?: {
    width?: string;
    weight?: string;
    length?: string;
    color?: string;
  };
  materials?: string;
  delivery?: string;
}
