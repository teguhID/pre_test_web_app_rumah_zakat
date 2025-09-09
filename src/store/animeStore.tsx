import { create } from "zustand";

export const useAnimeStore = create((set, get) => ({
  animes: [],
  animeDetail: null,
  genres: [],
  loading: false,
  page: 1,
  lastPage: 1,
  selectedGenre: null,
  searchQuery: "",

  // Fetch list anime
  fetchAnimes: async (page = 1, genreId = null, search = "") => {
    set({ loading: true });
    try {
      let url = `https://api.jikan.moe/v4/anime?page=${page}`;
      if (genreId) url += `&genres=${genreId}`;
      if (search) url += `&q=${encodeURIComponent(search)}`;

      const res = await fetch(url);
      const data = await res.json();

      set({
        animes: data.data,
        loading: false,
        page: data.pagination.current_page,
        lastPage: data.pagination.last_visible_page,
      });
    } catch (err) {
      console.error("Failed to fetch anime list:", err);
      set({ loading: false });
    }
  },

  // Fetch detail anime
  fetchAnimeDetail: async (id) => {
    set({ loading: true });
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await res.json();

      set({ animeDetail: data.data, loading: false });
    } catch (err) {
      console.error("Failed to fetch anime detail:", err);
      set({ loading: false });
    }
  },

  // Fetch genres
  fetchGenres: async () => {
    try {
      const res = await fetch("https://api.jikan.moe/v4/genres/anime");
      const data = await res.json();
      set({ genres: data.data });
    } catch (err) {
      console.error("Failed to fetch genres:", err);
    }
  },
}));
