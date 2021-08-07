import { CompactProperty, Status } from "../../models";

type ListCommonType = {
  status: Status;
  properties: Array<CompactProperty>;
  fetch: () => void;
};

export default ListCommonType;
