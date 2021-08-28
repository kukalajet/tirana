import create from "zustand";
import { fetchNewProperties } from "../../apis";
import { ListCommonType, Status } from "../../models";

type NewPropertyState = ListCommonType;

const useNewPropertyStore = create<NewPropertyState>((set, get) => ({
  status: Status.Initial,
  properties: [],
  fetch: async (filters) => {
    const status = get().status;
    if (status !== Status.Initial) set(() => ({ status: Status.Initial }));

    const properties = await fetchNewProperties(filters);
    set((state) => ({
      properties: state.properties.concat(properties),
      status: Status.Success,
    }));
  },
}));

export default useNewPropertyStore;
