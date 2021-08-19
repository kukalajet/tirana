import create from "zustand";
import { fetchNewProperties } from "../../apis";
import { ListCommonType, Status } from "../../models";

type NewPropertyState = ListCommonType;

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
