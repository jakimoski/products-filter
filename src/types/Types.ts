export type ProductType = {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
};

export type ProductsList = {
  products: ProductType[];
};

export type FilterPropsType = {
  updateProducts(prev: ProductType[]): void;
  productsList: ProductType[];
};

export type FooterLinkPropsType = {
  title: string;
  links?: string[];
};

export type CategoryPageProps = {
  categoryName: string;
};

export type LinkType = {
  linkProps: string;
};

export type FilterOptionProps = {
  category: string;
  isActive: string;
  filterProducts: (event: any) => void;
  filerItemsLength: (name: string) => number;
};
