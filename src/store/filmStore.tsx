import { create } from "zustand";

const API_KEY = "7c9f2041";

export const useFilmStore = create((set) => ({
  films: [],
  filmDetail: null,
  loading: false,
  page: 1,
  totalResults: 0,
  search: "batman", // default search name

  // Fetch film list (search + pagination)
  fetchFilms: async (search = "batman", page = 1, year = "") => {
    set({ loading: true });
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=movie&page=${page}&y=${year}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        set({
          films: data.Search,
          loading: false,
          page,
          totalResults: parseInt(data.totalResults, 10),
          search,
        });
      } else {
        set({ films: [], loading: false, totalResults: 0 });
      }
    } catch (err) {
      console.error("Failed to fetch films:", err);
      set({ loading: false });
    }
  },

  // Fetch detail film 
  fetchFilmDetail: async (id) => {
    set({ loading: true });
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
      );
      const data = await res.json();

      if (data.Response === "True") {
        set({ filmDetail: data, loading: false });
      } else {
        set({ filmDetail: null, loading: false });
      }
    } catch (err) {
      console.error("Failed to fetch film detail:", err);
      set({ loading: false });
    }
  },
}));
