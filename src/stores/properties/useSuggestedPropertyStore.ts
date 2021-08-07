import create from "zustand";
import { fetchSuggestedProperties } from "../../apis";
import { Status } from "../../models";
import ListCommonType from "./ListCommonType";

type SuggestedPropertyState = ListCommonType;

const useSuggestedPropertyStore = create<SuggestedPropertyState>((set) => ({
  status: Status.Initial,
  properties: [],
  fetch: async () => {
    const properties = await fetchSuggestedProperties();
    set((state) => ({
      properties: state.properties.concat(properties),
      status: Status.Success,
    }));
  },
}));

export default useSuggestedPropertyStore;
