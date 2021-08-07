import create from "zustand";
import { fetchNewProperties } from "../../apis";
import { Status } from "../../models";
import ListCommonInterface from "./ListCommonType";

type NewPropertyState = ListCommonInterface;

const useNewPropertyStore = create<NewPropertyState>((set) => ({
  status: Status.Initial,
  properties: [],
  fetch: async () => {
    const properties = await fetchNewProperties();
    set((state) => ({
      properties: state.properties.concat(properties),
      status: Status.Success,
    }));
  },
}));

export default useNewPropertyStore;
