import Price from "./Price";
import PropertyStatus from "./PropertyStatus";
import PropertyType from "./PropertyType";
import { RequireAtLeastOne } from "../utils";

type Filters = {
  status?: PropertyStatus | Array<PropertyStatus>;
  type?: PropertyType | Array<PropertyType>;
  price?: RequireAtLeastOne<Price>;
};

export default Filters;
