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

export default CompactProperty;
