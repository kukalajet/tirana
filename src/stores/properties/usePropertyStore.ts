import create from "zustand";
import { fetchPropertyById } from "../../apis";
import { Property, Status } from "../../models";

type PropertyStoreType = {
  status: Status;
  property?: Property;
  fetch: (id: number) => void;
};

const usePropertyStore = create<PropertyStoreType>((set, get) => ({
  status: Status.Initial,
  property: undefined,
  fetch: async (id: number) => {
    const status = get().status;
    if (status !== Status.Initial) set(() => ({ status: Status.Initial }));

    const property = await fetchPropertyById(id);
    set((_) => ({
      property: property,
      status: Status.Success,
    }));
  },
}));

export default usePropertyStore;
