import PropertyStatus from "./PropertyStatus";
import PropertyType from "./PropertyType";

type CompactProperty = {
  id: number;
  type: PropertyType;
  address: string;
  price: string;
  status: PropertyStatus;
  bedrooms: number;
  bathrooms: number;
  size: string;
  previewImage: string;
};

// Can this be automated? Extract types from `CompactProperty`.
export type PropertyKeys =
  | "id"
  | "type"
  | "address"
  | "price"
  | "status"
  | "bedrooms"
  | "bathrooms"
  | "size";

export default CompactProperty;
