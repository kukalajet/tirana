import { Filter } from "../models";

const FILTERS: Array<Filter> = [
  {
    modalSize: "medium",
    selection: "multi",
    label: "Status",
    items: [
      { key: "status", value: "For Sale" },
      { key: "status", value: "For Rent" },
      { key: "status", value: "Sold" },
    ],
  },
  {
    modalSize: "medium",
    selection: "single",
    label: "Price",
    items: [
      { key: "price", value: "hey" },
      { key: "price", value: "hey1" },
      { key: "price", value: "hey2" },
      { key: "price", value: "hey3" },
    ],
  },
  {
    modalSize: "medium",
    selection: "multi",
    label: "Property Type",
    items: [
      { key: "type", value: "hey" },
      { key: "type", value: "hey1" },
      { key: "type", value: "hey2" },
      { key: "type", value: "hey3" },
    ],
  },
];

export default FILTERS;
