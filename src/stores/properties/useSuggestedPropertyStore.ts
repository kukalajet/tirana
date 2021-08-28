import create from "zustand";
import { fetchSuggestedProperties } from "../../apis";
import { ListCommonType, Status } from "../../models";

type SuggestedPropertyState = ListCommonType;

const useSuggestedPropertyStore = create<SuggestedPropertyState>(
  (set, get) => ({
    status: Status.Initial,
    properties: [],
    fetch: async (filters) => {
      const status = get().status;
      if (status !== Status.Initial) set(() => ({ status: Status.Initial }));

      const properties = await fetchSuggestedProperties(filters);
      set((state) => ({
        properties: state.properties.concat(properties),
        status: Status.Success,
      }));
    },
  })
);

export default useSuggestedPropertyStore;
