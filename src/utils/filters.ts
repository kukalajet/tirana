import { Filter } from "../models";

const FILTERS: Array<Filter> = [
  {
    modalSize: "medium",
    selection: "multi",
    label: "Acquisition Type ",
    items: [{ label: "For Sale" }, { label: "For Rent" }, { label: "Sold" }],
  },
  {
    modalSize: "medium",
    selection: "single",
    label: "Price",
    items: [
      { label: "hey" },
      { label: "hey1" },
      { label: "hey2" },
      { label: "hey3" },
    ],
  },
  {
    modalSize: "medium",
    selection: "multi",
    label: "Property Type",
    items: [
      { label: "hey" },
      { label: "hey1" },
      { label: "hey2" },
      { label: "hey3" },
    ],
  },
];

export default FILTERS;
