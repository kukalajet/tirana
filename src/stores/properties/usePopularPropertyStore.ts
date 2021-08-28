import create from "zustand";
import { fetchPopularProperties } from "../../apis";
import { ListCommonType, Status } from "../../models";

type PopularPropertyState = ListCommonType;

const usePopularPropertyStore = create<PopularPropertyState>((set, get) => ({
  status: Status.Initial,
  properties: [],
  fetch: async (filters) => {
    const status = get().status;
    if (status !== Status.Initial) set(() => ({ status: Status.Initial }));

    const properties = await fetchPopularProperties(filters);
    set((state) => ({
      properties: state.properties.concat(properties),
      status: Status.Success,
    }));
  },
}));

export default usePopularPropertyStore;
