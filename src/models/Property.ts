import PropertyStatus from "./PropertyStatus";
import PropertyType from "./PropertyType";

type Seller = {
  name: string;
  phone: string;
};

type Property = {
  id: number;
  type: PropertyType;
  address: string;
  price: string;
  status: PropertyStatus;
  bedrooms: number;
  bathrooms: number;
  size: string;
  images: Array<string>;
  seller: Seller;
};

export default Property;
