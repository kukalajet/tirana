import CompactProperty from "./Property";
import Filters from "./Filters";
import Status from "./Status";

type ListCommonType = {
  status: Status;
  properties: Array<CompactProperty>;
  fetch: (filters?: Filters) => void;
};

export default ListCommonType;
