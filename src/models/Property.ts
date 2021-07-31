type PropertyType =
  | "Any"
  | "Single House"
  | "Apartment"
  | "Townhouse"
  | "Villa"
  | "Condos";

export type CompactProperty = {
  id: number;
  type: PropertyType;
  address: string;
  price: string;
  isForSale: boolean;
  bedrooms: number;
  bathrooms: number;
  size: string;
};
