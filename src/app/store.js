import { create } from "zustand";

const useStore = create((set) => ({
  inputValue: "",
  changeInputValue: (searchInput) => set({ inputValue: searchInput }),
}));

export default useStore;
