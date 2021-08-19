import create from "zustand";
import { fetchPopularProperties } from "../../apis";
import { ListCommonType, Status } from "../../models";

type PopularPropertyState = ListCommonType;

const usePopularPropertyStore = create<PopularPropertyState>((set) => ({
  status: Status.Initial,
  properties: [],
  fetch: async () => {
    const properties = await fetchPopularProperties();
    set((state) => ({
      properties: state.properties.concat(properties),
      status: Status.Success,
    }));
  },
}));

export default usePopularPropertyStore;
