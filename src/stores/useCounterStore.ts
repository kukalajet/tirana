import create from "zustand";

type CounterState = {
  count: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
  reset: () => void;
};

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: (by) => set((state) => ({ count: state.count + by })),
  decrease: (by) => set((state) => ({ count: state.count - by })),
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
