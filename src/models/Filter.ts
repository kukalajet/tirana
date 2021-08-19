import Data from "./Data";
import ModalSelection from "./ModalSelection";
import ModalSize from "./ModalSize";

type Filter = {
  modalSize: ModalSize;
  selection: ModalSelection;
  label: string;
  items: Array<Data>;
};

export default Filter;
