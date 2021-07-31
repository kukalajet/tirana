import create from "zustand";
import { fetchPopularProperties } from "../../apis";
import { CompactProperty, Status } from "../../models";

type PopularPropertyState = {
  status: Status;
  properties: Array<CompactProperty>;
  fetch: () => void;
};

const usePopularPropertyStore = create<PopularPropertyState>((set) => ({
  status: Status.Initial,
  properties: [],
  fetch: async () => {
    console.log("fetching");
    const properties = await fetchPopularProperties();
    console.log("fetched");
    set((state) => ({
      properties: state.properties.concat(properties),
      status: Status.Success,
    }));
  },
}));

export default usePopularPropertyStore;
