import { PropertyKeys } from "./Property";

type Data<T> = {
  key: PropertyKeys;
  value: T;
};

export default Data;
