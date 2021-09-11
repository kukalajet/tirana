import PropertyStatus from "./PropertyStatus";
import PropertyType from "./PropertyType";
import { LatLng } from "../components/MapView";

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
  coordinate: LatLng;
  description: string;
};

export default Property;
