import { Filter } from "../models";

const FILTERS: Array<Filter> = [
  {
    modalSize: "medium",
    selection: "multi",
    label: "Status ",
    items: [{ value: "For Sale" }, { value: "For Rent" }, { value: "Sold" }],
  },
  {
    modalSize: "medium",
    selection: "single",
    label: "Price",
    items: [
      { value: "hey" },
      { value: "hey1" },
      { value: "hey2" },
      { value: "hey3" },
    ],
  },
  {
    modalSize: "medium",
    selection: "multi",
    label: "Property Type",
    items: [
      { value: "hey" },
      { value: "hey1" },
      { value: "hey2" },
      { value: "hey3" },
    ],
  },
];

export default FILTERS;
