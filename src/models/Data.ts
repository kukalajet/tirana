import { PropertyKeys } from "./CompactProperty";

type Data<T> = {
  key: PropertyKeys;
  value: T;
};

export default Data;
